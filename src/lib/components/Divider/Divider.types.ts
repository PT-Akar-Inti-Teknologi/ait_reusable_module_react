export enum DividerVariantMapping {
  dashed = 'border-dashed',
  dotted = 'border-dotted',
  solid = 'border-solid'
}

export enum DividerOrientationMapping {
  horizontal = 'w-full border-t',
  vertical = 'h-full border-l'
}

export type DividerVariant = keyof typeof DividerVariantMapping;

export type DividerOrientation = keyof typeof DividerOrientationMapping;

export type DividerThickness = 2 | 4 | 8;

export interface DividerProps {
  orientation: DividerOrientation
  variant: DividerVariant
  className?: string
  thickness?: DividerThickness
  color?: string
}
