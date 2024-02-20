import { calculator } from "../modules/calculator.js";

test("calculator is an object", () => {
  expect(typeof calculator).toBe("object");
});

test("calculator sum", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator rest", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test("calculator mult", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("calculator div", () => {
  expect(calculator.divide(8, 3)).toBe(2.67);
});
