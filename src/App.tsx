import useLocalStorage from "use-local-storage";
import styles from './App.module.css'
import AnimalsList from './components/AnimalsList/AnimalsList'
import InputField from './components/InputField/InputField'
import { useDispatch  } from 'react-redux'
import { addAnimal, updateAnimal } from './store/AnimalSlice'
import { setUpdate } from "./store/appSlice";

function App() {
  const [name, setName] = useLocalStorage('name', '')
  const [id, setId] = useLocalStorage('id', '')
  const [image, setImage] = useLocalStorage('image', '')
  const dispatch = useDispatch ()

  const addAnimalName = () => {
    dispatch(addAnimal({name, image}))
    setName('')
    setImage('')
  }
  const updateAnimalName = () => {
    dispatch(updateAnimal({ id, name, image}))
    dispatch(setUpdate(false))
    setId('')
    setName('')
    setImage('')
  }

  return (
    <div className={styles.container}>
      <InputField image={image} name={name} id={id} handleImage={setImage} handleInput={setName} handleSubmit={addAnimalName} handleUpdate={updateAnimalName} />
      <AnimalsList handleId={setId} handleName={setName}handleImage={setImage}/>
    </div>
  )
}

export default App
