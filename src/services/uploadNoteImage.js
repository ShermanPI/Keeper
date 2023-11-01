import { supabase } from './clients/supabaseClient'

export default async function uploadNoteImage ({ imageFile }) {
  try {
    const { data } = await supabase
      .storage
      .from('note_images')
      .upload('public/avatar1.png', imageFile)
    console.log(data)
  } catch (error) {
    console.error('An error ocurred while attempting uploading the image', error.message)
  }
}
