import { supabase } from './clients/supabaseClient'

export default async function updateNoteText ({ id, title, text }) {
  try {
    const { data } = await supabase
      .from('note')
      .update({ title, text })
      .eq('id', id)
      .select()

    return data
  } catch (error) {
    console.error('An error ocurred while trying to edit note ', error)
  }
}
