# fpa-docker-desafio1

docker network create pfa-network

docker build -t nakiba/laravel:latest laravel -f laravel/Dockerfile.prod

docker build -t nakiba/node:latest node -f node/Dockerfile.prod

docker build -t nakiba/nginx:latest nginx 

docker run --rm -d --name node --network pfa-network nakiba/laravel

docker run --rm -d --name db --network pfa-network nakiba/db

docker run --rm -d --name nginx -p 8080:80 --network pfa-network nakiba/nginx
 