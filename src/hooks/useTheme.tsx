import React, { createContext, useContext, useMemo, useState } from 'react';
export const palettes = { light: { bg:'#f8fafc', card:'#fff', text:'#0f172a', muted:'#64748b', primary:'#2563eb', danger:'#dc2626', success:'#16a34a', border:'#e2e8f0' }, dark: { bg:'#020617', card:'#0f172a', text:'#f8fafc', muted:'#94a3b8', primary:'#60a5fa', danger:'#f87171', success:'#4ade80', border:'#1e293b' } };
type ThemeMode = 'light'|'dark';
const ThemeContext = createContext({ mode:'light' as ThemeMode, colors: palettes.light, toggleTheme: () => {} });
export function ThemeProvider({ children }: { children: React.ReactNode }) { const [mode,setMode]=useState<ThemeMode>('light'); const value=useMemo(()=>({mode, colors:palettes[mode], toggleTheme:()=>setMode(m=>m==='light'?'dark':'light')}),[mode]); return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>; }
export const useTheme = () => useContext(ThemeContext);
