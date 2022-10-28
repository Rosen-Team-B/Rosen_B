FROM node:17-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY . /app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start", "build", "test"]