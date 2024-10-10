export default function CardTitle({className, children}) {
  return (
    <h3 className={`text-lg md:text-xl xl:text-2xl text-colorSecondaryLight ${className}`}>{children}</h3>
  )
}
