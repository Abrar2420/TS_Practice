function getMovie(movie) {
  console.log(`${this.title} (${this.year}) - rating: ${this.rating}`);
}

let movie = {
  title: "Inception",
  year: 2010,
  rating: 8.8,
};

getMovie(movie);
