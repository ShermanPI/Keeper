import { supabase } from './clients/supabaseClient'

export default async function createNewNote ({ title, text, backgroundColor = '#ccc6e19d', userId }) {
  try {
    const { data } = await supabase
      .from('note')
      .insert({ title, text, background_color: backgroundColor, user_id: userId })
      .select()

    const newNote = data[0]

    return {
      id: newNote.id,
      title: newNote.title,
      bodyText: newNote.text
    }
  } catch (err) {
    console.error('An error ocurred in creating a new note', err.message)
    throw Error('An error ocurred in creating a new note', err.message)
  }
}
