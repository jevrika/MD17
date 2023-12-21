import useLocalStorage from "use-local-storage";
import styles from './App.module.css'
import AnimalsList from './components/AnimalsList/AnimalsList'
import Form from './components/Form/Form'

function App() {
  const [name, setName] = useLocalStorage('name', '')
  const [id, setId] = useLocalStorage('id', '')
  const [image, setImage] = useLocalStorage('image', '')

  return (
    <div className={styles.container}>
      <Form image={image} name={name} id={id} handleImage={setImage} handleInput={setName} handleName={setName} handleId={setId} />
      <AnimalsList handleId={setId} handleName={setName} handleImage={setImage} />
    </div>
  )
}

export default App
