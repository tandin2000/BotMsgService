# Bot Chat Integration

Effortlessly automate tasks, from scheduling messages to content organization, enhancing efficiency. With a user-friendly interface and customizable features, this bot is the solution for seamless integration, saving time, and boosting overall team productivity.

Currently Applicable : Slack

[Creating an App in Slack (Bot)](https://medium.com/@tandinwangchen/adding-bot-to-slack-6236168693c2)

## Installation

```bash
npm i Bot_chat_integration
```

## Usage

```JavaScript
const { sendMessage } = require("Bot_chat_integration"); // import the installed package

// Replace these values with your actual data
const channel = 'your_channel_id';
const message = 'Hello, Slack!';
const slackApiToken = 'your_slack_api_token';

sendMessage(channel, message, slackApiToken);

```