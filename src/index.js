import { princess } from "./data/princess";

const getPrincessById = (id) => princess.find((princess) => princess.id === id);
console.log(getPrincessById(5));

const getPrincessByName = (name) =>
  princess.find((princess) => princess.name === name);
console.log(getPrincessByName("Olaf"));

const getPrincessByMovie = (movie) =>
  princess.filter((princess) => princess.movie === movie);
console.log(getPrincessByMovie("Frozen"));
