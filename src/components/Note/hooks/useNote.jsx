import { useEffect, useState, useRef } from 'react'
import { getNoteAttachments } from '../../../services/getNoteAttachments'
import updateNoteText from '../../../services/updateNoteText'
import { deleteNoteAttachment } from '../../../services/deleteNoteAttachment'
import uploadNoteImage from '../../../services/uploadNoteImage'

export default function useNote ({ children, title, id, noteColor }) {
  const [textContent, setNoteText] = useState({ title, text: children })
  const noteContentRef = useRef(textContent)
  const [attachments, setAttachments] = useState([])

  useEffect(() => {
    (async () => {
      if (id) {
        const attachments = await getNoteAttachments({ noteId: id })
        setAttachments(attachments)
      }
    })()
  }, [])

  const saveNote = async ({ title, text }) => {
    if (!(JSON.stringify(noteContentRef.current) === JSON.stringify({ title, text }))) {
      const editedNote = await updateNoteText({ id, title, text })
      setNoteText(editedNote[0])
      noteContentRef.current = { title, text }
    }
  }

  const saveImage = async ({ file }) => {
    const img = document.createElement('img')
    const objectURL = URL.createObjectURL(file)
    img.src = objectURL

    img.onload = async () => {
      const { attachmentData: data } = await uploadNoteImage({ file, id, width: img.width, height: img.height })
      URL.revokeObjectURL(objectURL)
      const newAttachments = [...attachments]
      newAttachments.push(data[0])
      setAttachments(newAttachments)
    }
  }
  const deleteImage = ({ imageName, attachmentId }) => {
    const newAttachments = [...attachments]
    const indexToDelete = newAttachments.findIndex(el => el.id === attachmentId)
    newAttachments.splice(indexToDelete, 1)
    setAttachments(newAttachments)
    deleteNoteAttachment({ imageName, attachmentId })
  }

  return {
    textContent,
    attachments,
    noteContentRef,
    saveNote,
    saveImage,
    deleteImage
  }
}
