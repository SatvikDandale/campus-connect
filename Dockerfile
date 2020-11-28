FROM node:12 AS build
WORKDIR /app
COPY package.json /app
RUN npm install
COPY src /app
COPY public /app
RUN cd app && npm run build && http-server build -p $PORT
