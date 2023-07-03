import { obtenerCliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import { useLoaderData, Form } from "react-router-dom";

export async function loader({ params }) {
  const { clienteId } = params;

  const cliente = await obtenerCliente(clienteId);

  return cliente;
}

const EditarCliente = () => {
  const cliente = useLoaderData();

  return (
    <>
      <section>
        <h1 className="font-bold text-green-600 text-6xl">Editar Cliente</h1>
        <h2 className="font-normal text-2xl mt-3">Edita tu cliente</h2>
      </section>
      <section>
        <div className="bg-white shadow-lg rounded-lg w-3/4 mx-auto p-10 mt-10">
          {/* {errores?.length &&
            errores.map((error, i) => {
              return <Error error={error} key={i} />;
            })} */}
          <Form method="post">
            <Formulario cliente={cliente} />
            <input
              type="submit"
              className="p-2 w-full bg-green-600 text-white font-semibold text-xl hover:bg-green-700 cursor-pointer transition-colors duration-150"
              value="Editar cliente"
            />
          </Form>
        </div>
      </section>
    </>
  );
};

export default EditarCliente;
