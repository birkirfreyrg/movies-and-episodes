import Image from "next/image";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function SingleView({ data }) {
  return (
    <>
      {data && (
        <div className="flex">
          <div className="w-1/2 p-2">
            <Image
              src={data.imageUrl}
              width={500}
              height={500}
              alt={data.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-1/2 p-2">
            <h1 className="text-5xl font-bold text-white mb-4">{data.title}</h1>
            <h2 className="text-xl text-white mb-4">{data.description}</h2>
            <div className="flex items-center gap-2">
              <DeleteButton id={data._id} />
              <EditButton data={data} />
              <h1>Status: {data.watchStatus}</h1>
              <h1>Category: {data.category}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
