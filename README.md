# Persons DB

This application can store and edit citizens' data.

## Task

You can read the detailed description [in the task file](task.md).

## Stack

Project toolset:

- Next.js
- json-server
- TailwindCSS
- vitest

## Starting from Docker

You need [Docker Desktop](https://www.docker.com/products/docker-desktop/) to run it from Docker.

Inside the project repo run the command:
`docker compose up`

## Starting from Command Line

You need [Node.js](https://nodejs.org/en) to run it from command line.

Go to project folder, then run these commands:

Inside `frontend` folder:

```
npm install
npm run dev
```

Inside `data` folder:

```
npm install -g json-server
json-server --port 3080 .\db.json
```

You might need to use `/` instead of `\`, if you use Mac or Linux.

## History

I started the project on May 31st, 2024.
