import React from "react";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";
import getMovies from "@/controllers/getMovies";

export default async function CompletedMovies() {
  const movies = await getMovies();

  return (
    <CardContainer title="Completed Movies">
      <ShowList
        data={movies}
        watchStatusDisplay={"completed"}
        selectedCategory={"movies"}
      />
    </CardContainer>
  );
}
