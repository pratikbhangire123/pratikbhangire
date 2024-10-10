export default function CardParagraph({ className, children }) {
  return (
    <p
      className={`text-xs md:text-sm xl:text-base font-extralight text-colorSecondaryLighter/70 ${className}`}
    >
      {children}
    </p>
  );
}
