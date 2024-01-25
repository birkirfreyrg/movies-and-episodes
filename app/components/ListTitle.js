export default function Title({ title, onClick }) {
  return (
    <div className="flex justify-center my-2" onClick={onClick}>
      <h1 className=" text-xl font-bold cursor-pointer hover:text-gray-400">
        {title}
      </h1>
    </div>
  );
}
