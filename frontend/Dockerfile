FROM node:20.11-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env.docker .env.local
CMD ["npm", "run", "dev"]
