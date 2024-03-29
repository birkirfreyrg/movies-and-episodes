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
    <div className="w-2/5 lg:w-2/5 sm:w-5/6" onClick={handleClick}>
      <Link href={`${pathname}/${id}`}>
        <div className="border-stone h-56 lg:h-64 sm:h-80 flex overflow-y-auto">
          {imageUrl && (
            <Image
              className="w-48 max-w-full h-auto object-cover"
              width={500}
              height={500}
              src={imageUrl}
              alt={title}
            />
          )}
          <div className="flex-grow flex flex-col justify-start">
            <div className="p-1.5 mx-1">
              <div className="font-bold text-xl mb-1">{title}</div>
              <div className=" h-full lg:h-full sm:h-full">
                <p className="text-gray-200 text-base">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
