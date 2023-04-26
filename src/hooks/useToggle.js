import { useState } from 'react'

// Reglas de los Custom Hooks
// 1 - tiene que empezar con "use"
// 3 - Puede utilizar otros hooks (useState, useEffect, useCallback, useMemo)
// 2 - No tiene que retornar jsx
// 4 - No debe retornar el "set"

export const useToggle = (initialState = false) => {
  const [open, setOpen] = useState(initialState)

  const toggle = () => setOpen((prev) => !prev)

  const onOpen = () => setOpen(true)

  const onClose = () => setOpen(false)

  return {
    open,
    toggle,
    onOpen,
    onClose,
  }
}
