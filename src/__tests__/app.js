import "@testing-library/jest-dom/extend-expect";

import { within, fireEvent } from "@testing-library/dom";
import App from "../app.view";
import PugView from "../views/pug";
import createFakePugModel from "../pugModelFactory";

function render(View, options = {}) {
  const el = options.el || document.createElement("div");
  new View({ ...options, el });
  return {
    container: el,
    ...within(el),
  };
}

test("renders counter", async () => {
  const { getByText } = render(App);

  expect(getByText("0")).toBeTruthy();
  fireEvent.click(getByText("click me"));
  expect(getByText("1")).toBeTruthy();
});

test("renders pug", async () => {
  const { findByAltText, getByText } = render(PugView, {
    model: createFakePugModel(),
  });

  // await img element to be provided initial src.
  const { src: initialSrc } = await findByAltText("current pug");

  fireEvent.click(getByText("new pug"));

  // await img element to be provided final src.
  const { src: finalSrc } = await findByAltText("current pug");

  expect(initialSrc).not.toBe(finalSrc);
});
