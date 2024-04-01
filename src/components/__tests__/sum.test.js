import { sum } from "../Sum";

test("sum function calculate the sum of the two number", () => {
  const result = sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});
