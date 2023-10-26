import { supabase } from './clients/supabaseClient'

export async function getNotes () {
  try {
    const { data: notes } = await supabase
      .from('note')
      .select('*')

    console.log(notes)
    return notes.map(el => {
      return {
        id: el.id,
        title: el.title,
        bodyText: el.text
      }
    })
  } catch (err) {
    console.log(err.message)
    throw Error('An error ocurred in get notes request ', err.message)
  }
}
