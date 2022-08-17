import React, { ChangeEvent, KeyboardEvent } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';

export interface InputState {
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  onKeyDown(e: KeyboardEvent<HTMLInputElement>): void;
}

export function useInput(
  initialValue: string,
  onChangeCallback?: (e: ChangeEvent<HTMLInputElement>) => void,
  onEnterCallback?: (value: string) => void): InputState {

  const [value, setValue] = React.useState(initialValue);
  
  return {
    value,
    onChange(e: ChangeEvent<HTMLInputElement>) {
      setValue(e.target.value);

      if (onChangeCallback) {
      	onChangeCallback(e);
      }
    },
    onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      if (onEnterCallback && e.key === 'Enter') {
        onEnterCallback(value);
        setValue('');
      }
    }
  }
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;