FROM node:20

WORKDIR /app

COPY ../../package*.json ./
COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build || true

EXPOSE 3000

CMD ["npm", "start"]