CREATE DATABASE coursesdb;

use coursesdb;

CREATE TABLE module(id int not null auto_increment, name varchar(255), primary key(id));

INSERT INTO module (name) values ("Docker");
INSERT INTO module (name) values ("Fundamentos de Arquitetura de Software");
INSERT INTO module (name) values ("Comunicação");
INSERT INTO module (name) values ("RabbitMQ");
INSERT INTO module (name) values ("Autenticação Keycloak");