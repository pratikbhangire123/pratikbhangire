export default function H3({ children, className }) {
  return (
    <h3
      className={`mt-4 text-2xl md:text-lg xl:text-xl text-colorPrimary font-bold ${className}`}
    >
      {children}
    </h3>
  );
}
