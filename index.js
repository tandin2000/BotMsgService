// slackService.js
const axios = require('axios');

const sendMessage = async (channel, message, slackApiToken, pin, options = {}) => {
  try {
    // Step 1: Send the message
    const sendMessageResponse = await axios.post(
      'https://slack.com/api/chat.postMessage',
      {
        channel,
        text: message,
        ...options,
      },
      {
        headers: {
          Authorization: `Bearer ${slackApiToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!sendMessageResponse.data.ok) {
      console.error('Failed to send message:', sendMessageResponse.data.error);
      return;
    }

    console.log('Message sent successfully!');

    // Step 2: Pin the message
    
    if(pin){
        const pinMessageResponse = await axios.post(
        'https://slack.com/api/pins.add',
        {
          channel,
          timestamp: sendMessageResponse.data.ts,
        },
        {
          headers: {
            Authorization: `Bearer ${slackApiToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (pinMessageResponse.data.ok) {
        console.log('Message pinned successfully!');
      } else {
        console.error('Failed to pin message:', pinMessageResponse.data.error);
      }
    }
  } catch (error) {
    console.error('Error sending/pinning message:', error.message);
  }
};

module.exports = { sendMessage };