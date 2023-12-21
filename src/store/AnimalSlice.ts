import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Animal = {
  id: string;
  name: string;
  image: string;
};

const storedAnimalData = localStorage.getItem('animal');
const initialAnimalList: Animal[] = JSON.parse(
  storedAnimalData ||
    '[{"id":"bbfd01643a8d9","name":"Alpaca","image":"https://i.pinimg.com/736x/a7/e3/fb/a7e3fb9f8f3676e7acc239529f28c8ac.jpg"},{"id":"2","name":"Cat","image":"https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg"},{"id":"15f947d25a4c2","name":"Dog","image":"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"},{"id":"fed63e1057548","name":"Ferret","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6XaXYB6nyUGSacWeDtteAF3sA4k5hHvZhQ&usqp=CAU"},{"id":"9e2eb682d82ba","name":"Fox","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVaW1cvxEgQGzyPV6y4c4_laUl9OZUy4yEA&usqp=CAU"},{"id":"0","name":"Pig","image":"https://i.pinimg.com/564x/b2/6c/99/b26c998d89d23f06e315107f88927e9b.jpg"},{"id":"6dada8ffd3872","name":"Seal","image":"https://files.worldwildlife.org/wwfcmsprod/images/HERO_harbor_seal_on_ice/hero_small/41yzw17euy_Harbor_Seal_on_Ice_close_0357_6_11_07.jpg"}]'
);

const initialState = {
  animals: initialAnimalList,
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
      state.animals[parseInt(action.payload.id)].name = action.payload.name;
      state.animals[parseInt(action.payload.id)].image = action.payload.image;
      localStorage.setItem('animal', JSON.stringify(state.animals));
    },
    sortAnimals(state, action: PayloadAction<string>) {
      if (action.payload === 'desc') {
        state.animals.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        state.animals.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
  },
});

export const { addAnimal, deleteAnimal, editAnimal, sortAnimals } = animalSlice.actions;
export const animalSliceReducer = animalSlice.reducer;
