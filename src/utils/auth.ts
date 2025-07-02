import { supabase } from '../lib/supabaseClient';

export async function signUpWithRole({
  email,
  password,
  role,
  name,
}: {
  email: string;
  password: string;
  role?: 'creator' | 'agency';
  name?: string;
}) {
  const data: any = {};
  if (role) {
    data.role = role;
  }
  if (name && role) {
    const dataKey = role === 'creator' ? 'creator_name' : 'agency_name';
    data[dataKey] = name;
  }
  const { data: result, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data,
    },
  });
  return { data: result, error };
} 