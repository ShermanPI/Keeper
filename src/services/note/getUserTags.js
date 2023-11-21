import { supabase } from '../clients/supabaseClient'

export default async function getUserTags ({ userId }) {
  try {
    const { data: tags, error } = await supabase
      .from('tag')
      .select('*')
      .eq('user_id', userId)

    if (error) throw error
    return { tags }
  } catch (error) {
    console.error(error.message)
  }
}
