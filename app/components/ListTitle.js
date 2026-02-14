export default function Title({ title, count }) {
  return (
    <div className="relative my-2 px-4">
      <h1 className="text-center text-base font-bold leading-tight sm:text-xl">
        {title}
      </h1>
      {typeof count === "number" && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-300 sm:text-sm">
          {count}
        </span>
      )}
    </div>
  );
}
