# Build Application
FROM node:lts-slim as prebuild
WORKDIR /usr/src/prebuild

COPY . .

RUN yarn install
RUN npm run postinstall
RUN npm run build


# Run App
FROM node:lts-slim as app

WORKDIR /usr/src/app

COPY --from=prebuild /usr/src/prebuild/.output .

EXPOSE 3000

CMD ["node", "./server/index.mjs"]