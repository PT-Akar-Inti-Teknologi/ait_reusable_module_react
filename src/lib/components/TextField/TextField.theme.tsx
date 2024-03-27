export const Theme = {

  container: 'relative',
  wrapper: 'relative',

  input: [
    'bg-gray-50 border border-transparent border-solid text-gray-900 text-sm rounded-lg block w-full p-2.5 ring-transparent outline-none',
    'focus:border focus:border-primary-200 focus:ring focus:ring-primary-100',
    'disabled:bg-gray-200 disabled:text-neutral-400',
    'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white',
    'dark:focus:ring-primary-700 dark:focus:border-primary-600'
  ],
  inputError: [
    'border border-danger',
    'focus:ring-danger-200 focus:border-danger',
    'dark:focus:ring-danger dark:focus:border-danger'
  ],

  startIconWrapper: [
    'absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none space-x-4',
  ],
  endIconWrapper: [
    'absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none space-x-4'
  ],
  endIconPasswordWrapper: [
    "absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
  ],
  svgIcon: [
    'w-4 h-4 text-gray-500 dark:text-gray-400'
  ]
};