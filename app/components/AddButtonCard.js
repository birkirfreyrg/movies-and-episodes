"use client";
import React, { useEffect, useState } from "react";
import AddCardForm from "./AddCardForm";
import { usePathname } from "next/navigation";
import PlusIcon from "./PlusIcon";

export default function AddButtonCard({
  additionalClassName,
  watchStatusDisplay,
  isEven,
}) {
  const [showForm, setShowForm] = useState(false);
  const cardClasses = `border-stone h-56 lg:h-64 lg:w-2/5 w-2/5 flex shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${additionalClassName}`;
  const invisibleClass = `invisible ${cardClasses} `;
  const pathname = usePathname();

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
  }

  // Custom hook to check if the viewport is wider than 768px
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  function handleCancelAdd() {
    setShowForm(false);
  }

  function handleShowForm(e) {
    e.stopPropagation();
    setShowForm(true);
  }

  const shouldShowPlusIcon = isEven && isLargeScreen;

  return (
    <>
      {pathname === "/" ? (
        <>
          {!isEven && (
            <div className={invisibleClass} onClick={handleShowForm}>
              <PlusIcon />
            </div>
          )}
        </>
      ) : (
        <>
          {shouldShowPlusIcon ? (
            <>
              <div className={cardClasses} onClick={handleShowForm}>
                <PlusIcon />
              </div>
              <div className={invisibleClass} onClick={handleShowForm}>
                <PlusIcon />
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
                <PlusIcon />
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
