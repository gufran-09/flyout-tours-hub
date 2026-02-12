
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bfzhzxyjjkcctxnmzafb.supabase.co'
// This is the ANON key from .env, it should work for public reads
const supabaseKey = 'sb_publishable_4zh32a-Z3-QrqEiJiUE65Q_Q05AQGgg' // taken from .env
const supabase = createClient(supabaseUrl, supabaseKey)

async function debug() {
    const { data, error } = await supabase.from('categories').select('name, slug')
    if (error) {
        console.error('Error:', error)
    } else {
        console.log('Categories:', data)
    }
}

debug()
