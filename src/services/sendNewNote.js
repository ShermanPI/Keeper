import { supabase } from './clients/supabaseClient'

export default async function sendNewNote ({ title, text, backgroundColor = '#ccc6e19d' }) {
  const { data, error } = await supabase
    .from('note')
    .insert([
      { title, text, background_color: backgroundColor }
    ])
    .select()
  return { data, error }
}
