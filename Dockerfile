FROM node:14.16.1 as base
WORKDIR /app
EXPOSE 8080
EXPOSE 3000
COPY package*.json ./
COPY . .

FROM base as development
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
RUN npm install
