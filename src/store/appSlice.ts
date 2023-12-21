import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type App = {
  sort: string;
  isEdit: boolean;
};

const storedAppData = localStorage.getItem('app');
const initialAppState: App = JSON.parse(storedAppData || '[]') ? { sort: 'asc', isEdit: false } : JSON.parse(storedAppData || '[]');

const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setEdit(state, action: PayloadAction<boolean>) {
      state.isEdit = action.payload;
      localStorage.setItem('app', JSON.stringify(state));
    },
    setSort(state) {
      state.sort = state.sort === 'asc' ? 'desc' : 'asc';
      localStorage.setItem('app', JSON.stringify(state));
    },
  },
});

export const { setEdit, setSort } = appSlice.actions;
export const appSliceReducer = appSlice.reducer;
