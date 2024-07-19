import { RouteObject } from "react-router-dom";

import { ExampleCMSBannerAddPage } from "./ExampleCMSBannerAdd.page.tsx";
import { ExampleCMSBannerDetailPage } from "./ExampleCMSBannerDetail.page.tsx";
import { ExampleCMSBannerEditPage } from "./ExampleCMSBannerEdit.page.tsx";
import { ExampleCMSBanner } from "./index";

export const ExampleCMSBannerRoutes: RouteObject[] = [
    {
        element: <ExampleCMSBanner/>,
        index: true
    },
    {
        element: <ExampleCMSBannerAddPage/>,
        path: 'add'
    },
    {
        element: <ExampleCMSBannerEditPage/>,
        path: 'edit/:id'
    },
    {
        element: <ExampleCMSBannerDetailPage/>,
        path: 'detail/:id'
    }
];

export const ExampleCMSBannerRouter: RouteObject = {
    children: ExampleCMSBannerRoutes,
    path: '/example-cms-banner',
};
