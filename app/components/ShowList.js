"use client";

import { useState } from "react";
import AddButtonCard from "./AddButtonCard";
import Card from "./Card";
import AddMovieForm from "./AddMovieForm";

export default function ShowList({ data }) {
  const [updatedData, setupdatedData] = useState(data);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddCard = (newCard) => {
    setupdatedData((prevCards) => [...prevCards, newCard]);
    setShowAddForm(false);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
  };

  const handleDeleteClick = (id) => {
    const afterDelete = updatedData.filter((item) => item.id !== id);
    setupdatedData(afterDelete);
  };

  const handleAddButtonClick = () => {
    setShowAddForm(true);
  };

  const isEvenLength = data.length % 2 === 0;
  return (
    <>
      {updatedData.map((item) => (
        <Card
          key={item.id - 1}
          id={item.id - 1}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          onDeleteClick={() => handleDeleteClick(item.id)}
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
          <AddMovieForm onAddMovie={handleAddCard} onCancel={handleCancelAdd} />
        </div>
      )}
    </>
  );
}
