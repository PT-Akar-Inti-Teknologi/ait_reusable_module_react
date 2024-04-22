import {
  createBrowserRouter
} from "react-router-dom";

import {
  ExamplePage,
  ExampleWithQueryParamsPage,
  ExampleWithReactQueryPage
} from "./examples/modules";

import { MobileAppAddPage } from "./mobile-app-version/modules/MobileApp/MobileAppAdd.page";
import { mobileAppRouters } from "./mobile-app-version/modules/mobileAppRouters";

const router = createBrowserRouter([
  {
    children: mobileAppRouters,
    element: <MobileAppAddPage />,
    path: '/mobile-app-version'
  },
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
