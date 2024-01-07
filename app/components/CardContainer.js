import ListTitle from "./ListTitle";

export default function CardContainer({ children, title }) {
  return (
    <>
      <div className="border my-2 shadow-lg">
        <ListTitle title={title} />
        <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
          {children}
        </div>
      </div>
    </>
  );
}
