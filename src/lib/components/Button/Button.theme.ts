export const Theme = {
  button: [
    'relative rounded-lg text-center inline-flex items-center justify-center transition-[background] whitespace-nowrap',
    'focus:ring-4 focus:outline-none'
  ],

  startIcon: [
    'w-3.5 h-3.5 me-2'
  ],
  endIcon: [
    'w-3.5 h-3.5 ms-2'
  ],

  loadingButton: [
    'cursor-wait bg-opacity-70'
  ],
  loadingIcon: [
    'inline w-4 h-4 me-2 text-white animate-spin'
  ]
};

export const ButtonSize = {
  xs: 'px-3 py-2 text-xs',
  sm: 'px-3 py-2 text-sm font-medium',
  md: 'px-5 py-2.5 text-sm font-medium',
  lg: 'px-5 py-3 text-base',
  xl: 'px-6 py-3.5 text-base',
};

export const IconSize = {
  xs: 'w-3 h-3',
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
  lg: 'w-4 h-4',
  xl: 'w-4 h-4'
};

export const ButtonVariants = {
  text: {
    disabled: [
      'text-gray-400 fill-gray-400',
      'dark:text-gray-500'
    ],
    primary: 'bg-transparent text-primary-500 fill-primary-500',
    danger: 'bg-transparent text-danger-500 fill-danger-500',
  },
  contained: {
    disabled: [
      'bg-gray-200 text-gray-400 fill-gray-400',
      'dark:bg-gray-600 dark:text-white-500  dark:fill-white-500'
    ],
    primary: [
      'bg-primary-500 text-white fill-white',
      'enabled:hover:bg-primary-700'
    ],
    danger: [
      'bg-danger-500 text-white fill-white',
      'enabled:hover:bg-danger-700'
    ],
  },
  outlined: {
    disabled: [
      'border border-gray-300 text-gray-400 fill-gray-400',
      'dark:border-gray-600 dark:text-gray-500 dark:fill-gray-500'
    ],
    primary: [
      'bg-white text-primary-700 border border-primary-700 fill-primary-700',
      'enabled:hover:bg-primary-700 enabled:hover:border-primary-700 enabled:hover:text-white',
      'dark:bg-transparent dark:border-primary-400 dark:text-primary-400 dark:fill-primary-400',
      'dark:enabled:hover:text-white'
    ],
    danger: [
      'bg-transparent hover:text-white border border-danger-500 text-danger-500 fill-danger-500',
      'enabled:hover:bg-danger-900 enabled:hover:border-danger-900 enabled:hover:text-white',
      'dark:bg-transparent dark:border-danger-500 dark:text-danger-500 dark:fill-danger-500',
      'dark:enabled:hover:text-white'
    ],
  },
  transparent: {
    disabled: [
      'bg-gray-200 bg-opacity-25 text-gray-400 fill-gray-400',
      'dark:bg-opacity-5'
    ],
    primary: [
      'bg-primary-50 text-primary-700 fill-primary-700',
      'enabled:hover:bg-primary-900 enabled:hover:text-white',
      'dark:bg-primary-700 dark:bg-opacity-25 dark:text-primary-400 dark:fill-primary-400'
    ],
    danger: [
      'bg-danger-700 bg-opacity-20 fill-danger-700',
      'enabled:hover:bg-danger-900 enabled:hover:text-white',
      'dark:bg-opacity-25 dark:text-danger-500  dark:fill-danger-500'
    ],
  },
  basic: {
    disabled: [
    ],
    primary: [
      'text-primary-200 bg-transparent',
      'enabled:hover:bg-neutral-10 enabled:hover:text-white',
      'dark:bg-opacity-25 dark:text-primary-500'
    ],
    danger: [
      'bg-danger-700 text-danger-700 bg-opacity-20',
      'enabled:hover:bg-danger-900 enabled:hover:text-white',
      'dark:bg-opacity-25 dark:text-danger-500'
    ],
  }
};

export const ButtonColors = {
  disabled: [
  ],
  primary: [
    'focus:ring-primary-200',
    'dark:focus:ring-primary-600'
  ],
  danger: [
    'focus:ring-danger-200',
    'dark:focus:ring-danger-600',
  ],
  basic: [
    'focus:ring-danger-700',
    'dark:focus:ring-danger-600',
  ]
}
