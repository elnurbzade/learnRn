const students = [
  {
    id: 1,
    name: "Elnur",
    age: 31,
    subject: "RN",
  },
  {
    id: 2,
    name: "Elshen",
    age: 22,
    subject: "Dart",
  },
  {
    id: 3,
    name: "Adil",
    age: 21,
    subject: "Computer Science",
  },
];

const extraInfo = {
  address: "Baku sheh",
  phoneNumber: "0552627812",
};

const profileWithExtraInfo = students.map((info) => ({
  ...info,
  extraInfo: { ...extraInfo },
}));

console.log(profileWithExtraInfo);

const employeeDetails = {
  fullName: "Elnur Bayramzade",
  position: "Intern",
  yearsOfExperience: 5,
  id: 525,
  skills: ["JS", "React", "ReactNative"],
  contact: {
    email: "elnurbzade@gmail.com",
    phone: "0777250992",
  },
};
console.log(employeeDetails);

delete employeeDetails.contact.email;

console.log(employeeDetails);

employeeDetails.department = "Software Development";
console.log(employeeDetails);

employeeDetails.structure = "Information and Security";
employeeDetails.isAmerica = false;
employeeDetails.haveBranch = null;
console.log(employeeDetails);

const { yearsOfExperience, ...info2 } = employeeDetails;

console.log(info2);

const profileWithNewExtraInfo = students.map((info3) => ({
  ...info3,
  info2: { ...info2 },
}));

console.log(profileWithNewExtraInfo);

const {
  fullName: employeeName,
  position: position,
  contact: contact,
  id: seriya,
} = employeeDetails;

// Logging the extracted values
console.log("Employee Name:", employeeName);
console.log("Position:", position);
console.log("Contact:", contact);
console.log("Seriya:", seriya);

const {
  fullName,
  position: employeePosition,
  contact: employeeContact,
  ...newRestVariable
} = employeeDetails;

console.log("Employee Name:", fullName);
console.log("Position:", position);
console.log("Contact:", contact);
console.log("Yeni Variable:", newRestVariable);

//-------------------------------------------------------//

const projects = [{ projectId: 100 }, { score: 1000 }];

console.log("Project ID:", projects[0].projectId);
console.log("Score:", projects[1].score);

const personalInfo = {
  homeAdress: "Xalqlar dostlugu",
  emergencyContact: "0515250992",
  maritalStatus: "married",
};

const completeEmployeeProfile = { ...employeeDetails, ...personalInfo };
console.log(completeEmployeeProfile);
