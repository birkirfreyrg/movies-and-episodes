import CompletedTvShows from "../components/CompletedTvShows";
import InProgressTvShows from "../components/InProgressTvShows";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import WatchlistTvShows from "../components/WatchlistTvShows";

export default function Page() {
  return (
    <Layout>
      <Nav />
      <InProgressTvShows />
    </Layout>
  );
}
