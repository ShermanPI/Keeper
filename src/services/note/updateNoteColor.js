import { supabase } from '../clients/supabaseClient'

export async function updateNoteColor ({ id, hexColorString }) {
  try {
    const { data } = await supabase
      .from('note')
      .update({ background_color: hexColorString })
      .eq('id', id)
      .select()

    return data
  } catch (error) {
    console.error('An error ocurred while trying to edit note ', error)
  }
}
