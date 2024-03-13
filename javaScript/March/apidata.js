function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    data.forEach((value) => {
        console.log("Value",value);
    });
  })
  .catch((error) => {
    console.error(error);
  });
