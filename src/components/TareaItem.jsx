export default function TareaItem({ tarea, onAlternar, onEliminar }) {
  return (
    <li className={tarea.completada ? 'tarea completada' : 'tarea'}>
      <label>
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => onAlternar(tarea.id)}
        />
        <span>{tarea.titulo}</span>
      </label>
      <button
        type="button"
        className="boton-icono"
        aria-label={`Eliminar ${tarea.titulo}`}
        onClick={() => onEliminar(tarea.id)}
      >
        ✕
      </button>
    </li>
  )
}
