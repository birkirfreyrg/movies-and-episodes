import Nav from "./components/Nav";
import Layout from "./components/Layout";
import WatchlistMovies from "./components/WatchlistMovies";
import InProgressTvShows from "./components/InProgressTvShows";
import WatchlistTvShows from "./components/WatchlistTvShows";
import LogoutButton from "./components/LogoutButton";

export default function Home() {
  return (
    <>
      <div
        className="fixed z-50"
        style={{
          top: "max(0.5rem, env(safe-area-inset-top))",
          left: "max(0.75rem, env(safe-area-inset-left))",
        }}
      >
        <LogoutButton />
      </div>
      <Layout>
        <Nav />
        <WatchlistMovies />
        <InProgressTvShows />
        <WatchlistTvShows />
      </Layout>
    </>
  );
}
