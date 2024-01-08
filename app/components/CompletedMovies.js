"use client";

import React, { useState } from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";
import AddButtonCard from "./AddButtonCard";
import AddMovieForm from "./AddMovieForm";

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
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDeleteClick = (id) => {
    const updatedMovies = completedMoviesArray.filter(
      (movie) => movie.id !== id
    );
    setCompletedMoviesArray(updatedMovies);
  };

  const handleAddButtonClick = () => {
    setShowAddForm(true);
  };

  const handleAddMovie = (newMovie) => {
    setCompletedMoviesArray((prevMovies) => [...prevMovies, newMovie]);
    setShowAddForm(false);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
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
      {isEvenLength ? (
        <>
          <AddButtonCard onClick={handleAddButtonClick} />
          <AddButtonCard additionalClassName="invisible " />
        </>
      ) : (
        <AddButtonCard onClick={handleAddButtonClick} />
      )}

      {showAddForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <AddMovieForm
            onAddMovie={handleAddMovie}
            onCancel={handleCancelAdd}
          />
        </div>
      )}
    </CardContainer>
  );
}
