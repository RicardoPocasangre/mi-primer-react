export default function Resumen({ total, completadas, pendientes }) {
  return (
    <p className="resumen">
      Total: <strong>{total}</strong> · Completadas: <strong>{completadas}</strong> · Pendientes:{' '}
      <strong>{pendientes}</strong>
    </p>
  )
}
