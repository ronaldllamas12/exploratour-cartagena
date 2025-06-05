import FormularioWhatsApp from '../components/FormularioWhatsApp'

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97]">
  Déjanos saber tus Inquietudes
</h1>

      <FormularioWhatsApp />
    </main>
  )
}
