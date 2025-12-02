import { createClient } from '@supabase/supabase-js';

// These come from your .env file
const supabaseUrl = 'https://kthafrlwnhrrylcpwwmt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0aGFmcmx3bmhycnlsY3B3d210Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MTA4MTEsImV4cCI6MjA4MDE4NjgxMX0.yFa5rPV8hWEYuQBc4zsoyoZRsPNqjk9D3jv_Qpfv3qc'

export const supabase = createClient(supabaseUrl, supabaseKey);