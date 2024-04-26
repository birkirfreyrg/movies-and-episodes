import getTvShows from "@/controllers/getTvShows";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function WatchlistTvShows() {
  let tvShows = await getTvShows();

  const tempTvShows = [
    {
      _id: "65a741d16a8226f8ce9fca88",
      title: "The Mandalorian",
      description:
        "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-17T02:56:17.560Z",
      updatedAt: "2024-02-05T14:55:43.746Z",
      __v: 0,
      category: "tv-shows",
    },
    {
      _id: "65a89620f269574112d08fb8",
      title: "Star Wars Resistance",
      description:
        "Resistance is a two-season animated series set throughout the events of the sequel trilogy.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTkyMTc3NjAwNF5BMl5BanBnXkFtZTgwNTU1ODIyNjM@._V1_.jpg",
      watchStatus: "watchlist",
      createdAt: "2024-01-18T03:08:16.426Z",
      updatedAt: "2024-01-25T12:01:55.755Z",
      __v: 0,
      category: "tv-shows",
    },
    {
      _id: "65a8a3d8f269574112d0902e",
      title: "Ahsoka",
      description:
        "Ahsoka Tano and Count Dooku are two of the greatest characters in Star Wars mythology. This six-episode anthology series tells their backstory.",
      imageUrl:
        "https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_88c206d7.jpeg?region=810%2C0%2C1080%2C1080",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:06:48.083Z",
      updatedAt: "2024-02-05T14:55:58.276Z",
      __v: 0,
      category: "tv-shows",
    },
    {
      _id: "65a8a3edf269574112d09033",
      title: "The Book of Boba Fett",
      description:
        "Bounty hunter Boba Fett and mercenary Fennec Shand navigate the underworld when they return to Tatooine to claim Jabba the Hutt's old turf.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjllZjE1MWEtYTJhZC00MWIyLTliMjEtYzM3ODc4YzQ2MjFlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:07:09.916Z",
      updatedAt: "2024-01-25T22:50:16.173Z",
      __v: 0,
      category: "tv-shows",
    },
    {
      _id: "65a8a41af269574112d0903b",
      title: "Star Wars Rebels",
      description:
        "A brave and clever ragtag starship crew stands up against the evil Empire as it tightens its grip on the galaxy and hunts down the last of the Jedi Knights.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BY2Q1ZTAzNzMtMzlmNy00NjdjLThhYjgtMzgxN2ZkYmFhMDIwXkEyXkFqcGdeQXVyMjg5NDMwMQ@@._V1_.jpg",
      watchStatus: "completed",
      createdAt: "2024-01-18T04:07:54.067Z",
      updatedAt: "2024-01-25T12:02:13.272Z",
      __v: 0,
      category: "tv-shows",
    },
    {
      _id: "65a8aa01f269574112d0908e",
      title: "Star Wars: Visions",
      description:
        "Star Wars anthology series that will see some of the world's best anime creators bring their talent to this beloved universe.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYjBjNWExN2QtYTRiMS00MzJhLTg0MTAtMDk5YzMzMjgwMjIyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
      watchStatus: "watchlist",
      createdAt: "2024-01-18T04:33:05.298Z",
      updatedAt: "2024-01-25T12:02:06.283Z",
      __v: 0,
      category: "tv-shows",
    },
    {
      _id: "65b2e56221a1ca7534fb1e16",
      title: "Tales of the Jedi",
      description: "Animated shorts that feature Jedi from the prequel era.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZDM2NzBjYWEtMzg3MS00MGI3LTg0M2MtNWRkM2VhMDI1YTE2XkEyXkFqcGdeQXVyNjYwMjU3MjA@._V1_.jpg",
      watchStatus: "watchlist",
      category: "tv-shows",
      createdAt: "2024-01-25T22:49:06.909Z",
      updatedAt: "2024-01-25T22:49:06.909Z",
      __v: 0,
    },
  ];

  if (!tvShows) {
    tvShows = tempTvShows;
  }

  return (
    <>
      <CardContainer title="Watchlist Tv Shows">
        <ShowList
          data={tvShows}
          watchStatusDisplay={"watchlist"}
          selectedCategory={"tvshows"}
        />
      </CardContainer>
    </>
  );
}
