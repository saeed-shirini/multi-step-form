import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PersonalInfo from "./features/first-step/components/PersonalInfo";
import Plans from "./features/second step/Plans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PersonalInfo />,
      },
      {
        path: "step-two",
        element: <Plans />,
      },
      { path: "step-three", element: "step3" },
      { path: "step-four", element: "step4" },
    ],
  },
]);

export default router;
