import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import NuevoCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";
import Index, { loader as clientesLoader } from "./pages/Index";
import EditarCliente, {
  loader as editarClienteLoader,
} from "./pages/EditarCliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
      },
      {
        path: "/nuevo/cliente",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
      },
      {
        path: "/editar/cliente/:clienteId",
        element: <EditarCliente />,
        loader: editarClienteLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
