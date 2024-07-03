import { forwardRef } from 'react';
import { HelperText } from '../HelperText';
import { Label } from '../Label';
import { InputGroupProps } from './InputGroup.types';

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(
    { children, helperText, required, error, label, ...props },
    ref
  ) {
    return (
      <div className="flex gap-1" ref={ref}>
        {!!label && <Label {...{ required, error }}>{label}</Label>}
        <div className="flex flex-row gap-1" {...props}>
          {children}
        </div>
        {!!helperText && <HelperText {...{ error }}>{helperText}</HelperText>}
      </div>
    );
  }
);
