import CompletedTvShows from "../components/CompletedTvShows";
import InProgressTvShows from "../components/InProgressTvShows";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import WatchlistTvShows from "../components/WatchlistTvShows";
import LogoutButton from "../components/LogoutButton";

export default function Page() {
  return (
    <>
      <div className="fixed left-4 top-4 z-50">
        <LogoutButton />
      </div>
      <Layout>
        <Nav />
        <InProgressTvShows />
        <WatchlistTvShows />
        <CompletedTvShows />
      </Layout>
    </>
  );
}
