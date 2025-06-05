import React from "react";
import { motion } from "framer-motion";
import {  Landmark, Waves, Phone } from "lucide-react";

const tours = [
  {
    id: 1,
    titulo: "Tour a la Playa",
    descripcion:
      "Disfruta del sol y la arena en las mejores playas de la región.",
    imagen:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    
  },
  {
    id: 2,
    titulo: "Tour por la Ciudad",
    descripcion: "Explora monumentos históricos y arquitectura impresionante.",
    imagen:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    icono: <Landmark className="text-seance-800 w-6 h-6" />,
  },
  {
    id: 3,
    titulo: "Aventura en el Mar",
    descripcion: "Vive la emoción del mar con actividades acuáticas únicas.",
    imagen:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    icono: <Waves className="text-seance-800 w-6 h-6" />,
  },
];

export default function SeccionTours() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-seance-300 to-purple-900 mb-12 text-center">
        Vive la aventura con{" "}
        <span className=" decoration-seance-400">ExploraTours</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tours.map((tour, i) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white-30 border border-white-20 shadow-xl p-4 rounded-2xl transition-transform hover:scale-105"
          >
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={tour.imagen}
                alt={tour.titulo}
                className="w-full h-90 object-cover rounded-xl"
              />

              {/* Overlay animado */}
              <div className="absolute inset-0 bg-black-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-black-900 p-6 text-center backdrop-blur-sm bg-black-30">
                <h3 className="text-xl font-bold text-seance-900 mb-2">
                  {tour.titulo}
                </h3>
                <p className="text-sm">{tour.descripcion}</p>
                <a
                  href="/contacto"
                  className="mt-4 px-6 py-2 bg-seance-600 rounded-full text-white-50 font-semibold hover:bg-seance-700 inline-flex items-center gap-2"
                >
                  Reservar
                  <Phone className="w-5 h-5 animate-pulse" />
                </a>
              </div>
            </div>

            {/* Contenido bajo la imagen */}
            <div className="mt-4 flex items-center gap-3">
              <div>{tour.icono}</div>
              <h3 className="text-lg font-semibold text-seance-700">
                {tour.titulo}
              </h3>
            </div>
            <p className="mt-1 text-gray-700 text-sm line-clamp-2">
              {tour.descripcion}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Botón principal abajo */}
      <div className="text-center mt-14">
        <a
          href="/contacto"
          className="inline-flex items-center justify-center gap-3 bg-seance-600 hover:bg-seance-700 px-8 py-4 rounded-full text-white font-bold text-lg transition hover:scale-105"
        >
          <Phone className="w-6 h-6" />
          Contáctanos
        </a>
      </div>
    </section>
  );
}
