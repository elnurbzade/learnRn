async function logMovies() {
  const response = await fetch("http://www.boredapi.com/api/activity?key=5881028");
  const movies = await response.json();
  console.log(movies);
}

console.log(logMovies())


