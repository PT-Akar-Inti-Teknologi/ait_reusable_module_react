import { useEffect, useState } from "react";


export function useToggleDarkModeHook() {

  const storageKey = 'prefs-color-scheme';

  const [isDark, setIsdark] = useState<boolean>(() => {
    const _isDark = localStorage.getItem(storageKey);
    return _isDark === 'true';
  });

  useEffect(
    () => {
      localStorage.setItem(storageKey, isDark.toString());
      if (isDark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    },
    [isDark]
  );

  return [
    isDark,
    setIsdark
  ] as const;
}
