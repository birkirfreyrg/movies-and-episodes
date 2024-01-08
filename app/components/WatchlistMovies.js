import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default function WatchListMovies() {
  const watchlistMovies = [
    {
      id: 1,
      title: "Star Wars: The Force Awakens",
      description:
        "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 2,
      title: "Star Wars: The Last Jedi",
      description:
        "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_.jpg",
    },
    {
      id: 3,
      title: "Star Wars: The Rise of Skywalker",
      description:
        "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      description:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      imageUrl:
        "https://kcroonews.com/wp-content/uploads/2022/11/tileburnedin.jpeg",
    },
    {
      id: 5,
      title: "Harry Potter and the Chamber of Secrets",
      description:
        "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg",
    },
    {
      id: 6,
      title: "Harry Potter and the Prisoner of Azkaban",
      description:
        "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
    },
  ];

  return (
    <>
      <CardContainer title="Watchlist Movies">
        <ShowList data={watchlistMovies} />
      </CardContainer>
    </>
  );
}
