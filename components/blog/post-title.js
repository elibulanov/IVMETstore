export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-3xl lg:text-3xl tracking-tighter leading-tight md:leading-none mb-12 mt-5 text-center md:text-center">
      {children}
    </h1>
  )
}
