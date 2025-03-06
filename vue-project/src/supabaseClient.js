import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eozgbvgxdcfrpqdnafeq.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvemdidmd4ZGNmcnBxZG5hZmVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNjQzNTYsImV4cCI6MjA1Njc0MDM1Nn0.m3dMRdpN-QibrvmjUGM4RxTf4ugSRZ9SX8M2Dt3lebA'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);