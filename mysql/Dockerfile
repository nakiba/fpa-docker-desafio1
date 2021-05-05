FROM mysql:5.7 as builder

# needed for intialization
ENV MYSQL_ROOT_PASSWORD=root

COPY initdb.sql /docker-entrypoint-initdb.d/