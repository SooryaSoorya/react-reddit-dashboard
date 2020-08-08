import React from "react";
import PostContent from "./PostContent";
import { mockData } from "../../mocks/mockData";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import commentImg from "./../../assets/images/comment.svg";
import formatHtml from "../../utils/formatHtml";
configure({ adapter: new Adapter() });

const mockPostText = () => ({
  html: formatHtml(mockData["post"].selftext_html),
});

describe("<PostContent />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PostContent
        commentCount={mockData["comments"].length}
        bodyHTML={mockPostText}
      />
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("has post text element", () => {
    let node = wrapper.find(".post-text");
    expect(node).toBeTruthy();
  });
  it("has a comment count element", () => {
    let node = wrapper.find(".comment-count");
    expect(node).toBeTruthy();
  });
  it("has a image tag", () => {
    let node = wrapper.find(".comment-img");
    expect(node).toBeTruthy();
  });
});

describe("PostContent body,img & data check", () => {
  const wrapper = shallow(
    <PostContent
      commentCount={mockData["comments"].length}
      bodyHTML={mockPostText}
    />
  );
  it("post body should be there", () => {
    let element = wrapper.find(".post-text").render().text();
    expect(element).not.toBeNull();
  });

  it("comment length should be valid ", () => {
    let element = wrapper.find(".comment-count");
    let renderedCount = element.text().substr(0, element.text().indexOf(" "));
    expect(element).toHaveLength(1);
    expect(mockData["comments"].length).toBe(Number(renderedCount));
  });

  it("comment-image with src should render correctly", () => {
    const wrapper = shallow(<PostContent />);
    expect(wrapper.find("img").length).toEqual(1);
    expect(wrapper.find("img").prop("src")).toEqual(commentImg);
  });
});
