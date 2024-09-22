export default function H2({ className, children }) {
  return (
    <h2
      className={`m-4 text-center text-xl md:text-2xl xl:text-3xl font-bold ${className}`}
    >
      {children}
    </h2>
  );
}
