import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="md:flex min-h-screen">
        <aside className="md:w-1/4 md:h-screen bg-green-600">
          <h1 className="text-center font-semibold text-4xl mt-10 text-white">
            CRM - Clientes
          </h1>
          <nav className=" p-10 flex flex-col w-full text-white">
            <Link
              to={"/"}
              className={`${
                location.pathname === "/"
                  ? "underline underline-offset-4 decoration-4"
                  : ""
              } text-left text-2xl hover:opacity-75 cursor-pointer`}
            >
              Clientes
            </Link>
            <Link
              to={"/nuevo/cliente"}
              className={`${
                location.pathname === "/nuevo/cliente"
                  ? "underline underline-offset-4 decoration-4"
                  : ""
              } text-left text-2xl hover:opacity-75 cursor-pointer mt-5`}
            >
              Nuevo Cliente
            </Link>
          </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
