import clsx from 'clsx'

import './index.css'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        size === 'large'
          ? 'rounded px-8 py-3 text-xl'
          : size === 'small'
          ? 'rounded-sm px-2 py-1 text-xs'
          : 'rounded px-5 py-2',
        'shadow',
        'transition-colors',
        primary ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-900',
        primary ? 'hover:bg-blue-700' : 'hover:bg-slate-200',
        'active:translate-y-px',
      )}
      {...props}
    >
      {label}
    </button>
  )
}
