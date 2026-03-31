"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Card({
  id,
  title,
  description,
  imageUrl,
  selectedCategory,
  rating,
}) {
  let pathname = usePathname();

  // remove this when I start working on movies
  if (pathname == "/") pathname = `/${selectedCategory}`;

  const handleClick = (e) => {
    // Stop the click event from bubbling up to parent elements
    e.stopPropagation();
  };

  return (
    <div className="md:w-full lg:w-2/5" onClick={handleClick}>
      <Link href={`${pathname}/${id}`}>
        <div className="border-stone flex flex-col overflow-hidden md:h-56 md:flex-row">
          {imageUrl && (
            <div className="relative h-64 bg-zinc-900 md:h-56 md:w-auto md:flex-none md:bg-transparent">
              <img
                className="h-full w-full object-contain md:w-auto"
                src={imageUrl}
                alt={title}
              />
              {rating !== undefined && rating !== null && (
                <span className="md:hidden absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-yellow-400 text-sm font-semibold">
                  ⭐ {rating.toFixed(1)}/10
                </span>
              )}
            </div>
          )}
          <div className="hidden md:flex flex-grow flex-col justify-start">
            <div className="p-2 md:p-1.5 mx-1 flex flex-col h-full">
              <div className="font-bold text-base md:text-xl mb-1 flex items-center gap-2 flex-shrink-0">
                <span className="line-clamp-1">{title}</span>
              </div>
              <div className="hidden md:block flex-grow overflow-hidden">
                <p className="text-gray-200 text-base line-clamp-6">{description}</p>
              </div>
              {rating !== undefined && rating !== null && (
                <div className="hidden md:flex justify-end mt-1 flex-shrink-0">
                  <span className="text-yellow-400 text-sm font-semibold">
                    ⭐ {rating.toFixed(1)}/10
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
