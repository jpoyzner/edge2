import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../types';

interface State {
  value: Contact[];
}

const initialState: State = {
  value: [],
}

export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.value = action.payload;
    },
    setContact: (state, action: PayloadAction<Contact>) => {
      state.value.push(action.payload);
    },
  },
});

export const { setContacts, setContact } = slice.actions;
export default slice.reducer;


