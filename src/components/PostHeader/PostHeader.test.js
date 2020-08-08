import React from "react";
import PostHeader from "./PostHeader";
import { mockData } from "../../mocks/mockData";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import formatUpvotes from "../../utils/formatData";
configure({ adapter: new Adapter() });

describe("<PostHeader />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PostHeader
        subreddit={mockData["post"].subreddit_name_prefixed}
        upvote={mockData["post"].ups}
        title={mockData["post"].title}
      />
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("has sub reddit element", () => {
    let node = wrapper.find(".sub-reddit");
    expect(node).toBeTruthy();
  });
  it("has an upvote element", () => {
    let node = wrapper.find(".upvotes");
    expect(node).toBeTruthy();
  });
  it("has a title element", () => {
    let node = wrapper.find(".head-title");
    expect(node).toBeTruthy();
  });
});

describe("PostHeader data check", () => {
  const wrapper = shallow(
    <PostHeader
      subreddit={mockData["post"].subreddit_name_prefixed}
      upvote={formatUpvotes(mockData["post"].ups)}
      title={mockData["post"].title}
    />
  );

  it("subreddit link should render correctly", () => {
    let element = wrapper.find(".sub-reddit").text();
    expect(element).toBe(mockData["post"].subreddit_name_prefixed);
  });
  it("subreddit link should render correctly", () => {
    let element = wrapper.find(".upvotes").text();
    expect(element).toBe(formatUpvotes(mockData["post"].ups));
  });
  it("title should render correctly", () => {
    let element = wrapper.find(".head-title").text();
    expect(element).toBe(formatUpvotes(mockData["post"].title));
  });
});
