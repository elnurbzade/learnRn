let promise = new Promise(function(resolve, reject) {
    resolve(3);
  
    setTimeout(() => resolve(2), 10000);
  });
  
  promise.then(console.log("10"));