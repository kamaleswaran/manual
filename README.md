# Manual

## About this Repository

This repository is a Node.js application built using the Fastify framework. It integrates a PostgreSQL database using TypeORM and employs Jest as the testing framework. 

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Fastify**: A fast and low-overhead web framework for Node.js.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **TypeORM**: An ORM for TypeScript and JavaScript (ES7, ES6, ES5) that works with PostgreSQL and other databases.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation Steps

1. Clone the repository
   ``` git clone git@github.com:kamaleswaran/manual.git ```

2. Install packages
  ``` npm install ```

3. Start project
``` npm run start:dev ```

4. Openapi spec
``` http://localhost:8080/docs ```

5. Run test
``` npm run test:dev ```

6. Run test with test coverage
``` npm run test ```

7. Resources: Copy of database backup & postman collectons are available within `/docs` folder
