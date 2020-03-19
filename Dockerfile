FROM node:10.16.0-slim

WORKDIR /hubot

COPY ./package.json ./yarn.lock /hubot/
RUN yarn

COPY . /hubot/

EXPOSE 8080

CMD ["bin/hubot"]