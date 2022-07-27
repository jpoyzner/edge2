import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types';

interface State {
  value: Post[];
}

const initialState: State = {
  value: [],
}

export const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setPosts } = slice.actions;
export default slice.reducer;
