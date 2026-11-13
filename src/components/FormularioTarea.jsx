import { useState } from 'react'

export default function FormularioTarea({ onAgregar }) {
  const [texto, setTexto] = useState('')
  const [error, setError] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault()
    const titulo = texto.trim()
    if (titulo === '') {
      setError('Escribe el título de la tarea.')
      return
    }
    onAgregar(titulo)
    setTexto('')
    setError('')
  }

  return (
    <form onSubmit={manejarEnvio} className="formulario" noValidate>
      <label htmlFor="titulo-tarea">Título</label>
      <div className="fila">
        <input
          id="titulo-tarea"
          type="text"
          value={texto}
          placeholder="Ej: Estudiar useEffect"
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit" className="boton">Agregar</button>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
    </form>
  )
}
