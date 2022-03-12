FROM node:12.18.2-alpine as build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY src src
COPY public public
COPY .env config-overrides.js tsconfig.paths.json tsconfig.json ./
RUN yarn build

FROM nginx:1.19.4-alpine
COPY --from=build /usr/src/app/build /var/www/cloudike.kr
COPY docker/build/nginx.conf /etc/nginx/conf.d/cloudike.kr.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
