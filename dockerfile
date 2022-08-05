FROM  node:17.8.0

WORKDIR /usr/src/app

COPY . .

RUN cd ./packages/api-server

RUN yarn install

RUN cd ../

RUN cd packages/client

RUN yarn install

RUN cd ../../

RUN yarn install

