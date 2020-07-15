FROM node:12.17.0-alpine

WORKDIR /app

COPY . .

RUN npm install
# RUN npm run build

CMD ["npm", "run", "serve"]
# FROM nginx
# RUN mkdir /app
# COPY --from=0 /app/dist /app
# COPY conf/nginx.conf /etc/nginx/nginx.conf
# COPY conf/snakeoil.conf /etc/nginx/snakeoil.conf

# RUN apt-get update \
#       && apt-get install -y apache2-utils ssl-cert