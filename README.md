
# Discord.js v14 Starter

This project is used for starting [discord.js](https://npmjs.org/discord.js) slash command bot.
## Create a Bot
Go to [Discord Developer Portal](https://discord.com/developers/applications).

Create a bot ([Follow this docs](https://discord.com/developers/docs/getting-started)).

Make sure you enable all intents

![Intents](https://firebasestorage.googleapis.com/v0/b/imagezing-c65af.appspot.com/o/7ac39823-1d70-4a7f-9edc-435bde499536?alt=media&token=677ea76f-1c8a-4d73-84a5-807a2b1333e7)

Go to `OAuth2 > URL Generator`, Enable `bot`  scope and `Administrator` permission.

And invite bot to your server.

## Getting started
Download or clone this repo and install all dependencies.

Open `.env` file, and add your bot token :
```
TOKEN=YourBotTokenHere
CLIENT_ID=YourBotClientIDHere
```

## Run the bot
For development :
```
npm run dev
```
Production :
```
npm start
```