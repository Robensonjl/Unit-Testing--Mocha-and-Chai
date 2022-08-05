/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  const found = students.find((student) => student.name === name);
  if(!found) return null;
  const answer = found.score;
  return answer;
}

module.exports = findStudentScoreByName;

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

findStudentScoreByName(students, "Natalee Vargas");

console.log(findStudentScoreByName(students, "Natalee Vargas"));