import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AnimalType } from '../App';

const storedAnimalData = localStorage.getItem('animal');
const initialAnimalList: AnimalType[] = JSON.parse(storedAnimalData || '[]');

const initialState = {
  animals: initialAnimalList,
};

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    addAnimal(state, action: PayloadAction<{ id: string; name: string; image: string }>) {
      if (action.payload.name.length === 0) {
        alert('Fill the name field');
      } else if (action.payload.image.length === 0) {
        alert('Fill the image ulr field');
      } else {
        state.animals.push({
          id: String(state.animals.length),
          name: action.payload.name,
          image: action.payload.image,
        });
      }
      localStorage.setItem('animal', JSON.stringify(state.animals.map((animal) => animal)));
    },
    deleteAnimal(state, action: PayloadAction<number>) {
      state.animals = state.animals.filter((animal) => animal.id !== String(action.payload));
      localStorage.setItem('animal', JSON.stringify(state.animals));
    },
    editAnimal(state, action: PayloadAction<{ id: string; name: string; image: string }>) {
      const position: number = state.animals.map((position) => position.id).indexOf(action.payload.id);
      state.animals[position].name = action.payload.name;
      state.animals[position].image = action.payload.image;
      localStorage.setItem('animal', JSON.stringify(state.animals));
    },
    sortAnimals(state, action: PayloadAction<string>) {
      if (action.payload === 'asc') {
        state.animals.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        state.animals.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
  },
});

export const { addAnimal, deleteAnimal, editAnimal, sortAnimals } = animalSlice.actions;
export const animalSliceReducer = animalSlice.reducer;
