import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PersonalInfo from "./features/first-step/components/PersonalInfo";
import Plans from "./features/second step/Plans";
import AddOns from "./features/third step/AddOns";
import Summary from "./features/fourth step/Summary";

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
      { path: "step-three", element: <AddOns /> },
      { path: "step-four", element: <Summary /> },
    ],
  },
]);

export default router;
