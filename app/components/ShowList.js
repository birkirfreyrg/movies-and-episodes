import AddButtonCard from "./AddButtonCard";
import Card from "./Card";

export default function ShowList({ data, watchStatusDisplay }) {
  const trueItems = data.filter(
    (item) => item.watchStatus === watchStatusDisplay
  );

  return (
    <>
      {trueItems &&
        trueItems.map(
          (item) =>
            item.watchStatus == watchStatusDisplay && (
              <Card
                key={item._id}
                id={item._id}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                watchStatus={item.watchStatus}
              />
            )
        )}
      {trueItems?.length % 2 === 0 ? (
        <>
          <AddButtonCard
            watchStatusDisplay={watchStatusDisplay}
            isEven={trueItems?.length % 2 === 0}
          />
        </>
      ) : (
        <AddButtonCard
          watchStatusDisplay={watchStatusDisplay}
          isEven={trueItems?.length % 2 === 0}
        />
      )}
    </>
  );
}
