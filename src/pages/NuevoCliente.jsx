import { Form } from "react-router-dom";
import Formulario from "../components/Formulario";

export async function action({ request }) {
  const formData = await request.formData();

  const formObject = Object.fromEntries(formData);

  if (Object.values(formObject).includes(""));

  return null;
}

const NuevoCliente = () => {
  return (
    <>
      <section>
        <h1 className="font-bold text-green-600 text-6xl">Nuevo Cliente</h1>
        <h2 className="font-normal text-2xl mt-3">Crea un nuevo cliente</h2>
      </section>
      <section>
        <div className="bg-white shadow-lg rounded-lg w-3/4 mx-auto p-10 mt-10">
          <Form method="post">
            <Formulario />
            <input
              type="submit"
              className="p-2 w-full bg-green-600 text-white font-semibold text-xl hover:bg-green-700 cursor-pointer transition-colors duration-150"
              value="Agregar cliente"
            />
          </Form>
        </div>
      </section>
    </>
  );
};

export default NuevoCliente;
