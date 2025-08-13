# 🚀 Tutorial Ilustrado: Como Instalar o Visanetpay no Railway

Este guia mostra passo a passo, com imagens de referência e dicas, como colocar o Visanetpay no ar usando o Railway.

---

## 1. Crie sua conta Railway

Acesse [https://railway.app/](https://railway.app/) e clique em **Sign up**.  
Faça login usando GitHub para facilitar o deploy direto do seu repositório.

![Sign up Railway](https://user-images.githubusercontent.com/62496872/270071991-9a5b7c6e-2b2e-4d0c-a9cf-511b2a6b2da6.png)

---

## 2. Fork ou clone o repositório Visanetpay

- Se estiver no GitHub, clique em **Fork** para criar uma cópia sua do projeto.
- Ou, para clonar:
  ```bash
  git clone https://github.com/<SEU_USUARIO>/<SEU_FORK>.git
  cd <SEU_FORK>
  ```

---

## 3. Instale dependências localmente (opcional)

No terminal:
```bash
npm install
```
Isso também valida se o projeto está funcionando antes do deploy.

---

## 4. Novo Projeto no Railway

No painel Railway, clique em **New Project**  
Escolha **Deploy from GitHub repo**

![New Project Railway](https://user-images.githubusercontent.com/62496872/270072117-78d7169f-9d0f-44e9-bd33-8d47c72a6a5c.png)

Selecione seu fork do Visanetpay.

---

## 5. Banco de Dados PostgreSQL

No menu do projeto, clique em **Plugins** > **PostgreSQL** > **Add Plugin**

![Add PostgreSQL](https://user-images.githubusercontent.com/62496872/270072169-9356fa5e-3d84-4b5e-8b8e-6e97e3d1331e.png)

Copie o valor de `DATABASE_URL` para usar nas variáveis de ambiente.

---

## 6. Variáveis de Ambiente

No Railway, clique no serviço `api` > **Variables**  
Adicione:

- `DATABASE_URL` (do passo anterior)
- `JWT_SECRET` (um texto seguro aleatório)
- `WHATSAPP_TOKEN` (simulado ou real)
- `SMS_TOKEN` (simulado ou real)

No serviço `web`:
- `NEXT_PUBLIC_API_URL` (coloque a URL do serviço `api` gerada pelo Railway, por exemplo: https://visanetpay-api.up.railway.app)

![Variáveis de Ambiente](https://user-images.githubusercontent.com/62496872/270072225-fe7e5eab-3a44-4c85-b1b2-5c4d7e6f8f2a.png)

---

## 7. Rodando as migrations do banco

No serviço `api`, clique em **Shell**.  
Execute:

```bash
npx prisma generate
npx prisma migrate deploy
```

Isso cria as tabelas automaticamente.

---

## 8. Deploy Automático

O Railway detecta monorepo e cria dois serviços: `api` e `web`.  
Cada push no seu GitHub faz deploy automático.

- Para testar local:  
  ```bash
  npm run dev
  ```
  Depois, acesse:
  - Frontend: http://localhost:3000
  - API: http://localhost:3001/api/health

---

## 9. Acesse sua aplicação

- Frontend: URL do serviço `web` (ex: https://visanetpay-web.up.railway.app)
- API: URL do serviço `api` (ex: https://visanetpay-api.up.railway.app/api/health)

---


## Referências Railway

- Documentação oficial: [https://docs.railway.app/](https://docs.railway.app/)
- Como usar plugins: [https://docs.railway.app/plugins/postgresql](https://docs.railway.app/plugins/postgresql)
- Como configurar variáveis: [https://docs.railway.app/develop/variables](https://docs.railway.app/develop/variables)

---

## Suporte e Próximos Passos

- Para novas features, só pedir!
- Para dúvidas de deploy, prints de erro, logs ou dúvidas de configuração, envie aqui que instruo como corrigir.