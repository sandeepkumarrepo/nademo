FROM node:lts-alpine3.16

ENV PORT = 3000

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ..
EXPOSE 3010
CMD ["npm", "start"]