
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jbobuezedrfkkhihltwm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impib2J1ZXplZHJma2toaWhsdHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2ODAyOTgsImV4cCI6MjA0ODI1NjI5OH0.JqmF2Y_vjOKP_bHrJB72wjrtditJMosCZZoUIgK_nv0'
export const supabase = createClient(supabaseUrl, supabaseKey)