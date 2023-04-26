import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Modal } from './components/Modal/Modal'

function App() {
  return (
    <main>
      <h1>Custom Hooks</h1>

      <Accordion title="hola">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
          nulla ratione quisquam fugiat dolores at pariatur doloribus, atque eos
          culpa porro eveniet. Dolor, sunt similique. Nisi, odio! Numquam,
          tempore.
        </p>
      </Accordion>

      <Modal>
        <p>Hola mundo</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quam
          facilis sed adipisci, eaque, cumque, nemo dicta aperiam eius tempora
          blanditiis rem repellat nostrum! Iste illum laborum quidem iusto
          recusandae.
        </p>
      </Modal>
    </main>
  )
}

export default App
