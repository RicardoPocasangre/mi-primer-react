# Mi Primer Proyecto de React

Gestor de tareas hecho con React 18 + Vite para la actividad sincrónica de
Programación Orientada al Usuario.

## Ejecutar

```bash
npm install
npm run dev
```

## Conceptos aplicados (lecciones 1 a 6)

- **Vite y estructura**: `main.jsx`, `App.jsx`, `components/`, `styles.css`.
- **Componentes y JSX**: `Tarjeta`, `FormularioTarea`, `Filtros`, `ListaTareas`, `TareaItem`, `Resumen`.
- **Props y composición**: props de datos y de función (`onAgregar`, `onAlternar`, `onEliminar`) y `children` en `Tarjeta`.
- **Estado y eventos**: `useState`, manejadores `onChange`, `onClick`, `onSubmit`.
- **Listas, formularios y estado elevado**: `map` con `key`, formulario controlado con `preventDefault`, el array de tareas vive en `App`, estado derivado (totales y filtrado).
- **Efectos**: `useEffect` para persistir en `localStorage` y sincronizar el título de la pestaña.
