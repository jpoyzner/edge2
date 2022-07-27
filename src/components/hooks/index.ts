import { useState, ChangeEvent } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';

export interface InputState {
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

export function useInput(initialValue: string, onChangeCallback?: (e: ChangeEvent<HTMLInputElement>) => void ): InputState {
  const [value, setValue] = useState(initialValue);
  
  return {
    value,
    onChange(e: ChangeEvent<HTMLInputElement>) {
      setValue(e.target.value);

      if (onChangeCallback) {
      	onChangeCallback(e);
      }
    },
  }
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;