
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wcyxtiudfkmcpxtvchpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjeXh0aXVkZmttY3B4dHZjaHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4Njc4OTYsImV4cCI6MjA0ODQ0Mzg5Nn0.8NDmRrwXefqFhOnuoe-N4aXdeRVclVOwiNKZAAZdXwo'
export const supabase = createClient(supabaseUrl, supabaseKey)