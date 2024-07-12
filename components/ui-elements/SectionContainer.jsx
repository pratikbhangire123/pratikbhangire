export default function SectionContainer({
  id,
  bgColor,
  className,
  props,
  children,
}) {
  console.log(bgColor);
  return (
    <section
      id={id}
      className={`px-8 md:px-16 xl:px-24 py-10 md:py-14 xl:py-20 ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
