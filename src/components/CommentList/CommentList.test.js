import React from "react";
import CommentList from "./CommentList";
import { mockData } from "../../mocks/mockData";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<CommentList />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CommentList comments={mockData["comments"]} className={"nested"} />
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("has nested comments", () => {
    let node = wrapper.find("div").at(0);
    expect(["comment-group", "tree"]).not.toBeNull();
  });
});
