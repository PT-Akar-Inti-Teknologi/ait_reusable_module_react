import { createBrowserRouter } from "react-router-dom";

import { QueryParams } from "./examples/modules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QueryParams />,
  },
]);

export default router;
