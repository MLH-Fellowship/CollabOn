FROM node:12.17.0-alpine

WORKDIR /app

COPY . .

RUN npm install && npm run build

CMD ["npm", "run", "serve"]