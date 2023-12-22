import styles from './animal.module.css'
import { useDispatch } from 'react-redux'
import { deleteAnimal } from '../../store/AnimalSlice'
import Button from '../Button/Button'
import { setEdit } from '../../store/appSlice'
import { AnimalType } from '../../App'

type AnimalProps = {
  id: string,
  name: string,
  image: string;
  handleAnimal: (animal: AnimalType | undefined) => void;
  animalData:{ id: string, name: string, image: string },
}

const Animal = ({ image, id, name, handleAnimal }: AnimalProps) => {
  const dispatch = useDispatch()

  const setEditMode = () => {
    dispatch(setEdit(true))
  }

  const deleteAnimalCard = () => {
    dispatch(deleteAnimal( Number(id) ))  
  }

  return (
    <div className={styles.animalWrapper}>
      <li className={styles.animalItem} key={id}>
        <p className={styles.animalName}>{name}</p>
        <div className={styles.imageWrapper}>
          <img className={styles.animalImage} alt={image} src={image}></img>
        </div>
        <div className={styles.buttonWrapper}>
          <Button buttonText={'Edit'} className={'editButton'} buttonType={'button'} onClick={() => { handleAnimal({id,name,image}); setEditMode() }} />
          <Button buttonText={'Delete'} className={'deleteButton'} buttonType={'button'} onClick={() => deleteAnimalCard()} />
        </div>
      </li>


    </div>
  );
}

export default Animal;