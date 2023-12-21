import Button from '../Button/Button'
import styles from './InputField.module.css'
import { sortAnimals} from '../../store/AnimalSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { setSort } from '../../store/appSlice';

type InputFieldProps = {
  name: string,
  image: string;
  id: string,
  handleInput: (arg0: string) => void
  handleImage: (arg0: string) => void
  handleSubmit: () => void
  handleUpdate: () => void
}

const InputField = ({ image, name, handleInput, handleSubmit, handleUpdate, handleImage }: InputFieldProps) => {
  const dispatch = useDispatch()

  const currentState = useSelector((state: RootState) => state.app.sort)
  const isEdit = useSelector((state: RootState) => state.app.isEdit)

  const sortByAnimalName = () => {
    dispatch(sortAnimals(currentState))
  }


  return (
    <>
      <div className={styles.wrapper}>

        <form className={styles.form}>
          <input placeholder='write animal' className={styles.input} value={name} onChange={(e) => handleInput(e.target.value)} />
          <input placeholder='animal image url' className={styles.input} value={image} onChange={(e) => handleImage(e.target.value)} />
          {isEdit ? (
            <Button buttonText={'Update Animal'} className={'updateAnimalButton'} buttonType={'submit'} onClick={() => { handleUpdate() }} />)
            :
            (<Button buttonText={'Add Animal'} className={'addAnimalButton'} buttonType={'submit'} onClick={() => handleSubmit()} />)}
        </form>
        <Button buttonText={'Sort'} className={'sortButton'} buttonType={'button'} onClick={() => { dispatch(setSort()); sortByAnimalName() }} />
      </div>
    </>
  );
}

export default InputField;
