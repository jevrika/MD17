import styles from './AnimalsList.module.css'
import Animal from '../Animal/Animal';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { AnimalType } from '../../App';
import { sortAnimals } from '../../store/AnimalSlice';
import { useEffect } from 'react';

type AnimalListProps = {
  handleAnimal: (animal: AnimalType | undefined) => void;
  animalData: { id: string, name: string, image: string },
}

const AnimalsList = ({ handleAnimal, animalData }: AnimalListProps) => {
  const dispatch = useDispatch()
  const animals = useSelector((state: RootState) => state.animals.animals);
  const currentState = useSelector((state: RootState) => state.app.sort)
  const isAnimalsExist = animals.length === 0 ? false : true


  
  useEffect(() => {
    sortByAnimalName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState]);

  const sortByAnimalName = () => {
    dispatch(sortAnimals(currentState))
  }
  
  return (
    <>
      {isAnimalsExist ? (<div className={styles.animalsListWrapper}>
        {
          animals.map((animal => <Animal key={animal.id}{...animal} handleAnimal={handleAnimal} animalData={animalData} />))
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