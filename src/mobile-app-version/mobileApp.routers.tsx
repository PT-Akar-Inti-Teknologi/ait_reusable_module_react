import { RouteObject } from "react-router-dom";

import { MobileAppAddPage } from "./MobileApp/MobileAppAdd.page";
import { MobileAppEditPage } from "./MobileApp/MobileAppEdit.page";
import { MobileAppListPage } from "./MobileApp/MobileAppList.page";
import { MobileAppDetailPage } from "./MobileApp/MobileAppDetail.page";

export const MobileAppRoutes: RouteObject[] = [
  {
    element: <MobileAppListPage />,
    index: true
  },
  {
    element: <MobileAppAddPage />,
    path: 'add'
  },
  {
    element: <MobileAppDetailPage />,
    path: 'detail/:platform/:version'
  },
  {
    element: <MobileAppEditPage />,
    path: 'edit/:platform/:version'
  },
];

export const MobileAppRouter: RouteObject = {
  children: MobileAppRoutes,
  path: '/mobile-app-version',
};
