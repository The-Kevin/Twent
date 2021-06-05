FROM node:10.24.0

WORKDIR /package/you

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run" "dev"]