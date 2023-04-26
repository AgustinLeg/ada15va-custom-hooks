import styles from './Modal.module.css'
import { useToggle } from '../../hooks/useToggle'

export const Modal = ({ children }) => {
  const { open, onOpen, onClose } = useToggle()

  return (
    <div>
      <button onClick={onOpen}>Open</button>

      {open && (
        <main className={styles.modal}>
          <div className={styles.overlay} onClick={onClose} />
          <div className={styles.content}>{children}</div>
        </main>
      )}
    </div>
  )
}
