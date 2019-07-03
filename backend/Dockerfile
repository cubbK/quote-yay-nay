FROM node:11.13.0

# Create app directory
WORKDIR /app

# To make nodemon work we kill the service on port 4001 everytime there is a change
# See config in nodemon.json
RUN apt-get update
RUN apt-get -y install lsof

RUN npm install -g yarn
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]