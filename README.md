# VisaNetPay Monorepo

Este repositório monorepo contém todos os projetos relacionados ao VisaNetPay, incluindo backend (API), frontend (Web) e pacotes compartilhados.

## Estrutura

- `apps/api`: Código do backend (API)
- `apps/web`: Código do frontend (web)
- `packages/shared`: Pacotes compartilhados entre frontend e backend

## Primeiros passos

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Copie `.env.example` para `.env` e configure as variáveis de ambiente.
3. Rode os projetos conforme instrução nas pastas `apps/api` e `apps/web`.

---

## Deploy na Railway

1. Faça login em [Railway](https://railway.app/)
2. Importe este repositório.
3. Railway detecta o `railway.json` e configura os plugins/serviços automaticamente.
4. O backend está configurado para usar o Dockerfile em `apps/api/`.
5. Configure as variáveis de ambiente de acordo com `.env.example`.
6. O plugin MongoDB será criado automaticamente.

---