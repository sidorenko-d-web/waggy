import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string) {
  const [value, setValue] = useState<T>();
  useEffect(() => {
    try {
      const value = JSON.parse(localStorage.getItem(key) ?? "");
      setValue(value);
    } catch (error) {
      setValue(undefined);
    }
  }, []);
  const handleSetValue = (value: T): void => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { value, handleSetValue };
}
