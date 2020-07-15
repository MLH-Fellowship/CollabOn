FROM node:12.17.0-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# CMD ["npm", "run", "serve"]

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY conf/nginx.conf /etc/nginx/nginx.conf
# COPY conf/snakeoil.conf /etc/nginx/snakeoil.conf

# RUN apt-get update \
#       && apt-get install -y apache2-utils ssl-cert