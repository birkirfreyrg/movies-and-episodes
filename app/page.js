import Image from "next/image";
import Nav from "./components/Nav";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <Nav />
      <p>home</p>
    </Layout>
  );
}
