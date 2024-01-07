import Layout from "../components/Layout";
import UnfinishedMovies from "../components/UnfinishedMovies";
import FinishedMovies from "../components/FinishedMovies";
import Nav from "../components/Nav";

export default function Page() {
  return (
    <Layout>
      <Nav />
      <UnfinishedMovies />
      <FinishedMovies />
    </Layout>
  );
}
