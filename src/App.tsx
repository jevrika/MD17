import useLocalStorage from "use-local-storage";
import styles from './App.module.css'
import AnimalsList from './components/AnimalsList/AnimalsList'
import Form from './components/Form/Form'

export type AnimalType = {
  id:string,
  name:string,
  image:string
}

function App() {
  const [animalData, setAnimalData] = useLocalStorage<AnimalType>('animalInputData', {
    id: '',
    name: '',
    image: ''
  })
  return (
    <div className={styles.container}>
      <Form animalData={animalData} handleAnimal={setAnimalData} />
      <AnimalsList animalData={animalData} handleAnimal={setAnimalData} />
    </div>
  )
}

export default App
