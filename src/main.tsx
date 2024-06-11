import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Suspense } from "react";

import Loader from "./components/ui/Loader";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </Suspense>
);
