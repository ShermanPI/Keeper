import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tultuilkggwdtyxmkrir.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
export const supabasePublicBucketUrl = 'https://tultuilkggwdtyxmkrir.supabase.co/storage/v1/object/public/note_images'
