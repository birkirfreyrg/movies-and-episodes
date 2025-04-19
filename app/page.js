import Nav from "./components/Nav";
import Layout from "./components/Layout";
import WatchlistMovies from "./components/WatchlistMovies";
import InProgressTvShows from "./components/InProgressTvShows";
import WatchlistTvShows from "./components/WatchlistTvShows";
import LogoutButton from "./components/LogoutButton";

export default function Home() {
  return (
    <Layout>
      <LogoutButton />
      <Nav />
      <WatchlistMovies />
      <InProgressTvShows />
      <WatchlistTvShows />
    </Layout>
  );
}
