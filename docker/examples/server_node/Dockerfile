FROM node:current-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .
RUN npm install express


ENV NODE_ENV production

CMD [ "node", "src/server.js" ]
USER node
