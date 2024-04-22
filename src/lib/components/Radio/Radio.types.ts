import { InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  containerClassname?: string
}

export type RadioItem = {
  label: string,
  value: string
}