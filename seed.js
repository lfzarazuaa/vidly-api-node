const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Comedy",
    movies: [
      {
        title: "Airplane",
        numberInStock: 5,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
      {
        title: "The Hangover",
        numberInStock: 10,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
      {
        title: "Wedding Crashers",
        numberInStock: 15,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
    ],
  },
  {
    name: "Action",
    movies: [
      {
        title: "Die Hard",
        numberInStock: 5,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
      {
        title: "Terminator",
        numberInStock: 10,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
      {
        title: "The Avengers",
        numberInStock: 15,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
    ],
  },
  {
    name: "Romance",
    movies: [
      {
        title: "The Notebook",
        numberInStock: 5,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
      {
        title: "When Harry Met Sally",
        numberInStock: 10,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
      {
        title: "Pretty Woman",
        numberInStock: 15,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
    ],
  },
  {
    name: "Thriller",
    movies: [
      {
        title: "The Sixth Sense",
        numberInStock: 5,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
      {
        title: "Gone Girl",
        numberInStock: 10,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
      {
        title: "The Others",
        numberInStock: 15,
        dailyRentalRate: 2,
        isLikeSelected: false,
      },
    ],
  },
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Movie.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const movies = genre.movies.map((movie) => ({
      ...movie,
      genre: { _id: genreId, name: genre.name },
    }));
    await Movie.insertMany(movies);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
