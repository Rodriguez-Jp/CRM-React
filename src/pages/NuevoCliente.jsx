import { Form, useActionData, redirect } from "react-router-dom";
import { agregarCliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request }) {
  const formData = await request.formData();

  const formObject = Object.fromEntries(formData);

  const errores = [];

  //Validacion general
  if (Object.values(formObject).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  //Validacion email
  const email = formData.get("email");
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) errores.push("Email no valido");

  if (Object.keys(errores).length) return errores;


  await agregarCliente(formObject);
  return redirect("/");
}

const NuevoCliente = () => {
  const errores = useActionData();

  return (
    <>
      <section>
        <h1 className="font-bold text-green-600 text-6xl">Nuevo Cliente</h1>
        <h2 className="font-normal text-2xl mt-3">Crea un nuevo cliente</h2>
      </section>
      <section>
        <div className="bg-white shadow-lg rounded-lg w-3/4 mx-auto p-10 mt-10">
          {errores?.length &&
            errores.map((error, i) => {
              return <Error error={error} key={i} />;
            })}
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
