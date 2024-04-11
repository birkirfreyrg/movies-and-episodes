import Layout from "../components/Layout";
import WatchListMovies from "../components/WatchlistMovies";
import CompletedMovies from "../components/CompletedMovies";
import Nav from "../components/Nav";

export default function Page() {
  return (
    <Layout>
      <Nav />
      <div className="w-full h-full text-white">Test</div>
      <WatchListMovies />
      <CompletedMovies />
    </Layout>
  );
}
