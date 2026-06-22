# TaskList App

Aplicativo mobile acadêmico de controle de tarefas criado com React Native, TypeScript e Supabase.

## Recursos
- Autenticação com Supabase Auth: login, cadastro e recuperação de senha.
- CRUD de listas com reordenação por arrastar e persistência do campo `position`.
- CRUD de atividades por lista, conclusão individual e ações em lote no menu de três pontinhos.
- Histórico por lista salvo na tabela `task_history`.
- Relatório com totais, percentual geral e filtros.
- Recurso extra: tema claro/escuro em Configurações.

## Configuração do Supabase
1. Crie um projeto no Supabase.
2. Execute o script `supabase/schema.sql` no SQL Editor.
3. Crie um arquivo `.env` na raiz:

```bash
EXPO_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
```

## Executar
```bash
npm install
npm run start
```

Use o app Expo Go ou um emulador Android/iOS para abrir o aplicativo.
