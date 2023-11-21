import { supabase } from '../clients/supabaseClient'

export const getLoggedUser = async function () {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
