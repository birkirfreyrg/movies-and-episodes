import Card from "./Card";
import CardContainer from "./CardContainer";
import ListTitle from "./ListTitle";

export default function MovieList() {
  const finishedMovies = [
    {
      title: "Inception",
      description: "A mind-bending science fiction thriller.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      title: "Star Wars",
      description: "A movie about war in space",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Star Wars",
      description: "A movie about war in space",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Inception",
      description: "A mind-bending science fiction thriller.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      title: "Star Wars",
      description: "A movie about war in space",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Star Wars",
      description: "A movie about war in space",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  return (
    <CardContainer title="Finished Movies">
      {finishedMovies.map((movie) => (
        <Card
          key={movie.title}
          title={movie.title}
          description={movie.description}
          imageUrl={movie.imageUrl}
        />
      ))}
    </CardContainer>
  );
}
