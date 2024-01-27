//Object Manipulation using delete //
const main = {
  ad: "Elnur",
  soyad: "Bayramzade",
  yas: 31,
  company: "wEBzaDev",
  email: "elnurbzade@yahoo.com",
};
console.log(main);

delete main.yas;
console.log(main);

const { company, yas, ...rest } = main;
console.log(rest);

// Object Destructuring with Variable Renaming //
const eaCamp = {
  who: "Xeyyam",
  how: "best",
  what: "teach",
};
const { who: teacher, how: teaching, what: doit } = eaCamp;
console.log(teacher, teaching, doit);

const { what, how, ...other } = eaCamp;
console.log(other);

// const {teacher, doit, ...other2} = eaCamp
// console.log(other2); - bu işləməyəcək, çünki buradakilar eaCamp objectinin property-ləri deyil //

// Working with Arrays within Objects:
const course = {
  courseName: "EACamp",
  workers: ["Elshad", "Serxan", "Xeyyam"],
};

console.log(course.workers);

course.workers.push("Kenan", "Ibrahim");
console.log(course.workers);

//Working with Arrays outside of Objects //

let meyveler = ["alma", "mandarin", "portagal"];
console.log(meyveler);
meyveler.push("uzum");
console.log(meyveler);

let yeniMeyveler = [...meyveler, "kivi"];

console.log(yeniMeyveler);

// const mainArray = [
//     { ad: "Elnur",
//     soyad: "Bayramzade",
//     yas: 31,
//     company: "wEBzaDev",
//     email: "elnurbzade@yahoo.com" }
//   ];

//   const main2 = [...mainArray, { address: "Baku" }];
//   console.log(main2);   özümə maraqlı gəldi ki, rest object daxilində yeni key:value elave ede bilirmi?
//  ancaq objecti array halina saldiqda bunu etmek olur //

const grades = [12, 34, 43, 42, 85, 92, 78, 95, 89];
console.log("First index:", grades[0]);
console.log("Second index:", grades[1]);
console.log("Other index:", grades[7]);
const lastIndex = grades.length - 1;
console.log("The Last Index:", lastIndex);
console.log("Last Grades:", grades[lastIndex]);
const lastSecondIndex = grades.length - 2;
console.log("Last Second Index:", lastSecondIndex);
console.log("Last Second Index value", grades[lastSecondIndex]);

const studentProfile = {
  hisName: "Elshen",
  hisAge: 25,
  subject: "RN",
};
console.log(studentProfile);
const { hisAge, ...profileWithoutAge } = studentProfile;
console.log(profileWithoutAge);

const additionalInfo = {
  address: "Baku city",
  phoneNumber: "552927392",
};

const completeProfile = {
  ...studentProfile,
  ...additionalInfo,
};
const completeProfile2 = {
  ...profileWithoutAge,
  ...additionalInfo,
};
console.log(completeProfile);
console.log(completeProfile2);
