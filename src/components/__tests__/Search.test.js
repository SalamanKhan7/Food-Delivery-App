import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListData.json";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should test case of Top Rate Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardBeforeFilter.length).toBe(9);

  const topRateButton = screen.getByRole("button", {
    name: "Top Rated Restaurent",
  });

  fireEvent.click(topRateButton);
  const cardAfterFilter = screen.getAllByTestId("resCard");
  expect(cardAfterFilter.length).toBe(8);
});
it("should test case of Top Rate Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardBeforeFilter.length).toBe(9);

  const searchInput = screen.getByRole("textbox");
  fireEvent.change(searchInput, { target: { value: "dhaba" } });

  const fiterDhabaCard = screen.getAllByTestId("resCard");
  expect(fiterDhabaCard.length).toBe(4);
});
