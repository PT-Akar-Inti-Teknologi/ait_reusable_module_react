import {
  createBrowserRouter
} from "react-router-dom";

import {
  ExampleDraggable,
  ExamplePage,
  ExampleWithQueryParamsPage,
  ExampleWithReactQueryPage,
} from "./examples/modules";
import { ExampleCMSBannerRouter } from "./examples/modules/ExampleCMSBanner/ExampleCMSBanner.routers";
import { MobileAppRouter } from "./mobile-app-version/mobileApp.routers";

const router = createBrowserRouter([
    MobileAppRouter,
    ExampleCMSBannerRouter,

    {
        element: <ExamplePage/>,
        path: '/common-usage'
    },
    {
        element: <ExampleWithQueryParamsPage/>,
        path: '/example-with-query-params'
    },
    {
        element: <ExampleWithReactQueryPage/>,
        path: '/'
    },
    {
        element: <ExampleDraggable/>,
        path: '/example-draggable'
    },
]);

export default router;
