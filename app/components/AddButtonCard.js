"use client";
import React, { useState } from "react";
import AddCardForm from "./AddCardForm";
import { usePathname } from "next/navigation";

export default function AddButtonCard({
  additionalClassName,
  watchStatusDisplay,
  isEven,
}) {
  const [showForm, setShowForm] = useState(false);
  const cardClasses = `border-stone h-56 lg:h-64 sm:h-80 sm:w-5/6 lg:w-2/5 w-2/5 flex shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${additionalClassName}`;
  const invisibleClass = `invisible ${cardClasses} `;
  const pathname = usePathname();

  function handleCancelAdd() {
    setShowForm(false);
  }

  function handleShowForm(e) {
    e.stopPropagation();
    setShowForm(true);
  }

  return (
    <>
      {pathname === "/" ? (
        <>
          {!isEven && (
            <div className={invisibleClass} onClick={handleShowForm}>
              <div className="flex-grow flex items-center justify-center ">
                <span className="text-5xl font-bold">+</span>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {isEven ? (
            <>
              <div className={cardClasses} onClick={handleShowForm}>
                <div className="flex-grow flex items-center justify-center">
                  <span className="text-5xl font-bold">+</span>
                </div>
              </div>
              <div className={invisibleClass} onClick={handleShowForm}>
                <div className="flex-grow flex items-center justify-center">
                  <span className="text-5xl font-bold">+</span>
                </div>
              </div>
              {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <AddCardForm
                    onCancel={handleCancelAdd}
                    watchStatusDisplay={watchStatusDisplay}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div className={cardClasses} onClick={handleShowForm}>
                <div className="flex-grow flex items-center justify-center">
                  <span className="text-5xl font-bold">+</span>
                </div>
              </div>
              {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <AddCardForm
                    onCancel={handleCancelAdd}
                    watchStatusDisplay={watchStatusDisplay}
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
