FROM node:14

COPY .  /app

WORKDIR /app/dist
RUN yarn 
CMD node main.js
EXPOSE 3000
EXPOSE 3001