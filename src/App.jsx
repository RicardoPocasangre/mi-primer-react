import { useEffect, useState } from 'react'
import Tarjeta from './components/Tarjeta.jsx'
import FormularioTarea from './components/FormularioTarea.jsx'
import Filtros from './components/Filtros.jsx'
import ListaTareas from './components/ListaTareas.jsx'
import Resumen from './components/Resumen.jsx'

const CLAVE_ALMACENAMIENTO = 'mi-primer-proyecto-react:tareas'

const TAREAS_INICIALES = [
  { id: 1, titulo: 'Leer la lección de props y composición', completada: true },
  { id: 2, titulo: 'Practicar estado y eventos', completada: false },
  { id: 3, titulo: 'Entregar Mi Primer Proyecto de React', completada: false },
]

function leerTareasGuardadas() {
  try {
    const guardado = localStorage.getItem(CLAVE_ALMACENAMIENTO)
    return guardado ? JSON.parse(guardado) : TAREAS_INICIALES
  } catch {
    return TAREAS_INICIALES
  }
}

export default function App() {
  // Estado elevado: el array vive en el ancestro común de formulario, filtros y lista.
  const [tareas, setTareas] = useState(leerTareasGuardadas)
  const [filtro, setFiltro] = useState('todas')

  // Estado derivado: se calcula en cada render, no se guarda aparte.
  const total = tareas.length
  const completadas = tareas.filter((t) => t.completada).length
  const pendientes = total - completadas
  const tareasVisibles = tareas.filter((t) => {
    if (filtro === 'pendientes') return !t.completada
    if (filtro === 'completadas') return t.completada
    return true
  })

  // Efecto 1: persistencia en localStorage (sistema externo).
  useEffect(() => {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(tareas))
  }, [tareas])

  // Efecto 2: título de la pestaña sincronizado con el estado.
  useEffect(() => {
    document.title = pendientes > 0 ? `(${pendientes}) Mis tareas` : 'Mis tareas'
  }, [pendientes])

  function agregarTarea(titulo) {
    setTareas((actuales) => [
      ...actuales,
      { id: Date.now(), titulo, completada: false },
    ])
  }

  function alternarTarea(id) {
    setTareas((actuales) =>
      actuales.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)),
    )
  }

  function eliminarTarea(id) {
    setTareas((actuales) => actuales.filter((t) => t.id !== id))
  }

  function limpiarCompletadas() {
    setTareas((actuales) => actuales.filter((t) => !t.completada))
  }

  return (
    <main className="app">
      <header className="encabezado">
        <h1>Mi Primer Proyecto de React</h1>
        <p>Gestor de tareas con componentes, props, estado, listas, formularios y efectos.</p>
      </header>

      <Tarjeta titulo="Nueva tarea">
        <FormularioTarea onAgregar={agregarTarea} />
      </Tarjeta>

      <Tarjeta titulo="Mis tareas">
        <Resumen total={total} completadas={completadas} pendientes={pendientes} />
        <Filtros filtroActual={filtro} onCambiar={setFiltro} />
        <ListaTareas
          tareas={tareasVisibles}
          filtro={filtro}
          onAlternar={alternarTarea}
          onEliminar={eliminarTarea}
        />
        {completadas > 0 && (
          <button type="button" className="boton boton-secundario" onClick={limpiarCompletadas}>
            Limpiar completadas
          </button>
        )}
      </Tarjeta>
    </main>
  )
}
