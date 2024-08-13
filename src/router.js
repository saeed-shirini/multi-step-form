import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PersonalInfo from "./features/first-step/components/PersonalInfo";

 const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[{
                index:true,element:<PersonalInfo/>,
            },
            {
            path:"step-two",
            element:"step two",
            }
    ]
    }
])

export default router;