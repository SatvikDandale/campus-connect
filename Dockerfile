FROM node:12 AS build
WORKDIR /app
COPY app/package.json /app
RUN npm install
COPY app/src /app
COPY app/public /app
RUN cd app && npm run build && http-server build -p $PORT
