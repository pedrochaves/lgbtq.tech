FROM node:10.12

WORKDIR /app

COPY package*.json ./
RUN npm install --loglevel=warn && mv package-lock.json /tmp/package-lock.json

COPY . .
