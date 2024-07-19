import {
  ChangeEvent
} from "react";
import {
  useFormContext
} from "react-hook-form";

import {
  TextField
} from "~/components/TextField";
import {
  cleanNumber,
  formatCurrency
} from "~/utils/input.utils";
import notify from "~/utils/toast.ts";
import {
  useDisabledField,
} from "../HookForm/HookForm.context";
import {
  InputTextFieldProps
} from "./InputTextField.types";
import {
  getHelperTextMessage,
  getInputType,
  validateForm
} from "./InputTextField.utils";

export function InputTextField({
                                   disabled,
                                   name,
                                   rule,
                                   allowedExtensions = [],
                                   onChange: parentOnChange,
                                   ...props
                               }: Readonly<InputTextFieldProps>) {

    const isCurrency = props.type === 'currency';
    const isFile = props.type === 'file';
    // const isImgCrop = props.imgCrop === 'img-crop';
    const isDisabled = useDisabledField(name);
    const isRequired = props?.required || rule?.required;
    const form = useFormContext();
    const error = form.formState.errors[name];

    const setValueAs = (value?: string) => {
        if (props.type === 'number') {
            if (value !== undefined) {
                return isNaN(+value) ? undefined : +value;
            }
        }
        if (isCurrency) {
            return cleanNumber(value);
        }
        return (value);
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (isCurrency) {
            formatCurrency(event.target);
        }
        if (parentOnChange) {
            parentOnChange(event);
        }
    };

    function validateImageFileType(file: File): boolean {
        const fileType = file.type;
        return allowedExtensions.includes(fileType);
    }

    // Custom onChange for file type inputs
    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file && !validateImageFileType(file)) {
            notify(`Only ${allowedExtensions.join(', ')} files are allowed.`, 'error');
            event.target.value = '';
            return;
        }
        if (parentOnChange) {
            parentOnChange(event);
        }
    };

    const register = form.register(name, {
        validate: validateForm(props.type, isRequired),
        setValueAs,
        onChange: isFile ? onFileChange : onChange,
        ...rule,
        required: isRequired
    });

    const handleRef = (ref: HTMLInputElement | null) => {
        register.ref(ref);
        if (isCurrency) {
            setTimeout(() => formatCurrency(ref), 100);
        }
    };

    return (
        <TextField
            {...{...props, ...register}}
            helperText={getHelperTextMessage(error, props)}
            prefix={isCurrency ? "Rp" : props.prefix}
            type={getInputType(props.type)}
            onWheel={(e) => e?.currentTarget?.blur()}
            error={props.error ?? !!error}
            ref={handleRef}
            disabled={isDisabled || disabled}
        />
    );
}
