import {
  twMerge
} from "tailwind-merge";
import {
  ChangeEvent,
  forwardRef,
  Ref,
  useEffect,
  useId,
  useRef,
  useState
} from "react";

import {
  InputSearchProps
} from "./InputSearch.types";
import {
  TextField
} from "../TextField";
import {
  CloseIcon,
  SearchIcon
} from "./Icons";

function _InputSearch({
  onChangeText,
  className,
  ...props
}: InputSearchProps,
  ref: Ref<HTMLInputElement>
) {

  const _hasValue = !!props.defaultValue || !!props.value;
  const [hasValue, setHasValue] = useState<boolean>(_hasValue);

  const inputRef = useRef<HTMLInputElement>();

  const id = useId();

  useEffect(
    () => {
      inputRef.current = document.getElementById(id) as HTMLInputElement;
      setHasValue(!!inputRef.current.value);
    },
    [_hasValue]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChangeText?.(value);
    setHasValue(!!value);
  }

  const handleClear = () => {
    onChangeText?.('');
    setHasValue(false);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <TextField
      autoComplete="off"
      placeholder="Search"
      className={twMerge("max-w-[500px] px-6 w-full", className)}
      startIcon={SearchIcon}
      endIcon={hasValue ? CloseIcon : undefined}
      onClickEndIcon={handleClear}
      classNames={hasValue ? { endIconWrapper: "cursor-pointer !pointer-events-auto z-10" } : undefined}
      onChange={handleChange}
      {...{ ref, id, ...props }}
    />
  );
}

export const InputSearch = forwardRef(_InputSearch);
