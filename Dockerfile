FROM node:18.18.0-alpine

WORKDIR /app


COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npx tailwindcss-cli@latest build -o ./public/styles.css

ENV NODE_ENV=development

EXPOSE 3000

CMD ["yarn", "start"]
