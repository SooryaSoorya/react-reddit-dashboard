import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { mockData } from "./mocks/mockData";

jest.mock("./services/PostProvider", () => ({
  useRedditPage: () => ({
    ...mockData,
    deleteComment: jest.fn(),
  }),
}));

test("App component should render", () => {
  const subject = render(<App />);
  expect(subject).toMatchSnapshot();
});
