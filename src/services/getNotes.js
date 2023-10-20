import { supabase } from './clients/supabaseClient'

export async function getNotes () {
  const { data: note } = await supabase
    .from('note')
    .select('id')

  return note
}
