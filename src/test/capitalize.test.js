test("converts 'name' to 'Name'", () => {
  expect(capitalize("name")).toBe("Name");
});

test("capitalize any string", () => {
  expect(capitalize("jaguar").toMatch(/^[A-Z]/));
});

test("only accepts strings", () => {
  const invalidInputs = [
    1234,
    ["a", "b", "c"],
    { a: 1 },
    null,
    undefined,
    true,
  ];
  invalidInputs.forEach((input) => {
    expect(() => capitalize(input)).toThrow();
  });
});
