import { supabase } from './clients/supabaseClient'

export default async function uploadNoteImage ({ file }) {
  try {
    console.log(file)
    const { data, error } = await supabase
      .storage
      .from('note_images')
      .upload(`public/note.${file.type.split('/')[1]}`, file)
    console.log(`note.${file.type.split('/')[1]}`, error, data)
  } catch (error) {
    console.error('An error ocurred while attempting uploading the image', error.message)
  }
}
