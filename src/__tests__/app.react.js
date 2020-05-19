import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent, findByAltText } from "@testing-library/react";
import App from "../app.react";
import PugAdapter from "../pug.react";
import createFakePugModel from "../pugModelFactory";

jest.mock();

test("renders counter", async () => {
  const { getByText } = render(<App />);

  expect(getByText("0")).toBeTruthy();
  fireEvent.click(getByText("click me"));
  expect(getByText("1")).toBeTruthy();
});

test("renders pug", async () => {
  let fakePugModel = createFakePugModel();

  const { debug, findByAltText, getByText } = render(
    <PugAdapter pugModel={fakePugModel} />
  );

  const { src: initialSrc } = await findByAltText("current pug");

  fireEvent.click(getByText("new pug"));

  const { src: finalSrc } = await findByAltText("current pug");

  expect(initialSrc).not.toBe(finalSrc);
});
