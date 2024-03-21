import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {InitialStateProps} from './types';

const initialState: InitialStateProps = {
  favorites: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action: PayloadAction<any>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<any>) => {
      state.favorites = state.favorites.filter(
        (item: any) => item.id !== action.payload.id,
      );
    },
  },
});

export const {getFavorites, addFavorite, removeFavorite} = userSlice.actions;
export default userSlice.reducer;
