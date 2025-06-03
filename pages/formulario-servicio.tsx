export default function FormularioServicio() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Solicita tu Tour</h1>
      <form className="flex flex-col gap-4 max-w-lg">
        <input 
          type="text" 
          placeholder="Nombre" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          type="email" 
          placeholder="Correo" 
          className="border p-2 rounded" 
          required 
        />
        <textarea 
          placeholder="Cuéntanos qué tour deseas" 
          className="border p-2 rounded resize-none" 
          rows={4}
          required
        />
        <button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
