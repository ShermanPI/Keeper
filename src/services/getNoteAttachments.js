import { supabase, supabasePublicBucketUrl as bucketUrl } from './clients/supabaseClient'

export async function getNoteAttachments ({ noteId }) {
  try {
    const { data: attachments } = await supabase
      .from('attachment')
      .select('*')
      .eq('note_id', noteId)
    console.log(attachments)
    return (attachments.map((el) => ({ url: `${bucketUrl}/${el.title}`, id: el.id })))
  } catch (error) {
    console.error('An error ocurred when getting the note images', error.message)
  }
}
