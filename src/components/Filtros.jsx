const OPCIONES = [
  { valor: 'todas', etiqueta: 'Todas' },
  { valor: 'pendientes', etiqueta: 'Pendientes' },
  { valor: 'completadas', etiqueta: 'Completadas' },
]

export default function Filtros({ filtroActual, onCambiar }) {
  return (
    <div className="filtros" role="group" aria-label="Filtrar tareas">
      {OPCIONES.map((op) => (
        <button
          key={op.valor}
          type="button"
          className={op.valor === filtroActual ? 'filtro activo' : 'filtro'}
          aria-pressed={op.valor === filtroActual}
          onClick={() => onCambiar(op.valor)}
        >
          {op.etiqueta}
        </button>
      ))}
    </div>
  )
}
