const scores = [95, 87, 92, 78, 88];
console.log(scores);
const [firstScore, secondScore, ...otherScores] = scores;
console.log(firstScore);

const students = {
  name: "Elnur",
  age: 31,
  isEnrolled: false,
};
console.log(students);
const { name, age } = students;
console.log(name);
console.log("Ad:", name);
console.log("Yash:", age);
console.log(typeof scores);
console.log(scores.length);
const sum = firstScore + secondScore;
console.log(sum);
const diff = firstScore - secondScore;
console.log(diff);

const isScoresMatchingAge =
  firstScore >= students.age && secondScore >= students.age;
console.log(
  "Do first and second scores match the student's age?",
  isScoresMatchingAge
);

const isEnrolled = !students.isEnrolled;
console.log("Is the student enrolled?", isEnrolled);
