const users = [
    { name: "Alice", age: 30, interests: ["coding", "hiking"], email: "alice@example.com" },
    { name: "Bob", age: 25, interests: ["gaming", "reading"], email: "bob@example.com" },
    { name: "Charlie", age: 35, interests: ["coding", "cooking", "reading"], email: "charlie@example.com" },
    { name: "Diana", age: 28, interests: ["yoga", "reading", "gardening"], email: "diana@example.com" },
    { name: "Ethan", age: 40, interests: ["hiking", "photography"], email: "ethan@example.com" },
    { name: "Fiona", age: 22, interests: ["music", "gaming"], email: "fiona@example.com" },
    { name: "George", age: 32, interests: ["coding", "gaming", "reading"], email: "george@example.com" },
    { name: "Hannah", age: 27, interests: ["writing", "yoga"], email: "hannah@example.com" },
    { name: "Ian", age: 30, interests: ["photography", "cooking"], email: "ian@example.com" },
    { name: "Julia", age: 24, interests: ["coding", "yoga"], email: "julia@example.com" },
];

function sendEmail (testEmail) {
    testEmail.map((user)=>{
        if(user.age >=18){
            console.log(`Email send to ${user.name}`);
        }
    })
}


function getMatchedUsers(params) {
    params.map((user) => {
        if (user.age >= 25 && user.age <= 35) {
            console.log(`Name ${user.name} Age ${user.age}`);
        }
    });
}
getMatchedUsers(users)
// const nameAge = users.map((user)=> {return user >=25 && usage <=30});

// console.log(nameAge);

