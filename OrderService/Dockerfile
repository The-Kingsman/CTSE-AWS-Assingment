FROM node:14.18-alpine AS BUILD_IMAGE
RUN apk add --no-cache nodejs npm
WORKDIR /orderservice
COPY ["package.json", "./"]
RUN npm install
COPY . .

FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /orderservice /app/
EXPOSE 5050
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]