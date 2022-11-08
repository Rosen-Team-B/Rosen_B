FROM node:latest

WORKDIR /src

COPY rosen_app/package.json .
COPY rosen_app/package-lock.json .

RUN npm ci

COPY rosen_app/ .

EXPOSE 3000

CMD ["npm", "start"]