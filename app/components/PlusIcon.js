export default function PlusIcon({ label = "Add Item" }) {
  return (
    <div className="flex-grow flex flex-col items-center justify-center gap-3 text-zinc-100">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-500/80 bg-zinc-900/80 text-3xl font-semibold leading-none">
        +
      </div>
      <div className="text-center">
        <p className="text-base font-semibold">{label}</p>
        <p className="text-xs text-zinc-400">Click to open form</p>
      </div>
    </div>
  );
}
