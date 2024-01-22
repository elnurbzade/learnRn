// Sample array of student objects
// const students = [
//   { name: "Alice", age: 22, grades: [85, 90, 78] },
//   { name: "Bob", age: 20, grades: [92, 88, 95] },
//   { name: "Charlie", age: 21, grades: [75, 80, 85] }
// ];

// // Array destructuring and object handling
// const [, secondStudent,] = students;
// const { name: secondStudentName, age: secondStudentAge, grades: secondStudentGrades } = secondStudent;

// // Array length
// const numberOfStudents = students.length;

// // typeof operator
// const typeOfStudentArray = typeof students;
// const typeOfSecondStudentName = typeof secondStudentName;

// // Arithmetic and comparison operators
// const averageGradeSecondStudent = secondStudentGrades.reduce((acc, grade) => acc + grade, 0) / secondStudentGrades.length;
// const isAboveAverage = averageGradeSecondStudent > 85;

// // Logical expressions
// const isYoungerThan21 = secondStudentAge < 21;
// const hasGoodGrades = secondStudentGrades.every(grade => grade >= 80);

// // Displaying the results
// console.log("Number of students:", numberOfStudents);
// console.log("Type of students array:", typeOfStudentArray);
// console.log("Type of second student's name:", typeOfSecondStudentName);
// console.log("Second student's details:", { name: secondStudentName, age: secondStudentAge, grades: secondStudentGrades });
// console.log("Is the second student younger than 21?", isYoungerThan21);
// console.log("Does the second student have good grades?", hasGoodGrades);
// console.log("Is the average grade above 85?", isAboveAverage);

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
