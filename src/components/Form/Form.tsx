import Button from '../Button/Button'
import styles from './Form.module.css'
import { sortAnimals, editAnimal } from '../../store/AnimalSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { setSort, setEdit } from '../../store/appSlice';
import { addAnimal } from '../../store/AnimalSlice'

type FormProps = {
  name: string,
  image: string;
  id: string,
  handleName: (arg0: string) => void
  handleInput: (arg0: string) => void
  handleImage: (arg0: string) => void
  handleId: (arg0: string) => void
}

const Form = ({ id, image, name, handleName, handleInput, handleImage, handleId }: FormProps) => {
  const dispatch = useDispatch()
  const currentState = useSelector((state: RootState) => state.app.sort)
  const isEdit = useSelector((state: RootState) => state.app.isEdit)

  const sortByAnimalName = () => {
    dispatch(sortAnimals(currentState))
  }

  const addAnimalName = () => {
    dispatch(addAnimal({ name, image }))
    handleName('')
    handleImage('')
  }

  const editAnimalName = () => {
    dispatch(editAnimal({ id, name, image }))
    dispatch(setEdit(false))
    handleId('')
    handleName('')
    handleImage('')
  }

  return (
    <>
      <div className={styles.wrapper}>

        <form className={styles.form}>
          <input placeholder='write animal' className={styles.input} value={name} onChange={(e) => handleInput(e.target.value)} />
          <input placeholder='animal image url' className={styles.input} value={image} onChange={(e) => handleImage(e.target.value)} />
          {isEdit ?
            (
              <Button buttonText={'Update Animal'} className={'editAnimalButton'} buttonType={'submit'} onClick={() => { editAnimalName() }} />)
            :
            (<>
              <Button buttonText={'Add Animal'} className={'addAnimalButton'} buttonType={'submit'} onClick={() => addAnimalName()} />
              <Button buttonText={'Sort'} className={'sortButton'} buttonType={'button'} onClick={() => { dispatch(setSort()); sortByAnimalName() }} />
            </>
            )}
        </form>
      </div>
    </>
  );
}

export default Form;
