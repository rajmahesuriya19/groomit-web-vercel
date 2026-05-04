import MuiButton from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { cn } from '@/utils/cn'

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variantMap: Record<NonNullable<ButtonProps['variant']>, MuiButtonProps['variant']> = {
  primary: 'contained',
  secondary: 'outlined',
  ghost: 'text',
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <MuiButton
      variant={variantMap[variant]}
      color="primary"
      className={cn('capitalize', className)}
      {...props}
    >
      {children}
    </MuiButton>
  )
}
