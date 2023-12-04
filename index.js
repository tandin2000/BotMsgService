// slackService.js
const axios = require('axios');

const sendMessage = async (channel, message, slackApiToken) => {
  try {
    const response = await axios.post(
      'https://slack.com/api/chat.postMessage',
      {
        channel,
        text: message,
      },
      {
        headers: {
          Authorization: `Bearer ${slackApiToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data.ok) {
      console.log('Message sent successfully!');
    } else {
      console.error('Failed to send message:', response.data.error);
    }
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
};

module.exports = { sendMessage };