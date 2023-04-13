FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
COPY .git /.git
RUN npm i

EXPOSE 4000

CMD ["npm", "run", "start"]