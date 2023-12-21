import styles from './AnimalsList.module.css'
import Animal from '../Animal/Animal';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

type AnimalListProps = {
  handleId: (arg0: string) => void
  handleName: (arg0: string) => void
  handleImage: (arg0: string) => void
}

const AnimalsList = ({ handleId, handleName, handleImage }: AnimalListProps) => {
  const animals = useSelector((state: RootState) => state.animals.list);
  const isAnimalsExist = animals.length === 0 ? false : true

  return (
    <>
      {isAnimalsExist ? (<div className={styles.animalsListWrapper}>
        {
          animals.map((animal => <Animal key={animal.id}{...animal} handleId={handleId} handleName={handleName} handleImage={handleImage} />))
        }
      </div>)
        : (
          <div className={styles.errorWrapper}>
            <h1 className={styles.errorMessage}> Animals not found!</h1>
          </div>
        )}
    </>
  );
}

export default AnimalsList