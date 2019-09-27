import { useState } from 'react';

export function useInput(initialValue, onChangeCallback) {
  const [value, setValue] = useState(initialValue);
  
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);

      if (onChangeCallback) {
      	onChangeCallback(e);
      }
    },
  }
}