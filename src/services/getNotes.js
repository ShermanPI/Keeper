import { supabase } from './clients/supabaseClient'

export async function getNotes () {
  try {
    const { data: note } = await supabase
      .from('note')
      .select('*')
    return note.map(el => {
      return {
        id: el.id,
        title: el.title,
        bodyText: el.text
      }
    })
  } catch (err) {
    throw Error('An error ocurred in get notes request ', err.message)
  }
}
