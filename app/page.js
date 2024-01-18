import Nav from "./components/Nav";
import Layout from "./components/Layout";
import WatchlistMovies from "./components/WatchlistMovies";
import InProgressTvShows from "./components/InProgressTvShows";
import WatchlistTvShows from "./components/WatchlistTvShows";

export default function Home() {
  return (
    <Layout>
      <Nav />
      <WatchlistMovies />
      <InProgressTvShows />
      <WatchlistTvShows />
    </Layout>
  );
}
