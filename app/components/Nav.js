"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const active =
    "text-center block border-active border-white-500  py-2 px-4 text-white";
  const inactive =
    "text-center block border-stone hover:border-gray-200 text-white-500 py-2 px-4";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" text-white">
      <div className="px-4 py-2 flex justify-between items-center">
        <button onClick={toggleMenu} className="text-white md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`md:flex ${
          isOpen ? "" : "hidden"
        } md:items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0`}
      >
        <li className="flex-1">
          <Link href="/" className={`${pathname === "/" ? active : inactive}`}>
            Home
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/movies"
            className={`${pathname === "/movies" ? active : inactive}`}
          >
            Movies
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/tvshows"
            className={`${pathname === "/tvshows" ? active : inactive}`}
          >
            TV Shows
          </Link>
        </li>
      </ul>
    </nav>
  );
}
