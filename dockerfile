FROM node:alpine
ENV VERSION=v14.9.0 NPM_VERSION=6 YARN_VERSION=latest HOST=mysql
RUN npm install 
COPY . .
EXPOSE 3000
CMD npm start