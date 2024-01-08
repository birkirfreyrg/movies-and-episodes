"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  const active =
    "text-center block border border-white-500 rounded py-2 px-4 text-white";
  const inactive =
    "text-center block border border-stone-500 rounded hover:border-gray-200 text-white-500 py-2 px-4";

  return (
    <nav>
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link
            className={`link ${pathname === "/" ? active : inactive}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            className={`link ${pathname === "/movies" ? active : inactive}`}
            href="/movies"
          >
            Movies
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            className={`link ${pathname === "/tvshows" ? active : inactive}`}
            href="/tvshows"
          >
            Tv Shows
          </Link>
        </li>
      </ul>
    </nav>
  );
}
