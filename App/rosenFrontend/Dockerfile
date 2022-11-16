FROM node:latest

WORKDIR /src

COPY rosenFrontend/package.json .
COPY rosenFrontend/package-lock.json .

RUN npm ci

COPY rosenFrontend/ .

EXPOSE 3000

CMD ["npm", "start"]