import { PayloadAction } from '@reduxjs/toolkit';

export default (store: any) => (next: any) => async (action: PayloadAction<any>) => {
  next(action);
  //console.log("REQUEST MIDDLEWARE CALLED");
};