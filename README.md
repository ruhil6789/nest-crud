<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).





<!-- In case you want to specify relation to another model, later for populating, you can use @Prop() decorator as well. For example, if Cat has Owner which is stored in a different collection called owners, the property should have type and ref. For example:

import * as mongoose from 'mongoose';
import { Owner } from '../owners/schemas/owner.schema';

// inside the class definition
@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
owner: Owner; -->


<!-- raw schema definition can also be passed to the decorator. This is useful when, for example, a property represents a nested object which is not defined as a class. For this, use the raw() function from the @nestjs/mongoose package, as follows:

@Prop(raw({
  firstName: { type: String },
  lastName: { type: String }
}))
details: Record<string, any>; -->


<!--  FOR  MULTIPLE DATABASE
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionName: 'cats',
    }),
    MongooseModule.forRoot('mongodb://localhost/users', {
      connectionName: 'users',
    }),
  ],
})
export class AppModule {} -->





<!-- nest g service  prisma --no-spec -->
<!-- nest g module prisma -->




version: "2"
services:
  mysql-server:
    image: mysql:8.0.20
    container_name: mysql_container
    restart: on-failure
    command: --default-authentication-plugin=mysql_native_password
    environment:
      - MYSQL_ROOT_PASSWORD=admin123
      - MYSQL_USER=root
      - MYSQL_PASSWORD=admin123
    volumes:
      - /data/dvolumes/cmnico/mysql:/var/lib/mysql
    ports:
      - "0.0.0.0:3306:3306"
    # networks:
    #   - zel_network
  phpmyadmin:
    container_name: phpmyadmin_container
    image: phpmyadmin/phpmyadmin:5.0.1
    restart: on-failure
    environment:
      PMA_HOST: mysql-server
    ports:
      - "0.0.0.0:8084:80"
  # redis:
  #   container_name: redis_c
  #   ports:
  #     - "6379:6379"
  #   volumes:
  #     - /data/dvolumes/cmnico/docker-redis:/data
  #   image: redis
  #   environment:
  #     - REDIS_REPLICATION_MODE=master
  # rabbitmq:
  #   container_name: rabbitmq_c
  #   image: rabbitmq:3-management
  #   command: rabbitmq-server
  #   volumes:
  #     - /data/dvolumes/cmnico/docker-rabbitmq:/data
  #   ports:
  #     - "0.0.0.0:15672:15672"
  #     - "0.0.0.0:5672:5672"
  # rabbitmq:
  #   image: "rabbitmq:management"
  #   container_name: rabbitmq
  #   ports:
  #     - "5672:5672"
  #     - "15672:15672"
  #   environment:
  #     RABBITMQ_DEFAULT_USER: "admin"
  #     RABBITMQ_DEFAULT_PASS: "admin123"
  # networks:
  # - zel_network
  # redis:
  #   container_name: redis_c
  #   ports:
  #     - "6379:6379"
  #   volumes:
  #     - /data/dvolumes/cmnico/docker-redis:/data
  #   image: redis
  # command:
  #   [
  #     "redis-server",
  #     "--requirepass",
  #     "redis123",
  #     "--bind",
  #     "redis",
  #     "--port",
  #     "6379",
  #   ]

  #   environment:
  #     - REDIS_REPLICATION_MODE=master
  #   # networks:
  #   #   zel_network:
  #   #     ipv4_address: 172.18.18.15
  # rabbitmq:
  #   container_name: rabbitmq_c
  #   # image: rabbitmq:3-management-alpine
  #   image: rabbitmq:3-management
  #   command: rabbitmq-server
  #   volumes:
  #     - /data/dvolumes/cmnico/docker-rabbitmq:/data
  # - docker-data:/var/lib/rabbitmq/
  # - docker-logs:/var/log/rabbitmq/
  # environment:
  #   RABBITMQ_ERLANG_COOKIE: rabbit_cook
  #   RABBITMQ_DEFAULT_USER: admin
  #   RABBITMQ_DEFAULT_PASS: admin123
  #   ports:
  #     - "0.0.0.0:15672:15672"
  #     - "0.0.0.0:5672:5672"

  postgres:
    image: postgres:latest
    container_name: postgres
    ports:
      - "5433:5433"
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "postgres"
      POSTGRES_DB: "mydb"

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    ports:
      - "5050:80"
    environment:
      PGADMIN_DEFAULT_EMAIL: "admin@example.com"
      PGADMIN_DEFAULT_PASSWORD: "admin"
