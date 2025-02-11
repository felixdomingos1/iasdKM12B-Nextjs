# IASD KM12B  🏢

![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![React](https://img.shields.io/badge/React-18.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)

## 📋 Sobre o Projeto

Sistema de gestão integrada para a Igreja Adventista do Sétimo Dia KM12B, desenvolvido com Next.js 15 e tecnologias modernas. O sistema gerencia diversos aspectos da igreja, incluindo membros, departamentos, eventos e clubes.

### 🌟 Principais Funcionalidades

- **Gestão de Membros**: Cadastro e gerenciamento completo de membros por adicionar logo mais
- **Departamentos**: Administração de departamentos e líderes  por adicionar logo mais
- **Clubes**: Gestão dos clubes (Aventureiros, Desbravadores, etc.)  por adicionar logo mais
- **Eventos**: Organização e controle de eventos da igreja  por adicionar logo mais
- **Financeiro**: Controle de dízimos, ofertas e despesas por adicionar logo mais
- **Dashboard**: Painéis administrativos personalizados por adicionar logo mais
- **Multi-idiomas**: Suporte para Português e Inglês

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Banco de Dados**: PostgreSQL
- **ORM**: Prisma
- **Autenticação**: NextAuth.js
- **Internacionalização**: next-intl
- **Formulários**: React Hook Form + Zod
- **Estado Global**: Zustand
- **Testes**: Jest + React Testing Library
- **CI/CD**: GitHub Actions

## 📦 Estrutura do Projeto 

```
iasd-km12b/
├── src/
│   ├── app/                    # App Router e páginas
│   ├── components/             # Componentes reutilizáveis
│   ├── contexts/              # Contextos React
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Utilitários e configurações
│   ├── models/                # Types e interfaces
│   ├── services/             # Serviços e APIs
│   └── styles/               # Estilos globais
├── prisma/                   # Schema e migrações
├── public/                   # Assets estáticos
├── tests/                    # Testes
└── locales/                 # Arquivos de tradução
```

## 🚀 Como Iniciar

### Pré-requisitos

- Node.js 18.17 ou superior
- pnpm 8.x
- PostgreSQL 14+

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/felixdomingos1/iasdKM12B-Nextjs.git
cd iasdKM12B-Nextjs
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Configure o banco de dados:
```bash
pnpm prisma migrate dev
pnpm prisma generate
```

5. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

## 🔧 Configuração

### Variáveis de Ambiente

```env
DATABASE_URL="postgresql://user:password@localhost:3306/iasd_km12b"
NEXTAUTH_SECRET="sua-chave-secreta"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

### Scripts Disponíveis

```bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Cria build de produção
pnpm start        # Inicia servidor de produção
pnpm test         # Executa testes
pnpm lint         # Executa linting
pnpm format       # Formata código
```

## 📱 PWA e Responsividade

O projeto é totalmente responsivo e funciona como PWA (Progressive Web App), permitindo:

- Instalação no dispositivo
- Funcionamento offline
- Notificações push
- Atualização automática

## 🔒 Segurança

- Autenticação JWT
- Proteção CSRF
- Rate Limiting
- Sanitização de inputs
- Validação de dados com Zod
- Políticas de CORS configuráveis

## 🧪 Testes

```bash
# Executa todos os testes
pnpm test

# Executa testes com coverage
pnpm test:coverage

# Executa testes em modo watch
pnpm test:watch
```

## 📈 Monitoramento

- Integração com Sentry para monitoramento de erros
- Analytics com Vercel
- Logs estruturados
- Métricas de performance

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

## 🎯 Roadmap

- [ ] Implementação de microsserviços
- [ ] Integração com sistemas da IASD
- [ ] App mobile com React Native
- [ ] Sistema de backup automatizado
- [ ] Módulo de relatórios avançados

---

Desenvolvido com ❤️ pela equipe de Comunicação e Imagem da IASD KM12B
```