import { supabase } from './clients/supabaseClient'

export default async function updateNoteColor ({ id, hexColor }) {
  try {
    const { data } = await supabase
      .from('note')
      .update({ background_color: hexColor })
      .eq('id', id)
      .select()

    return data
  } catch (error) {
    console.error('An error ocurred while trying to edit note ', error)
  }
}
