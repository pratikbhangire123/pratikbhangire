export default function H2({ className, children }) {
  return (
    <h2
      className={`text-center text-xl md:text-2xl xl:text-3xl text-colorSecondary ${className}`}
    >
      {children}
    </h2>
  );
}
