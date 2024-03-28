"use client";
import React, { useState } from "react";
import EditForm from "./EditForm";

export default function EditButton({ data }) {
  const [showForm, setShowForm] = useState(false);

  function handleCancelAdd(e) {
    e.stopPropagation();
    setShowForm(false);
  }

  function handleShowForm(e) {
    e.stopPropagation();
    setShowForm(true);
  }

  return (
    <>
      <div onClick={handleShowForm}>
        <div>
          <button className="bg-yellow-500 text-white font-bold w-24 h-10 rounded ">
            Edit
          </button>
        </div>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <EditForm data={data} onCancel={handleCancelAdd} />
        </div>
      )}
    </>
  );
}
