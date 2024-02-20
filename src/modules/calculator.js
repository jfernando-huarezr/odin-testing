//multiplication and division round to 2 decimals

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    const answer = a / b;
    return Number.isInteger(answer) ? answer : Math.round(answer * 100) / 100;
  },
  multiply: function (a, b) {
    const answer = a * b;
    return Number.isInteger(answer) ? answer : Math.round(answer * 100) / 100;
  },
};

export { calculator };
