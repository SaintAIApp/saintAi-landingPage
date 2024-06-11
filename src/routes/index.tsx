import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

// Lazy Loading all the pages
const LandingPage = lazy(():any => import("../pages/Landing"));
const NotFound = lazy(():any => import("../pages/NotFound"));
const Loader = lazy(():any => import("../components/ui/Loader"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <LandingPage />
          </Suspense>
        ),
      },
    
     
     
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
