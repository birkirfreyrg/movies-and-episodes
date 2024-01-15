"use client";

import React from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

export default function Card({ id, title, description, imageUrl }) {
  return (
    <div className="w-2/5">
      <Link href={`/movies/${id}`}>
        <div className="border-stone h-56 flex overflow-hidden">
          {imageUrl && (
            <img
              className="w-48 max-w-full h-auto object-cover"
              src={imageUrl}
              alt={title}
            />
          )}
          <div className="flex-grow flex flex-col justify-start">
            <div className="p-1.5 mx-1">
              <div className="font-bold text-xl mb-1">{title}</div>
              <div className="overflow-y-auto h-32">
                <p className="text-gray-200 text-base">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
