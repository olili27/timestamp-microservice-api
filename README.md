# Timestamp Microservice

## Get started

First, navigate to the root of the project.
Then, run the npm install command to install all the dependencies of the project:

```bash
npm install
```

Second, run the script below to run the server in development mode:

```bash
npm run dev
```
Optionally, you can install nodemon if it is not globally installed locally on your machine by running the command below so that nodemon is installed as a dev-dependency for the project:

```bash
npm i nodemon -D
```

## Route the API

The API basically has two parts:
- /api/:valid_date_string?
- /api/:invalid_date_string?

### Route with valid date string

This route is accessed at /api/:date?. Whereby date is a valid dynamic date paramter, for example "1451001600000", "2015-12-25". This route has two instances:
1. dynamic date parameter is a type Number
2. dynamic date paramter is a type String

Both the instances return a json object with a unix key date and a utc key date provided the date string input is valid.

```bash
{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
```

If the date parameter is empty, the current time is returned in a JSON object with a unix key date and a utc key date.

```bash
{"unix":1657032849326,"utc":"Tue, 05 Jul 2022 14:54:09 GMT"}
```

### Route with invalid date string

This route is accessed at /api/:date?. Whereby date is an invalid date, for example "abcd", and this returns JSON object with an error key.

```bash
{"error":"Invalid Date"}
```