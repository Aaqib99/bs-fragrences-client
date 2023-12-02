import { Outlet } from "react-router-dom";
// import AppHeader from "../../components/Layout/AppHeader"

const AuthRoot = () => {
  return (
    <>
      {/* <AppHeader /> */}
      <Outlet />
    </>
  );
};

export default AuthRoot;
