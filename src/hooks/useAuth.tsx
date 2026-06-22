import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase/client';

type AuthContextData = { session: Session | null; user: User | null; loading: boolean; signIn(email:string,password:string):Promise<void>; signUp(name:string,email:string,password:string):Promise<void>; resetPassword(email:string):Promise<void>; signOut():Promise<void> };
const AuthContext = createContext({} as AuthContextData);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null); const [loading, setLoading] = useState(true);
  useEffect(() => { supabase.auth.getSession().then(({ data }) => { setSession(data.session); setLoading(false); }); const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s)); return () => sub.subscription.unsubscribe(); }, []);
  const value = useMemo<AuthContextData>(() => ({ session, user: session?.user ?? null, loading, async signIn(email,password){ const { error } = await supabase.auth.signInWithPassword({ email, password }); if (error) throw error; }, async signUp(name,email,password){ const { error } = await supabase.auth.signUp({ email, password, options: { data: { name } } }); if (error) throw error; }, async resetPassword(email){ const { error } = await supabase.auth.resetPasswordForEmail(email); if (error) throw error; }, async signOut(){ await supabase.auth.signOut(); } }), [session, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
