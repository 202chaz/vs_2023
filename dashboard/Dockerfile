FROM node:16


# set working directory
WORKDIR /usr/src/app/dashboard

COPY package.json ./
RUN npm config set legacy-peer-deps true
RUN npm install

# add app
COPY . .

EXPOSE 3001

CMD ["npm", "run", "start"]