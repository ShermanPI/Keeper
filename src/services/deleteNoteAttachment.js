import { supabase } from './clients/supabaseClient'

export async function deleteNoteAttachment ({ imageName, attachmentId }) {
  try {
    const { imageError } = await supabase
      .storage
      .from('note_images')
      .remove([imageName])

    const { error } = await supabase
      .from('attachment')
      .delete()
      .eq('id', attachmentId)

    if (error) throw error
    if (imageError) throw imageError
  } catch (err) {
    console.error('An error ocurred in creating a new note', err.message)
    throw Error('An error ocurred in creating a new note', err.message)
  }
}
