import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ServiceFive from "../pages/ServiceDetails/ServiceFive";
import ServiceFour from "../pages/ServiceDetails/ServiceFour";
import ServiceOne from "../pages/ServiceDetails/ServiceOne";
import ServiceSix from "../pages/ServiceDetails/ServiceSix";
import ServiceThree from "../pages/ServiceDetails/ServiceThree";
import ServiceTwo from "../pages/ServiceDetails/ServiceTwo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   Service details
      {
        path: "/service-one",
        element: <ServiceOne />,
      },
      {
        path: "/service-two",
        element: <ServiceTwo />,
      },
      {
        path: "/service-three",
        element: <ServiceThree />,
      },
      {
        path: "/service-four",
        element: <ServiceFour />,
      },
      {
        path: "/service-five",
        element: <ServiceFive />,
      },
      {
        path: "/service-six",
        element: <ServiceSix />,
      },
    ],
  },
]);
