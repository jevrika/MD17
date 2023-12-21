import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Animal = {
  id: string;
  name: string;
  image: string;
};

type AnimalState = {
  list: Animal[];
};

const storedAnimalData = localStorage.getItem('animal');
const initialAnimalList: Animal[] = JSON.parse(storedAnimalData || '[]') ? JSON.parse(storedAnimalData || '[]') : [];

const initialState: AnimalState = {
  list: initialAnimalList,
};

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    addAnimal(state, action: PayloadAction<{ name: string; image: string }>) {
      if (action.payload.name.length === 0) {
        alert('Fill the name field');
      } else if (action.payload.image.length === 0) {
        alert('Fill the image ulr field');
      } else {
        state.list.push({
          id: String(Math.random()),
          name: action.payload.name,
          image: action.payload.image,
        });
      }
      localStorage.setItem('animal', JSON.stringify(state.list.map((animal) => animal)));
    },
    deleteAnimal(state, action: PayloadAction<number>) {
      state.list = state.list.filter((animal) => animal.id !== String(action.payload));
      localStorage.setItem('animal', JSON.stringify(state.list));
    },
    updateAnimal(state, action: PayloadAction<{ id: string; name: string; image: string }>) {
      state.list[parseInt(action.payload.id)].name = action.payload.name;
      state.list[parseInt(action.payload.id)].image = action.payload.image;
      localStorage.setItem('animal', JSON.stringify(state.list));
    },
    sortAnimals(state, action: PayloadAction<string>) {
      if (action.payload === 'asc') {
        state.list.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        state.list.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
  },
});


export const { addAnimal, deleteAnimal, updateAnimal, sortAnimals } = animalSlice.actions;
export const animalSliceReducer = animalSlice.reducer;
