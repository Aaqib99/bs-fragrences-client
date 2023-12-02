import { createBrowserRouter } from "react-router-dom";

import AuthRoot from "../Auth/AuthRoot";
import Login from "../Auth/Login";
import App from "../App";
import SignUp from "../Auth/SignUp";
import ForgetPassword from "../Auth/ForgetPassword";
import EmailSent from "../Auth/EmailSent";
import ResetPassword from "../Auth/ResetPassword";
import ChangeBackground from "../Auth/ChangeBackground";
import PasswordUpdated from "../Auth/PasswordUpdated";
import Terms from "../Terms&Conditions/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/terms-and-conditions",
    element: <Terms />,
  },
  // {
  //   path: "/",
  //   element: <AppRoot />,
  //   children : [
  //     {
  //       index : true,
  //       element: <Home />,
  //   },
  //   {
  //     path: "mission",
  //     element: <Mission />,
  //   },
  //   ]
  //      },

  {
    path: "/auth",
    element: <AuthRoot />,
    children: [
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "email-sent",
        element: <EmailSent />,
      },
      {
        path: "password-successfully-updated",
        element: <PasswordUpdated />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
        // path: "thank-you",
        // element: <ThankYou />,
        // children: [
        //   { index: true, element: <NewPassword /> },
        //   { path: ":tx_ref", element: <NewPassword /> },
        // ],
      },

      {
        path: "change-background",
        element: <ChangeBackground />,
      },
    ],
  },
  //  {
  //   path : '/chat',
  //   element : <Root />,
  //   children : [
  //     {index : true, element : <ChatHome />}
  //   ]
  //  }
]);

export default router;
