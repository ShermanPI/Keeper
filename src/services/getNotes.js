import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tultuilkggwdtyxmkrir.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY
console.log(supabaseKey)
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getNotes () {
  const { data: note } = await supabase
    .from('note')
    .select('id')

  return note
}
