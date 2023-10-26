import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tultuilkggwdtyxmkrir.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1bHR1aWxrZ2d3ZHR5eG1rcmlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDI4NDAwNiwiZXhwIjoyMDA5ODYwMDA2fQ.iKK7i6Hl8CvoYcoPykKg4DIEuGAUPaR3TDZKGje6GnY'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
