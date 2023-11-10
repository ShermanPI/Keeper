import { supabase } from './clients/supabaseClient'
import generateUuidv4 from '../utilities/generateUuidv4'

export default async function uploadNoteImage ({ file, id, width, height }) {
  try {
    const imageName = `${generateUuidv4()}.${file.type.split('/')[1]}`

    const { data: imageData } = await supabase.storage.from('note_images').upload(imageName, file)
    const imageUrl = `https://tultuilkggwdtyxmkrir.supabase.co/storage/v1/object/public/note_images/${imageData.path}`
    const { data: attachmentData } = await supabase
      .from('attachment')
      .insert({ note_id: id, url: imageUrl, title: imageName, width, height })
      .select()

    return { attachmentData }
  } catch (error) {
    console.error('An error ocurred while attempting uploading the image', error.message)
  }
}
