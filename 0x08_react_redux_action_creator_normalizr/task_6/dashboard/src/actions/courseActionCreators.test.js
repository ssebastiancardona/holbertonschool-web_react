import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("action creators tests", function () {
  it("Calling selectCourse with 1 as argument should return: { type: SELECT_COURSE, index: 1 }", () => {
    const result = selectCourse(1);

    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it("Calling unSelectCourse with 1 as argument should return: { type: UNSELECT_COURSE, index: 1 }", () => {
    const result = unSelectCourse(1);

    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
