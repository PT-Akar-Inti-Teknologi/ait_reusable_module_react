import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css'
import router from './router.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: (_: any) => _
    }
  }
});

function Main() {

  const storageKey = 'prefs-color-scheme';

  useLayoutEffect(
    () => {
      const isDark = localStorage.getItem(storageKey);
      if (isDark === 'true') {
        document.body.classList.add('dark');
      }
    },
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
