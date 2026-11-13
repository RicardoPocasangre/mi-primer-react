// Composición con children: la tarjeta aporta el marco, el contenido lo decide el padre.
export default function Tarjeta({ titulo, children }) {
  return (
    <section className="tarjeta">
      <h2>{titulo}</h2>
      {children}
    </section>
  )
}
