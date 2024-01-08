"use client";

import React from "react";
import DeleteButton from "./DeleteButton";

export default function Card({
  id,
  title,
  description,
  imageUrl,
  onDeleteClick,
}) {
  return (
    <div className="border border-stone-500 h-56 flex w-2/5 rounded overflow-hidden shadow-lg">
      {imageUrl && (
        <img
          className="w-48 max-w-full h-auto object-cover"
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="flex-grow flex flex-col justify-start">
        <DeleteButton id={id} onDeleteClick={onDeleteClick} />
        <div className="p-1.5 mx-1">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="overflow-y-auto h-32">
            <p className="text-gray-200 text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
