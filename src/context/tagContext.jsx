import { createContext, useState } from 'react'

const tagContext = createContext([])

function TagContextProvider ({ children }) {
  const [tags, setTags] = useState([])
  const addTag = ({ newTagName }) => {
    const newTags = [...tags]
    newTags.push(newTagName)
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
