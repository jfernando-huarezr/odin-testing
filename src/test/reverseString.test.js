test("only accepts strings", () => {
  const invalidInputs = [
    1234,
    ["a", "b", "c"],
    { a: 1 },
    null,
    undefined,
    true,
    "",
  ];
  invalidInputs.forEach((input) => {
    expect(() => capitalize(input)).toThrow();
  });
});
