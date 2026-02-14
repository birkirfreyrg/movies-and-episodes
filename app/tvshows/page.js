import CompletedTvShows from "../components/CompletedTvShows";
import InProgressTvShows from "../components/InProgressTvShows";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import WatchlistTvShows from "../components/WatchlistTvShows";
import LogoutButton from "../components/LogoutButton";

export default function Page() {
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
        <InProgressTvShows />
        <WatchlistTvShows />
        <CompletedTvShows />
      </Layout>
    </>
  );
}
