"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Card({
  id,
  title,
  description,
  imageUrl,
  selectedCategory,
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
        <div className="border-stone h-56 flex overflow-y-auto">
          {imageUrl && (
            <Image
              className="w-48  h-auto object-cover"
              width={500}
              height={500}
              src={imageUrl}
              alt={title}
            />
          )}
          <div className="flex-grow flex flex-col justify-start">
            <div className="hidden md:block p-1.5 mx-1">
              <div className="font-bold text-xl mb-1">{title}</div>
              <div className="h-full">
                <p className="text-gray-200 text-base">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
