FROM node:18

RUN mkdir /var/test

WORKDIR /var/test

COPY ./ ./

RUN npm i

EXPOSE 3000

CMD ["node","app.js"]
