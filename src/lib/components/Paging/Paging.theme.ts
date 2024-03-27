
export const Theme = {
  container: [
    'flex flex-row justify-between items-center px-6'
  ],

  paging: [
    'flex flex-row w-auto gap-2'
  ],

  select: [
    'h-[32px] w-[64px] text-gray-400 text-sm bg-gray-50 px-3 py-0 rounded',
    'outline-none focus:ring focus:ring-primary-100',
    'dark:bg-gray-700',
    'dark:focus:ring-primary-800'
  ],

  button: [
    'flex justify-center items-center min-w-[32px] h-[32px] bg-gray-50 text-gray-400 text-sm p-1 rounded cursor-pointer',
    'enabled:hover:bg-primary-600 enabled:hover:text-white',
    'disabled:cursor-default disabled:opacity-50',
    'dark:bg-gray-700',
    'dark:enabled:hover:bg-primary-700'
  ],
  buttonActive: [
    'bg-primary-500 text-white',
    'disabled:opacity-100',
    'dark:bg-primary-600'
  ],
  buttonLoading: 'disabled:cursor-wait disabled:opacity-80',
  separator: [
    'flex justify-center items-center min-w-[32px] h-[32px] text-gray-400 text-lg p-1'
  ]
};
