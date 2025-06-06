'use client'

const whatsapp = '573001112233'

const cards = [
  {
    title: 'Escapadas encantadoras',
    description: 'Playas, islas e historia colonial',
    image: '/imagenes/cartagena2.png',
    link: `https://wa.me/${whatsapp}?text=¡Hola! Estoy interesado en los toures de escapadas.`,
  },
  {
    title: 'Experiencias auténticas',
    description: 'Música, danza y sabores locales',
    image: '/imagenes/Isla-del-Rosario-1024x508.jpg',
    link: `https://wa.me/${whatsapp}?text=¡Hola! Cuéntame más sobre experiencias culturales.`,
  },
  {
    title: 'Tesoros escondidos',
    description: 'Descubre los secretos de Cartagena',
    image: '/imagenes/botas-viejas.png',
    link: `https://wa.me/${whatsapp}?text=¡Hola! Quiero conocer los lugares escondidos de Cartagena.`,
  },
]

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Fondo parallax */}
      <div
        className="absolute inset-0 z-0 flex"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-1 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Contenido superpuesto */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
          Descubre momentos<br /> de viaje inolvidables
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
          Elige entre experiencias únicas en Cartagena
        </p>
        <a
          href={`https://wa.me/${whatsapp}?text=¡Hola! Quiero reservar un tour con ExploraTour`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-seance hover:bg-[#a125c6] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
        >
          Reserva ahora
        </a>

        {/* Tarjetas tipo botón */}
        <div className="mt-12 w-full max-w-6xl grid gap-6 md:grid-cols-3 px-4">
          {cards.map((card, i) => (
            <a
              key={i}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform transform duration-300"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="p-5 flex flex-col justify-between min-h-[120px]">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}