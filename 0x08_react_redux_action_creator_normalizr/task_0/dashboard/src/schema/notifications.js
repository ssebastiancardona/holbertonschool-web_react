import * as notifications from '../../notifications.json';

// const notifications = require('../../notifications.json')

export function getAllNotificationsByUser(userId) {
  return notifications.default.filter(
      (item) => item.author.id === userId
    ).map(({ context }) => context)
}
