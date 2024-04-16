import {
  createBrowserRouter
} from "react-router-dom";

import {
  ExamplePage,
  ExampleWithQueryParamsPage,
  ExampleWithReactQueryPage
} from "./examples/modules";

const router = createBrowserRouter([
  {
    element: <ExamplePage />,
    path: '/common-usage'
  },
  {
    element: <ExampleWithQueryParamsPage />,
    path: '/example-with-query-params'
  },
  {
    element: <ExampleWithReactQueryPage />,
    path: '/'
  },
]);

export default router;
