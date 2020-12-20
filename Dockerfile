FROM node:12-alpine
WORKDIR /app
COPY app/package.json ./
RUN npm install
RUN npm install http-server -g
COPY app/. ./
RUN npm run build
CMD http-server build -p $PORT