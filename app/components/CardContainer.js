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
  }, []);

  const toggleChildrenVisibility = () => {
    setChildrenVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <div className="border-stone my-2 shadow-lg">
        <ListTitle title={title} onClick={toggleChildrenVisibility} />
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
