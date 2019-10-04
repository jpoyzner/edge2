import { useState, ChangeEvent } from 'react';

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