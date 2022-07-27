import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  value: string;
}

const initialState: State = {
  value: '',
}

export const slice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    gotLogs: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { gotLogs } = slice.actions;
export default slice.reducer;

