export const isEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email.trim());
export function validateEmail(email: string) { if (!email.trim()) return 'E-mail é obrigatório.'; if (!isEmail(email)) return 'Informe um e-mail válido.'; return ''; }
export function validatePassword(password: string) { if (!password) return 'Senha é obrigatória.'; if (password.length < 6) return 'A senha deve ter pelo menos 6 caracteres.'; return ''; }
export function validateName(value: string, label = 'Nome') { if (!value.trim()) return `${label} é obrigatório.`; if (value.trim().length < 3) return `${label} deve ter pelo menos 3 caracteres.`; return ''; }
