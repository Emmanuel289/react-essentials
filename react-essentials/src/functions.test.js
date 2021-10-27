import { addNum, subtractNum, multiplyByTwo } from "./functions";

// Test addNum: adds two numbers
test("Add Two Numbers", () => {
  expect(addNum(3, 4)).toBe(7);
});

// Test subtractNum: subtracts two numbers
test("Subtract Two Numbers", () => {
  expect(subtractNum(9, 7)).toBe(2);
});

// Test multiplyByTwo: multiplies a number by two

test("Multiply By Two", () => {
  expect(multiplyByTwo(4)).toBe(8);
});
