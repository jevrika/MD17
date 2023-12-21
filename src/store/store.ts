import { configureStore } from '@reduxjs/toolkit';
import { animalSliceReducer } from './AnimalSlice';
import { appSliceReducer } from './appSlice';

export const store = configureStore({
  reducer: {
    animals: animalSliceReducer,
    app: appSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
