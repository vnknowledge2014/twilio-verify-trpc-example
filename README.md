# tRPC twilio verify app

## Setup
1. Build .env file by change .env.exaple in directory ./packages/api-server and fill in config:
```
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_API_KEY=
TWILIO_AUTH_API_SECRET_KEY=
TWILIO_SERVICE_SID=
```
2. Docker ready and you just run docker command on terminal/cmd:
```
docker-compose up -d
```
3. Access url: `http://localhost:3000` on browser

## TechStack
1. Build API by [tRPC]('trpc.io')
2. Using boilerplate expressjs and react by [Jack Herrington]('https://www.youtube.com/c/JackHerrington')