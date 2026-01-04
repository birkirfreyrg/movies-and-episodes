import DeleteButton from "@/app/components/DeleteButton";
import EditButton from "@/app/components/EditButton";
import Layout from "@/app/components/Layout";
import Nav from "@/app/components/Nav";
import SingleView from "@/app/components/SingleView";
import getTvShow from "@/controllers/getSingleTvShow";

export default async function TvShow({ params }) {
  const { id } = await params;
  const data = await getTvShow(id);

  return (
    <Layout>
      <Nav />
      <SingleView data={data} />
    </Layout>
  );
}
