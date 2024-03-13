const getComments = async () =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();
        console.log("Data", data);
    } catch (error){
        console.log("error", error);
    }
};
console.log(getComments());