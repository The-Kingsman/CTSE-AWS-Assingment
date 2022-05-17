FROM node:14.18-alpine AS BUILD_IMAGE
RUN apk add --no-cache nodejs npm
WORKDIR /productservice
COPY ["package.json", "./"]
RUN npm install
COPY . .

FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /productservice /app/
EXPOSE 5000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]