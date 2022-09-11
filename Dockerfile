FROM node:alpine
WORKDIR /usr/my-ip-api
COPY package.json .
RUN npm install
COPY . .
CMD [ "node", "build/Server.js" ]