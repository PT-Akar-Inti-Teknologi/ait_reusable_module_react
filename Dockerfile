FROM node:20.0.0-alpine

RUN apk update

WORKDIR /app

EXPOSE 3000

COPY package.json .

RUN yarn install

# COPY package* ./
RUN yarn autoclean 

COPY . .

ENV NODE_ENV=development
CMD ["yarn", "dev"]
