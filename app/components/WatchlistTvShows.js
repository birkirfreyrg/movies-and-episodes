import getTvShows from "@/controllers/getTvShows";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function WatchlistTvShows() {
  const tvShows = await getTvShows();

  const watchlistTvShows = [
    {
      id: 1,
      title: "Star Wars Resistance",
      description:
        "Resistance is a two-season animated series set throughout the events of the sequel trilogy.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTkyMTc3NjAwNF5BMl5BanBnXkFtZTgwNTU1ODIyNjM@._V1_.jpg",
    },
    {
      id: 2,
      title: "Ahsoka",
      description:
        "Ahsoka Tano and Count Dooku are two of the greatest characters in Star Wars mythology. This six-episode anthology series tells their backstory.",
      imageUrl:
        "https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_88c206d7.jpeg?region=810%2C0%2C1080%2C1080",
    },
    {
      id: 3,
      title: "The Book of Boba Fett",
      description:
        "Bounty hunter Boba Fett and mercenary Fennec Shand navigate the underworld when they return to Tatooine to claim Jabba the Hutt's old turf.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjllZjE1MWEtYTJhZC00MWIyLTliMjEtYzM3ODc4YzQ2MjFlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
    },
  ];

  return (
    <>
      <CardContainer title="Watchlist Tv Shows">
        <ShowList data={tvShows} watchStatusDisplay={"watchlist"} />
      </CardContainer>
    </>
  );
}
