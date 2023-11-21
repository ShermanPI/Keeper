import { createContext, useEffect, useState, useContext } from 'react'
import { session } from './contextLogin'
import getUserTags from '../services/note/getUserTags'

const tagContext = createContext([])

function TagContextProvider ({ children }) {
  const [tags, setTags] = useState([])
  const { loggedUser } = useContext(session)

  useEffect(() => {
    (async () => {
      if (loggedUser) {
        const { tags } = await getUserTags({ userId: loggedUser.id })
        setTags(tags)
      }
    })()
  }, [loggedUser])

  const addTag = ({ newTag }) => {
    const newTags = [...tags]
    newTags.push(newTag)
    setTags(newTags)
  }

  const deleteTag = ({ tagName }) => {
    const newTags = [...tags]
    const indexToDelete = newTags.indexOf(tagName)
    newTags.splice(indexToDelete, 1)
    setTags(newTags)
  }

  return (
    <tagContext.Provider value={{ tags, addTag, deleteTag }}>
      {children}
    </tagContext.Provider>
  )
}

export { tagContext, TagContextProvider }
