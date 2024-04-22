
export const Theme = {
  control: [
    'bg-gray-50 text-gray-400 text-sm rounded-lg',
    'dark:bg-gray-700 dark:text-gray-400 dark:!border-gray-600 dark:text-white'
  ],
  controlDisabled: [
    'bg-neutral-40'
  ],
  controlFocus: [
    'ring ring-primary-100',
    'dark:ring-primary-700'
  ],
  controlError: '!border-danger',
  controlErrorFocus: [
    '!ring-danger-200 !border-danger',
    'dark:!ring-danger dark:!border-danger'
  ],
  placeholder: [
    '!text-gray-400 !text-sm',
    'dark:!text-gray-400'
  ],
  indicatorsContainer: [
    'text-inherit pe-3.5',
    'dark:text-inherit'
  ],
  valueContainer: 'min-h-0 px-2.5 ',
  singleValue: [
    'text-gray-900',
    'dark:text-white'
  ],
  multiValue: [
    "overflow-hidden !bg-primary-50 !text-primary-500 border border-primary-200 border-2 !rounded-lg",
    "dark:!bg-primary-600 dark:border-primary-700 dark:!text-primary-200",
  ],
  multiValueLabel: [
    '!text-primary-500',
    'dark:!text-primary-200'
  ],
  input: [
    '!m-0 !p-0 !text-gray-900',
    'dark:!text-white',
  ],
  menu: [
    '!drop-shadow-[0_0_50px_rgba(33,37,41,0.13)] !shadow-lg !rounded-lg',
    'dark:!bg-gray-700'
  ],
  menuList: [
    '!p-3 !border-none !max-h-[300px]'
  ],
  option: [
    '!text-sm !text-gray-500 !cursor-pointer !rounded',
    'hover:bg-primary-50',
    'dark:!text-gray-400',
    'dark:hover:bg-primary-600',
  ],
  optionFocus: [
    '!bg-primary-100 !text-primary',
    'dark:!bg-primary-700 dark:!text-primary-200'
  ]
};


export const SelectVariants: Record<string, any> = {
  primary: {
    singleValue: [
      "!text-primary-500",
    ],
    control: {
      default: [
        'bg-white rounded-lg !border-neutral-300 cursor-pointer',
        'hover:bg-primary-100 hover:text-primary-400'
      ],
      selected: [
        'bg-primary-50 text-primary-400 rounded-lg !border-primary-500 cursor-pointer',
        'dark:!text-primary-600'
      ]
    }
  },
  outlined: {
    placeholder: [
      '!text-primary-300',
      'dark:!text-primary-600'
    ],
    singleValue: [
      '!text-primary-700',
      'dark:!text-primary-400'
    ],
    clearIndicator: [
      '!text-primary-300 cursor-pointer',
      'hover:!text-primary-600',
      'dark:!text-primary-700',
      'dark:hover:!text-primary-500'
    ],
    control: {
      default: [
        '!bg-white text-primary-400 !border-primary-700',
        'dark:!bg-gray-800 dark:text-primary-600 dark:!border-primary-400'
      ],
      selected: []
    }
  }
};
