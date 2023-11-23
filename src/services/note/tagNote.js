import { supabase } from '../clients/supabaseClient'

export async function tagNote ({ noteId, tagId }) {
  const { data: noteTag } = await supabase
    .from('note_tag')
    .insert({ note_id: noteId, tag_id: tagId })
    .select()

  return noteTag
}
