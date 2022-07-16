import * as notificationsData from '../notifications.json';
import { normalize, schema } from "normalizr";
// const { normalize, schema } = require("normalizr");
// const notificationsData = require('../../notifications.json')

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {idAttribute: 'guid'} )
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})
const normalizedData = normalize(notificationsData.default, [notification]);

export function getAllNotificationsByUser(userId) {

  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;
  const userNotifications = [];

  for (const item in notifications) {
    if (notifications[item].author === userId) {
      userNotifications.push(messages[notifications[item].context]);
    }
  }

  return userNotifications;
}


export {normalizedData}
