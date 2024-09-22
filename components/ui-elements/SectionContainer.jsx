export default function SectionContainer({
  id,
  bgColor,
  className,
  props,
  children,
}) {
  return (
    <section
      id={id}
      className={`px-4 md:px-6 xl:px-8 py-8 md:py-12 xl:py-16 ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
