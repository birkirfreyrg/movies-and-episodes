import ListTitle from "./ListTitle";

export default function CardContainer({ children, title }) {
  return (
    <>
      <div className="border my-2 shadow-lg rounded-md border-stone-500">
        <ListTitle title={title} />
        <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
          {children}
        </div>
      </div>
    </>
  );
}