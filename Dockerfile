FROM node

EXPOSE 3000

RUN npm i -g serve

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install .

COPY . .

RUN npm run build

CMD [ "serve" , "-s", "build" ]