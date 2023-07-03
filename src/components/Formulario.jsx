const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-green-700 font-medium" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100"
          placeholder="Nombre del Cliente"
          name="nombre"
          value={cliente?.nombre || ""}
        />
      </div>
      <div className="mb-4">
        <label className="text-green-700 font-medium" htmlFor="empresa">
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100"
          placeholder="Empresa del Cliente"
          name="empresa"
          value={cliente?.empresa || ""}
        />
      </div>

      <div className="mb-4">
        <label className="text-green-700 font-medium" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-100"
          placeholder="Email del Cliente"
          name="email"
          value={cliente?.email || ""}
        />
      </div>

      <div className="mb-4">
        <label className="text-green-700 font-medium" htmlFor="telefono">
          Teléfono:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-100"
          placeholder="Teléfono del Cliente"
          name="telefono"
          value={cliente?.telefono || ""}
        />
      </div>

      <div className="mb-4">
        <label className="text-green-700 font-medium" htmlFor="notas">
          Notas:
        </label>
        <textarea
          as="textarea"
          id="notas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 h-40 align-self"
          placeholder="Notas del Cliente"
          name="notas"
        />
      </div>
    </>
  );
};

export default Formulario;
