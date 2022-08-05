// Write your tests here!
const findStudentScoreByName = require("../src/solution.js");
const expect = require("chai").expect;

describe("return a student's score when given their name", () => {
  it("should return the score of the person given", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const expected = 9.2;
    const actual = findStudentScoreByName(students, "Natalee Vargas");
    expect(actual).to.equal(expected);
  });
  it("should return 'null' when the name given does not match a name in the array", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const expected = null;
    const actual = findStudentScoreByName(students, "Terry Peters");
    expect(actual).to.equal(expected);
  });
});
