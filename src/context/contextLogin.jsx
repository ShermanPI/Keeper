import { createContext, useEffect, useState } from 'react'
import { supabase } from '../services/clients/supabaseClient'
import { useNavigate } from 'react-router-dom'
import { getLoggedUser } from '../services/user/getLoggedUser'

const session = createContext()

const ContextSession = ({ children }) => {
  const [signUpError, setSignUpError] = useState(false)
  const [signInError, setSignInError] = useState(false)
  const [loggedUser, setLoggedUser] = useState(undefined)
  const Navigate = useNavigate()
  useEffect(() => {
    (async function () {
      const user = await getLoggedUser()
      setLoggedUser(user)
    })()

    supabase.auth.onAuthStateChange((event, session) => {
      if (session) { Navigate('/home') }
      if (!session) { Navigate('/') }
    })
  }, [])

  // In case the user is not on public.user
  useEffect(() => {
    (async () => {
      if (loggedUser) {
        await supabase.from('user').upsert({ id: loggedUser.id, email: loggedUser.user_metadata.email, full_name: loggedUser.user_metadata.full_name })
      }
    })()
  }, [loggedUser])

  const createSession = async (email, password, fullName) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })

      if (error) setSignUpError(error.message)

      if (data && !error) {
        // Llamar a la función addUser con los datos del usuario
        await addUser(data.user.email, fullName, data.user.id)
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message)
    }
  }

  const sigInGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      })

      if (error) { console.error(error) }
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
      console.error(error)
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) { console.error(error) }
  }

  const addUser = async (email, fullName, id) => {
    try {
      const { error } = await supabase
        .from('user')
        .insert([
          { id, full_name: fullName, email }
        ])
      if (error) { console.error(error) }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <session.Provider value={{ createSession, initSession, addUser, signOut, sigInGoogle, signUpError, signInError, loggedUser }}>
      {children}
    </session.Provider>
  )
}

export { ContextSession, session }
