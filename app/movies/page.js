import Layout from "../components/Layout";
import WatchListMovies from "../components/WatchlistMovies";
import CompletedMovies from "../components/CompletedMovies";
import Nav from "../components/Nav";
import LogoutButton from "../components/LogoutButton";

export default function Page() {
  return (
    <>
      <div className="fixed left-4 top-4 z-50">
        <LogoutButton />
      </div>
      <Layout>
        <Nav />
        <WatchListMovies />
        <CompletedMovies />
      </Layout>
    </>
  );
}
