"use client";
import { usePathname } from "next/navigation";
import ListTitle from "./ListTitle";
import React, { useEffect, useState } from "react";

export default function CardContainer({ children, title }) {
  const [isChildrenVisible, setChildrenVisibility] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setChildrenVisibility(false);
    }
  }, [pathname]);

  const toggleChildrenVisibility = () => {
    setChildrenVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <div
        onClick={toggleChildrenVisibility}
        className={` text-white border-stone my-2 shadow-lg cursor-pointer  ${
          isChildrenVisible
            ? "hover:bg-#0f0f0f"
            : "hover:bg-white hover:text-black"
        }`}
      >
        <ListTitle title={title} />
        <div
          className={`flex flex-wrap justify-center items-center gap-10 mb-8 ${
            isChildrenVisible ? "visible" : "hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
