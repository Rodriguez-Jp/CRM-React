const API_URL = import.meta.env.VITE_API_URL;

export async function obtenerClientes() {
  const query = await fetch(API_URL);
  const clientes = await query.json();
  return clientes;
}

export async function obtenerCliente(id) {
  const query = await fetch(`${API_URL}/${id}`);
  const cliente = await query.json();
  return cliente;
}

export async function agregarCliente(cliente) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: { "Content-Type": "application/json" },
    });

    const resultado = await response.json();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
