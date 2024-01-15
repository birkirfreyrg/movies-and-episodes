import Layout from "@/app/components/Layout";
import getMovie from "@/controllers/getSingleMovie";

export default async function Movie({ params: { id } }) {
  const movie = await getMovie(id);

  return (
    <Layout>
      <div className="flex">
        <div className="w-1/2 p-2">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          ></img>
        </div>
        <div className="w-1/2 p-2">
          <h1 className="text-5xl font-bold text-white mb-4"> {movie.title}</h1>
          <h2 className="text-xl text-white mb-4">{movie.description}</h2>
        </div>
      </div>
    </Layout>
  );
}
