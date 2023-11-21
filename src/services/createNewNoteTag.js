import { supabase } from './clients/supabaseClient'

export default async function createNewNoteTag ({ userId, name }) {
  try {
    const { data, error } = await supabase.from('tag').insert({ user_id: userId, name }).select()
    if (error) throw error

    return data[0]
  } catch (err) {
    console.error(err)
  }
}
