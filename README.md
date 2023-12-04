# Bot Chat Integration

Effortlessly automate tasks, from scheduling messages to content organization, enhancing efficiency. This bot is the solution for seamless integration, saving time, and boosting overall team productivity.

Currently Applicable : Slack

[Creating an App in Slack (Bot)](https://medium.com/@tandinwangchen/adding-bot-to-slack-6236168693c2)

## Installation

```bash
npm i ams-bot
```

## Usage

```JavaScript
const { sendMessage } = require("ams-bot"); // import the installed package

// Replace these values with your actual data
const channel = 'your_channel_id';
const message = 'Hello, Slack!';
const slackApiToken = 'your_slack_api_token';
const pin = 'boolean (true/false)'

sendMessage(channel, message, slackApiToken, pin);

```

## Tagging someone

in message pass <@${userName}> pass the userID !!!