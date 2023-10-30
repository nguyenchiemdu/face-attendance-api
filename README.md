<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This is a BE project to demonstrate how to use Prisma ORM with the [Nest](https://github.com/nestjs/nest) framework .

## Installation

### Setup Enviroment Variables

```bash
 cp .env.example .env
```
Config <code>SECRET_KEY</code> and  <code>DATABASE_URL</code> in <code>.env</code> file

### Install Dependencies

```bash
 npm install
```

### Generate Prisma Client

```bash
 npx prisma generate
```

## Running the app

```bash
# development
 npm run start

# watch mode
 npm run start:dev

# production mode
 npm run start:prod
```

## Test

```bash
# unit tests
 npm run test

# e2e tests
 npm run test:e2e

# test coverage
 npm run test:cov
```

