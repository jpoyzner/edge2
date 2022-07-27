import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  value: string[];
}

const initialState: State = {
  value: [],
}

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    gotTodos: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
  },
});

export const { gotTodos } = slice.actions;
export default slice.reducer;

