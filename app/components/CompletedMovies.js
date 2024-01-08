"use client";

import React, { useState } from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";
import AddButtonCard from "./AddButtonCard";

export default function CompletedMovies() {
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

  const [completedMoviesArray, setCompletedMoviesArray] =
    useState(completedMovies);

  const handleDeleteClick = (id) => {
    // Implement deletion logic and update finishedMovies state
    const updatedMovies = completedMoviesArray.filter(
      (movie) => movie.id !== id
    );
    setCompletedMoviesArray(updatedMovies);
  };

  const handleAddButtonClick = () => {
    // Implement logic for adding a new movie or any other action
    console.log("Add button clicked!");
  };

  const isEvenLength = completedMoviesArray.length % 2 === 0;

  return (
    <CardContainer title="Completed Movies">
      {completedMoviesArray.map((movie) => (
        <Card
          key={movie.id - 1}
          id={movie.id - 1}
          title={movie.title}
          description={movie.description}
          imageUrl={movie.imageUrl}
          onDeleteClick={() => handleDeleteClick(movie.id)}
        />
      ))}
      {console.log(isEvenLength)}
      {isEvenLength ? (
        <>
          <AddButtonCard onClick={handleAddButtonClick} moveLeft />
        </>
      ) : (
        <AddButtonCard onClick={handleAddButtonClick} />
      )}
    </CardContainer>
  );
}
