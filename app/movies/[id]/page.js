import Layout from "@/app/components/Layout";
import Nav from "@/app/components/Nav";
import SingleView from "@/app/components/SingleView";
import getMovie from "@/controllers/getSingleMovie";

export default async function Movie({ params }) {
  const { id } = await params;
  const data = await getMovie(id);

  return (
    <Layout>
      <Nav />
      <SingleView data={data} />
    </Layout>
  );
}
