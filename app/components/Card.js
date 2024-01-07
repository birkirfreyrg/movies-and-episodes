import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="border h-56 flex w-2/5 rounded overflow-hidden shadow-lg">
      {imageUrl && (
        <img
          className="w-48 max-w-full h-auto object-cover"
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="flex-grow flex flex-col justify-between px-6 py-4">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="overflow-y-auto h-32">
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
