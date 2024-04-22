import { RegisterOptions } from "react-hook-form"
import { HTMLAttributes, InputHTMLAttributes } from "react"

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  helperText?: string
  required?: boolean
  error?: boolean
  label?: string
  rule?: RegisterOptions<any, string>
}
