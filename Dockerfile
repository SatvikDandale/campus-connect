FROM node:12-alpine
WORKDIR /app
COPY package.json ./
COPY . ./
RUN npm install
RUN npm install http-server -g
RUN npm run build
CMD http-server build -p $PORT