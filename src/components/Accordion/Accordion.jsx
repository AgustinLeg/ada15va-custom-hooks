import styles from './Accordion.module.css'

import { HiChevronDown } from 'react-icons/hi'
import { useToggle } from '../../hooks/useToggle'

export const Accordion = ({ title, children }) => {
  const { open, toggle } = useToggle(false)

  return (
    <div className={styles.accordion}>
      <header className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <button onClick={toggle}>
          <HiChevronDown />
        </button>
      </header>
      {/* {open ? <main>{children}</main> : <></>} */}
      {/* {open && <main>{children}</main>} */}
      <main>{open && children}</main>
    </div>
  )
}
