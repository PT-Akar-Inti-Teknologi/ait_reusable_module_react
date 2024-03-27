import { twMerge } from "tailwind-merge";

import { ThemeToggleDarkIcon, ThemeToggleLightIcon } from "./Icons";
import { Theme } from "./ToggleDarkMode.theme";
import { useToggleDarkModeHook } from "./ToggleDarkMode.hooks";

export function ToggleDarkMode() {

  const [isDark, setIsDark] = useToggleDarkModeHook();

  return (
    <button
      className={twMerge(Theme.button)}
      onClick={() => setIsDark((_) => !_)}
      type="button"
      id="theme-toggle"
    >
      {isDark ?
        <ThemeToggleDarkIcon /> :
        <ThemeToggleLightIcon />
      }
    </button>
  );
}
