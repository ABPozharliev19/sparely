FROM node:18

WORKDIR /code/

COPY package.json package.json
COPY package-lock.json package-lock.json

ENV NPM_CONFIG_CACHE=/code/.npm

RUN npm install

RUN npm link winston

RUN npm install ts-node -g
RUN npm install -g @nestjs/cli

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

CMD ["npm", "run", "start:dev"]