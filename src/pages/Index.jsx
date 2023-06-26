import { useLoaderData, Link } from "react-router-dom";
import { clientes } from "../clientes";
import Cliente from "../components/Cliente";

export function loader() {
  return clientes;
}

const Index = () => {
  const datos = useLoaderData();

  return (
    <>
      <section>
        <h1 className="font-bold text-green-600 text-6xl">Clientes</h1>
        <h2 className="font-normal text-2xl mt-3">Administra tus clientes</h2>
        <div>
          {datos.length ? (
            datos.map((dato) => {
              return <Cliente dato={dato} />;
            })
          ) : (
            <div className="w-full text-center mt-20">
              <h1 className="mb-10 text-2xl">
                Aun no tienes clientes, comienza agregando uno
              </h1>
              <Link
                className="bg-green-600 text-white p-3 rounded-lg text-2xl hover:bg-green-700 transition-colors duration-150"
                to={"/nuevo/cliente"}
              >
                Agrega un Nuevo Cliente
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Index;
