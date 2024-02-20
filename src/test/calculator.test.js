test("calculator is an object", () => {
  expect(typeof calculator).tobe("object");
});

test("calculator sum", () => {
  expect(calculator.sum(2, 3)).toBe(5);
});

test("calculator rest", () => {
  expecti(calculator.rest(6, 3)).toBe(3);
});

test("calculator mult", () => {
  expecti(calculator.mult(2, 3)).toBe(6);
});

test("calculator div", () => {
  expecti(calculator.div(8, 3)).toBe(2.6);
});
