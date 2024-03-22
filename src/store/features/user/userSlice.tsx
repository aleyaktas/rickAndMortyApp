import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICharacter, InitialStateProps} from './types';

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
    handleFavorite: (state, action: PayloadAction<ICharacter>) => {
      const index = state.favorites.findIndex(
        item => item.id === action.payload.id,
      );
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const {getFavorites, handleFavorite} = userSlice.actions;
export default userSlice.reducer;
