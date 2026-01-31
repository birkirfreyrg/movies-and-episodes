import Image from "next/image";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function SingleView({ data }) {
  return (
    <>
      {data && (
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 p-2 md:mt-8">
            <Image
              src={data.imageUrl}
              width={500}
              height={500}
              alt={data.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-2 md:mt-8">
            <h1 className="text-5xl font-bold text-white mb-4">{data.title}</h1>
            {data.rating !== undefined && data.rating !== null && (
              <div className="mb-4">
                <span className="text-yellow-400 text-2xl font-semibold">
                  ⭐ {data.rating.toFixed(1)}/10
                </span>
              </div>
            )}
            <h2 className="text-xl text-white mb-4">{data.description}</h2>
            <div className="flex flex-col gap-1 mt-10">
              <h2 className="text-xl text-white ">
                List:{" "}
                {data.watchStatus.charAt(0).toUpperCase() +
                  data.watchStatus.slice(1)}
              </h2>
              <h2 className="text-xl text-white">
                Category:{" "}
                {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-2">
              <EditButton data={data} />
              <DeleteButton id={data._id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
