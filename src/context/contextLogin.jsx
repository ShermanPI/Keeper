import { createContext, useEffect, useState } from 'react'
import { supabase } from '../database/Client'
import { useNavigate } from 'react-router-dom'

const session = createContext()

const ContextSession = ({ children }) => {
  const [signUpError, setSignUpError] = useState(false)
  const [signInError, setSignInError] = useState(false)
  const Navigate = useNavigate()
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) { Navigate('/home') }
      if (!session) { Navigate('/') }
    })
  }, [])

  const createSession = async (email, password, fullName) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })

      if (error) setSignUpError(error.message)

      if (data && !error) {
        console.log('Registro exitoso')
        // Obtener los datos relevantes del usuario registrado

        // Llamar a la función addUser con los datos del usuario
        await addUser(data.user.email, fullName, data.user.id)
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message)
    }
  }

  const sigInGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      })

      if (error) { console.log(error) }

      if (data && !error) {
        console.log('Registro exitoso')
        // Obtener los datos relevantes del usuario registrado

        // Llamar a la función addUser con los datos del usuario
        await addUser(data.user.email, data.user.name, data.user.id)
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message)
    }
  }

  const initSession = async (email, password) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) { setSignInError(error.message) }
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) { console.log(error) }
  }

  const addUser = async (email, fullName, id) => {
    try {
      const { error } = await supabase
        .from('user')
        .insert([
          { id, full_name: fullName, email }
        ])
      if (error) { console.log(error) }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <session.Provider value={{ createSession, initSession, addUser, signOut, sigInGoogle, signUpError, signInError }}>
      {children}
    </session.Provider>
  )
}

export { ContextSession, session }
