import AddButtonCard from "./AddButtonCard";
import Card from "./Card";

export default function ShowList({ data }) {
  const isEvenLength = data.length % 2 === 0;
  return (
    <>
      {data &&
        data.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}

      {isEvenLength ? (
        <>
          <AddButtonCard />
          <AddButtonCard additionalClassName="invisible " />
        </>
      ) : (
        <AddButtonCard />
      )}
    </>
  );
}
