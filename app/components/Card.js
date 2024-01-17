"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Card({
  id,
  title,
  description,
  imageUrl,
  watchStatus,
}) {
  let pathname = usePathname();

  // remove this when I start working on movies
  if (pathname == "/") pathname = "/movies";

  return (
    <div className="w-2/5">
      <Link href={`${pathname}/${id}`}>
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
