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
  const cardClasses = `h-64 md:h-56 lg:h-64 w-[92%] max-w-[26rem] md:w-full md:max-w-none lg:w-2/5 flex border-stone flex-col overflow-hidden bg-zinc-900/40 cursor-pointer transition-colors duration-200 hover:bg-zinc-800/60 ${additionalClassName || ""}`;
  const invisibleClass = `invisible ${cardClasses} `;
  const pathname = usePathname();
  const mediaTypeLabel = pathname === "/tvshows" ? "Add TV Show" : "Add Movie";

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
        <></>
      ) : (
        <>
          {shouldShowPlusIcon ? (
            <>
              <div className={cardClasses} onClick={handleShowForm}>
                <PlusIcon label={mediaTypeLabel} />
              </div>
              <div className={invisibleClass} onClick={handleShowForm}>
                <PlusIcon label={mediaTypeLabel} />
              </div>
              {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
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
                <PlusIcon label={mediaTypeLabel} />
              </div>
              {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
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
