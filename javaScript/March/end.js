const endpoints = {
  bored: "http://www.boredapi.com/api",
};

const fetcher = async (endpoint) => {
  console.log('url:', endpoint );
  const response = await fetch(endpoint, {
    method: 'GET',
  });
  const data = await response.json();
  console.log(data);
};

fetcher(`${endpoints.bored}/activity`);
