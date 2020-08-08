import React from "react";
import Comment from "./Comment";
import { mockData } from "../../mocks/mockData";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import formatUpvotes from "../../utils/formatData";
import deleteImg from "./../../assets/images/delete.svg";
configure({ adapter: new Adapter() });

let mockComment = mockData["comments"][0];

jest.mock("../../services/PostProvider", () => ({
  useRedditPage: () => ({
    ...mockData,
    deleteComment: jest.fn(),
  }),
}));

describe("<Comment />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Comment
        id={mockComment.id}
        author={mockComment.author}
        ups={mockComment.ups}
        downs={mockComment.downs}
        created_utc={mockComment.created_utc}
        isDeleted={mockComment.isDeleted}
        body={mockComment.body}
      />
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("has author name element", () => {
    let node = wrapper.find(".author").at(0);
    expect(node).toBeTruthy();
  });
  it("has comment upvotes element", () => {
    let node = wrapper.find(".upvotes");
    expect(node).toBeTruthy();
  });
  it("has timestamp element", () => {
    let node = wrapper.find(".time-ago");
    expect(node).toBeTruthy();
  });
});

describe("Comment data rendering check", () => {
  let wrapper = shallow(
    <Comment
      id={mockComment.id}
      author={mockComment.author}
      ups={mockComment.ups}
      downs={mockComment.downs}
      created_utc={mockComment.created_utc}
      isDeleted={mockComment.isDeleted}
      body={mockComment.body}
    />
  );
  it("author name should render correctly", () => {
    let element = wrapper.find(".author").at(0);
    expect(element).not.toBe(mockComment.author);
  });
  it("comment body render correctly", () => {
    let element = wrapper.find(".comment-content-details").render().text();
    expect(element).not.toBe("");
  });
  it("upvote count should render correctly", () => {
    let element = wrapper.find(".upvotes");
    expect(element).toBeTruthy();
    let upvotes = element.text().substr(0, element.text().indexOf(" "));
    expect(Number(upvotes)).toBe(
      formatUpvotes(mockComment["ups"] - mockComment["downs"])
    );
  });
  it("delete image with src should render correctly", () => {
    expect(wrapper.find("img").length).toEqual(1);
    expect(wrapper.find("img").prop("src")).toEqual(deleteImg);
  });
});
