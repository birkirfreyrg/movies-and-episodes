import React from "react";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";
import getMovies from "@/controllers/getMovies";

export default async function CompletedMovies() {
  const movies = await getMovies();
  const completedMovies = [
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending science fiction thriller.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      id: 2,
      title: "Star Wars",
      description: "A movie about war in space",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 3,
      title: "Star Wars",
      description: "A movie about war in space",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 4,
      title: "Inception",
      description: "A mind-bending science fiction thriller.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      id: 5,
      title: "Star Wars",
      description: "A movie about war in space",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 6,
      title: "Star Wars",
      description: "A movie about war in space",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  return (
    <CardContainer title="Completed Movies">
      <ShowList data={movies} watchStatusDisplay={"completed"} />
    </CardContainer>
  );
}
