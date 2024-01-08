import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default function InProgressTvShows() {
  const inProgressTvShows = [
    {
      id: 1,
      title: "The Mandalorian",
      description:
        "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    },
  ];

  return (
    <>
      <CardContainer title="Tv Shows in Progress">
        <ShowList data={inProgressTvShows} />
      </CardContainer>
    </>
  );
}
