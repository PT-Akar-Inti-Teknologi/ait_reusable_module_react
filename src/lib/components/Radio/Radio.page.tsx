import { RadioProps } from './Radio.types';
import { twMerge } from 'tailwind-merge';
import { Theme } from './Radio.theme';
import React, { useId } from 'react';

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ containerClassname, className, label, value, ...props }, ref) => {
    const id = useId();

    return (
      <div className={twMerge('flex items-center mb-2', containerClassname)}>
        <input
          ref={ref}
          className={twMerge(Theme.input, className)}
          value={value?.toString()}
          type="radio"
          key={props.checked ? '1' : '0'}
          id={id}
          {...props}
        />
        {!!label && (
          <label
            htmlFor={id}
            className={twMerge(
              Theme.label,
              props.disabled && Theme.labelDisabled
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
