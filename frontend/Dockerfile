FROM node:11.13.0
WORKDIR /app

RUN npm install -g yarn

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./
EXPOSE 4200

CMD ["yarn", "start"]
