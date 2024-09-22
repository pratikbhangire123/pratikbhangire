export default function Available() {
  return (
    <div className="flex mb-6 md:mb-7 xl:mb-8 px-2 py-1 items-center gap-2 border border-green-500 rounded-full">
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 flex items-center justify-center rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
      </span>
      <p className="text-xs md:text-sm text-green-500">Available for Work</p>
    </div>
  );
}
