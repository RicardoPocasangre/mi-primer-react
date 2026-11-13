import TareaItem from './TareaItem.jsx'

const MENSAJES_VACIO = {
  todas: 'No hay tareas. ¡Agrega la primera!',
  pendientes: 'No tienes tareas pendientes.',
  completadas: 'Aún no has completado ninguna tarea.',
}

export default function ListaTareas({ tareas, filtro, onAlternar, onEliminar }) {
  if (tareas.length === 0) {
    return <p className="vacio">{MENSAJES_VACIO[filtro]}</p>
  }

  return (
    <ul className="lista">
      {tareas.map((tarea) => (
        <TareaItem
          key={tarea.id}
          tarea={tarea}
          onAlternar={onAlternar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  )
}
