import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tultuilkggwdtyxmkrir.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
