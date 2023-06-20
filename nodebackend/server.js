const express = require('express');
const app = express();
const { Expo } = require('expo-server-sdk');
const expo = new Expo();

// Endpoint to send push notifications
app.post('/send-push', (req, res) => {
  // Prepare the push notification messages
  const messages = [
    {
      to: '<push_token>', // The Expo push token of the recipient device
      sound: 'default',
      body: 'Hello, this is a push notification!',
      data: { additionalData: 'optional' },
    },
  ];

  // Send the push notifications
  const sendNotifications = async () => {
    try {
      const chunks = expo.chunkPushNotifications(messages);
      const tickets = [];

      for (const chunk of chunks) {
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
      }

      // Process the tickets to handle errors or get receipt IDs
      // For example, you can check the status of each ticket using expo.getPushNotificationReceiptsAsync()

      res.send('Push notification sent successfully');
    } catch (error) {
      // Handle error if sending notifications fails
      console.error('Error sending push notifications:', error);
      res.status(500).send('Error sending push notifications');
    }
  };

  sendNotifications();
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});