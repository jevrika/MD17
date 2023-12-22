import Button from '../Button/Button'
import styles from './Form.module.css'
import { sortAnimals, editAnimal } from '../../store/AnimalSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { setSort, setEdit } from '../../store/appSlice';
import { addAnimal } from '../../store/AnimalSlice'
import { AnimalType} from '../../App'

type FormProps = {
  animalData:{ id: string, name: string, image: string },
  handleAnimal: (animal: AnimalType | undefined) => void;
}

const Form = ({ animalData, handleAnimal }: FormProps) => {
  const dispatch = useDispatch()
  const currentState = useSelector((state: RootState) => state.app.sort)
  const isEdit = useSelector((state: RootState) => state.app.isEdit)

  const sortByAnimalName = () => {
    dispatch(setSort())
    dispatch(sortAnimals(currentState))
  }

  const addAnimalName = () => {
    dispatch(addAnimal({ id: animalData.id, name: animalData.name, image: animalData.image }))
    handleAnimal({ id: '', name: '', image: '' })
  }

  const editAnimalName = () => {
    dispatch(editAnimal({ id: animalData.id, name: animalData.name, image: animalData.image }))
    dispatch(setEdit(false))
    handleAnimal({ id: '', name: '', image: '' })
  }


  return (
    <>
      <div className={styles.wrapper}>

        <form className={styles.form}>
          <input placeholder='write animal' className={styles.input} value={animalData.name} onChange={(e) => handleAnimal({ id: animalData.id, name: e.target.value, image: animalData.image })} />
          <input placeholder='animal image url' className={styles.input} value={animalData.image} onChange={(e) => handleAnimal({ id: animalData.id, name: animalData.name, image: e.target.value })} />
          {isEdit ?
            (
              <Button buttonText={'Update Animal'} className={'editAnimalButton'} buttonType={'submit'} onClick={() => { editAnimalName() }} />)
            :
            (<>
              <Button buttonText={'Add Animal'} className={'addAnimalButton'} buttonType={'submit'} onClick={() => addAnimalName()} />
              <Button buttonText={'Sort'} className={'sortButton'} buttonType={'button'} onClick={() => sortByAnimalName() } />
            </>
            )}
        </form>
      </div>
    </>
  );
}

export default Form;
