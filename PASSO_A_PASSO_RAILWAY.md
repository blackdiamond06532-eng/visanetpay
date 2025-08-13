# 🚀 Passo a passo fácil: Deploy do Visanetpay no Railway

## 1. Crie sua conta Railway
- Acesse: https://railway.app/
- Clique em **Sign up** e faça login com GitHub.

## 2. Fork ou clone o repositório do Visanetpay
- Se estiver no GitHub, clique em **Fork**.
- Ou, para clonar:
  ```bash
  git clone https://github.com/<SEU_USUARIO>/<SEU_FORK>.git
  cd <SEU_FORK>
  ```

## 3. Instale as dependências localmente (opcional, mas recomendado)
- Instale o Node.js: https://nodejs.org/
- No terminal:
  ```bash
  npm install
  ```

## 4. Configure o projeto no Railway
- No painel Railway, clique em **New Project > Deploy from GitHub repo**.
- Escolha seu fork do Visanetpay.
- O Railway já detecta monorepo e cria serviços para `api` e `web` automaticamente.

## 5. Adicione o banco de dados PostgreSQL
- No projeto Railway, clique em **Plugins** > **PostgreSQL** > **Add Plugin**.
- Copie a variável `DATABASE_URL` gerada e salve para o próximo passo.

## 6. Configure as variáveis de ambiente
- No Railway, vá em cada serviço (`api` e `web`) > **Variables**.
- No serviço `api`, adicione:
  - `DATABASE_URL` (do passo anterior)
  - `JWT_SECRET` (ex: um texto seguro aleatório)
  - `WHATSAPP_TOKEN` e `SMS_TOKEN` (simule ou preencha conforme sua integração)
- No serviço `web`, adicione:
  - `NEXT_PUBLIC_API_URL` (ex: URL pública do serviço `api` no Railway, veja em “Settings” do serviço API)

## 7. Rode as migrations do banco (Prisma)
- No painel do serviço `api`, clique em **Shell**.
- Execute:
  ```bash
  npx prisma generate
  npx prisma migrate deploy
  ```

## 8. Deploy automático
- Toda alteração feita no GitHub será automaticamente deployada pelo Railway.
- Se quiser rodar localmente, use:
  ```bash
  npm run dev
  ```

## 9. Acesse
- **Frontend:** Use o link do serviço `web` (ex: https://visanetpay-web.up.railway.app)
- **API:** Use o link do serviço `api` (ex: https://visanetpay-api.up.railway.app/api/health)
- Cadastre um usuário, faça login, acesse dashboard e admin!

---

## Dicas Finais

- Para features novas, só pedir! (ex: ativar chat, integração pagamentos, webhook, etc)
- Para testes locais, use o arquivo `.env.example` como base e renomeie para `.env` em cada app.
- Railway documenta tudo aqui: https://docs.railway.app/

---