import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllPartners from "../pages/AllPartners/AllPartners";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import MoreAboutUs from "../pages/MoreAboutUs/MoreAboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ServiceFive from "../pages/ServiceDetails/ServiceFive";
import ServiceFour from "../pages/ServiceDetails/ServiceFour";
import ServiceOne from "../pages/ServiceDetails/ServiceOne";
import ServiceSix from "../pages/ServiceDetails/ServiceSix";
import ServiceThree from "../pages/ServiceDetails/ServiceThree";
import ServiceTwo from "../pages/ServiceDetails/ServiceTwo";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // Pages
      {
        path: "/more-about-us",
        element: <MoreAboutUs />,
      },
      {
        path: "/all-partners",
        element: <AllPartners />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      //   Service details
      {
        path: "/licencing-service",
        element: <ServiceOne />,
      },
      {
        path: "/entity-formation-service",
        element: <ServiceTwo />,
      },
      {
        path: "/accounting-service",
        element: <ServiceThree />,
      },
      {
        path: "/tax-advisory-service",
        element: <ServiceFour />,
      },
      {
        path: "/audit-and-assurance-service",
        element: <ServiceFive />,
      },
      {
        path: "/ipo-capital-market-service",
        element: <ServiceSix />,
      },
    ],
  },
]);
