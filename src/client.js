
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nbbifwyucewuurvzhsaj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iYmlmd3l1Y2V3dXVydnpoc2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4OTIwMDEsImV4cCI6MjA0ODQ2ODAwMX0.yGE9C5fNzCly40DsJvpWuqcA28stlbWI0wppWVCvSO4'
export const supabase = createClient(supabaseUrl, supabaseKey)