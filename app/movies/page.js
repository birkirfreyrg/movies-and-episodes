import Layout from "../components/Layout";
import WatchListMovies from "../components/WatchlistMovies";
import CompletedMovies from "../components/CompletedMovies";
import Nav from "../components/Nav";
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
        <WatchListMovies />
        <CompletedMovies />
      </Layout>
    </>
  );
}
