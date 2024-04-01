import { createBrowserRouter } from "react-router-dom";

import { ExamplePage } from "./examples/modules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExamplePage />,
  },
]);

export default router;
