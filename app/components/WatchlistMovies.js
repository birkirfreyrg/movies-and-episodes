import getMovies from "@/controllers/getMovies";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function WatchlistMovies() {
  let movies = await getMovies();
  const tempMovies = [
    {
      _id: "65a87b53f269574112d08f2f",
      title: "Star Wars: The Force Awakens",
      description:
        "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
      watchStatus: "watchlist",
      createdAt: "2024-01-18T01:13:55.235Z",
      updatedAt: "2024-01-25T12:03:27.706Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a73ff269574112d09045",
      title: "Star Wars: The Last Jedi",
      description:
        "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_.jpg",
      watchStatus: "watchlist",
      createdAt: "2024-01-18T04:21:19.981Z",
      updatedAt: "2024-01-25T12:29:27.627Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a750f269574112d09049",
      title: "Star Wars: The Rise of Skywalker",
      description:
        "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
      watchStatus: "watchlist",
      createdAt: "2024-01-18T04:21:36.317Z",
      updatedAt: "2024-01-25T12:29:47.570Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a75ff269574112d0904d",
      title: "Harry Potter and the Philosopher's Stone",
      description:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      imageUrl:
        "https://kcroonews.com/wp-content/uploads/2022/11/tileburnedin.jpeg",
      watchStatus: "watchlist",
      createdAt: "2024-01-18T04:21:51.885Z",
      updatedAt: "2024-01-25T12:33:13.345Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a775f269574112d09051",
      title: "Harry Potter and the Chamber of Secrets",
      description:
        "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg",
      watchStatus: "watchlist",
      createdAt: "2024-01-18T04:22:13.581Z",
      updatedAt: "2024-01-25T12:33:18.817Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a78ef269574112d09055",
      title: "Harry Potter and the Prisoner of Azkaban",
      description:
        "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
      watchStatus: "watchlist",
      createdAt: "2024-01-18T04:22:38.858Z",
      updatedAt: "2024-01-25T17:04:02.140Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a88bf269574112d09066",
      title: "Star Wars: Episode I - The Phantom Menace",
      description:
        "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:26:51.127Z",
      updatedAt: "2024-01-25T12:33:41.148Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a8aef269574112d0906a",
      title: "Star Wars: Episode II - Attack of the Clones",
      description:
        "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:27:26.164Z",
      updatedAt: "2024-01-25T12:33:48.465Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a8cbf269574112d0906e",
      title: "Star Wars: Episode III - Revenge of the Sith",
      description:
        "Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:27:55.649Z",
      updatedAt: "2024-01-25T12:33:55.555Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a90ff269574112d09077",
      title: "Solo: A Star Wars Story",
      description:
        "Board the Millennium Falcon and journey to a galaxy far, far away in an epic action-adventure that will set the course of one of the Star Wars saga's most unlikely heroes.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:29:03.982Z",
      updatedAt: "2024-01-25T12:34:01.121Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a935f269574112d0907b",
      title: "Rogue One: A Star Wars Story",
      description:
        "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:29:41.871Z",
      updatedAt: "2024-01-25T12:34:06.987Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a962f269574112d0907f",
      title: "Star Wars: Episode IV - A New Hope",
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:30:26.324Z",
      updatedAt: "2024-01-25T12:34:14.070Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a97ff269574112d09083",
      title: "Star Wars: Episode V - The Empire Strikes Back",
      description:
        "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:30:55.028Z",
      updatedAt: "2024-01-25T12:34:20.013Z",
      __v: 0,
      category: "movies",
    },
    {
      _id: "65a8a9a4f269574112d09087",
      title: "Star Wars: Episode VI - Return of the Jedi",
      description:
        "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:31:32.889Z",
      updatedAt: "2024-01-25T12:34:25.808Z",
      __v: 0,
      category: "movies",
    },
  ];

  if (!movies) {
    movies = tempMovies;
  }

  return (
    <>
      <CardContainer title="Watchlist Movies">
        <ShowList
          data={movies}
          watchStatusDisplay={"watchlist"}
          selectedCategory={"movies"}
        />
      </CardContainer>
    </>
  );
}
