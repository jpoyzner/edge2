import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface State {
  value: number
}

const initialState: State = {
  value: 0,
}

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
    	state.value++;
    },
    decrement: (state) => {
      state.value --;
    },
  },
});

export const { set, increment, decrement } = slice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default slice.reducer;
