import { supabase, supabasePublicBucketUrl as bucketUrl } from './clients/supabaseClient'

export async function getNoteAttachments ({ noteId }) {
  try {
    const { data: attachments } = await supabase
      .from('attachment')
      .select('*')
      .eq('note_id', noteId)
    return (attachments.map((el) => ({ url: `${bucketUrl}/${el.title}`, id: el.id, width: el.width, height: el.height })))
  } catch (error) {
    console.error('An error ocurred when getting the note images', error.message)
  }
}
