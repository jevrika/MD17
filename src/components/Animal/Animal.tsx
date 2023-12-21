import styles from './animal.module.css'
import { useDispatch } from 'react-redux'
import { deleteAnimal } from '../../store/AnimalSlice'
import Button from '../Button/Button'
import { setUpdate } from '../../store/appSlice'

type AnimalProps = {
  id: string,
  name: string,
  image: string;
  handleId: (arg0: string) => void,
  handleName: (arg0: string) => void,
  handleImage: (arg0: string) => void,
}

const Animal = ({ image, id, name, handleImage, handleId, handleName }: AnimalProps) => {
  const dispatch = useDispatch()

  const setEditMode = () => {
    dispatch(setUpdate(true))
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
          <Button buttonText={'Edit'} className={'editButton'} buttonType={'button'} onClick={() => { handleId(id); handleName(name); handleImage(image); setEditMode() }} />
          <Button buttonText={'Delete'} className={'deleteButton'} buttonType={'button'} onClick={() => deleteAnimalCard()} />
        </div>
      </li>


    </div>
  );
}

export default Animal;