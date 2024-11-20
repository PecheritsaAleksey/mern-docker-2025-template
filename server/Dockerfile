FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

EXPOSE 8080

CMD ["nodemon", "index.js"]
