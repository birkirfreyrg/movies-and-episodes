import Nav from "./components/Nav";
import Layout from "./components/Layout";
import AddItem from "./components/AddItem";

export default function Home() {
  return (
    <Layout>
      <Nav />
      <AddItem />
    </Layout>
  );
}
