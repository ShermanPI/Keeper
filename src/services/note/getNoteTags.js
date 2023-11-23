import { supabase } from '../clients/supabaseClient'

export async function getNoteTags ({ noteId }) {
  try {
    const { data: noteTags, error } = await supabase
      .from('note_tag')
      .select('*')
      .eq('note_id', noteId)

    if (error) throw error
    return (noteTags ? noteTags.map((el) => el.tag_id) : [])
  } catch (error) {
    console.error('error at getting note tags: ', error.message)
  }
}
