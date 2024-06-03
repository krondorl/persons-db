FROM node:20-alpine
WORKDIR /app
RUN npm install -g json-server
COPY db.json ./
CMD ["json-server", "--watch", "./db.json", "--port", "3080", "--host", "0.0.0.0"]