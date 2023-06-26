import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <h1 className="text-6xl font-bold">CRM - Clientes</h1>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;