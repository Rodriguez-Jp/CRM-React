import React from "react";

const Cliente = ({ dato }) => {
  const { nombre, telefono, email, empresa, id } = dato;
  return (
    <div
      key={id}
      className="p-5 bg-white w-full border mt-5 flex justify-between"
    >
      <div className="w-1/2 text-xl text-green-700">
        <h1 className="font-bold">
          Nombre: <span className="font-normal text-black">{nombre}</span>
        </h1>
        <p className="mt-2 font-bold">
          Telefono: <span className="font-normal text-black">{telefono}</span>
        </p>
        <p className="mt-2 font-bold">
          Email: <span className="font-normal text-black">{email}</span>
        </p>
        <p className="mt-2 font-bold">
          Empresa: <span className="font-normal text-black">{empresa}</span>
        </p>
      </div>
      <div className="p-5 w-[40%] items-end flex flex-col">
        <button className="block p-1 w-[40%] bg-amber-500 text-center text-white font-bold">
          Ver
        </button>
        <button className="block p-1 w-[40%] mt-2 bg-indigo-500 text-center text-white font-bold">
          Editar
        </button>
        <button className="block p-1 w-[40%] mt-2 bg-red-500 text-center text-white font-bold">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Cliente;
