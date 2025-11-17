import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gjctldwqhvsyhcrynqug.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqY3RsZHdxaHZzeWhjcnlucXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTc0MDAsImV4cCI6MjA3ODk3MzQwMH0.M594cvYa3GX9y9zaEGFMwfDiAMPqLIEo87vs5Fo-6Nk";
export const supabase = createClient(supabaseUrl, supabaseKey);
