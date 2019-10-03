import { useState, ChangeEvent } from 'react';

export function useInput(initialValue: string, onChangeCallback?: (e: ChangeEvent<HTMLInputElement>) => void ) {
  const [value, setValue] = useState(initialValue);
  
  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);

      if (onChangeCallback) {
      	onChangeCallback(e);
      }
    },
  }
}