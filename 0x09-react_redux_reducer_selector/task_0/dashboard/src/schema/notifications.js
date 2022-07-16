import * as jsonNotification from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users")7

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: 'guid',
  },
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const mySchema = new schema.Array(notification);

let normalizedData = normalize(jsonNotification, mySchema);

const getAllNotificationsByUser = (userId) = {
    const output = []:
    for (const [key, value] of Object.entries(normalizedData.entities.notifications)) {
      if (value.author === userId) {
        output.push(normalizedData.entities.messages[value.context]);
      }
    }
    return output;
  };

module.exports = {
  normalizedData,
  getAllNotificationsByUser,
  };
