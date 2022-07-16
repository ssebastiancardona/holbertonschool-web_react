import { markAsAread, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER , NotificationTypeFilters} from "./notificationActionTypes";

describe("notification action creators tests", function () {
  it("Calling markAsAread with index 1should return: { type: MARK_AS_READ, index: 1 }", () => {
    const expected = { type: MARK_AS_READ, index: 1  };
    const recived = markAsAread(1);
    expect(recived).toEqual(expected);
  });

  it("Calling logout should return: { type: LOGOUT }", () => {
    const expected = {type: SET_TYPE_FILTER, filter: "DEFAULT"};
    const recived = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(recived).toEqual(expected);
  });

});
