FROM node:16


# set working directory
WORKDIR /usr/src/app/dashboards

# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "run", "start"]