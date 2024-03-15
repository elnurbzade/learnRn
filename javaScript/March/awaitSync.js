
const promise1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 1 is running");
      }, 1000);
    });
  };
  
  const promise2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 2 is running");
      }, 1200);
    });
  };
  
  const getResult = async () => {
    let result1 = await promise1();
    let result2 = await promise2();
   console.log(result1)
   console.log(result2);
  };

  getResult()
  

  