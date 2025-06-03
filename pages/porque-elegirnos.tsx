 import { FaMapMarkedAlt, FaUsers, FaRegStar } from 'react-icons/fa'
 
 {/* ¿Por qué elegirnos? */}
      
export default function PorqueElegirnos() {
  return (       
      
      
      
      <section className="bg-[#E8DFF1] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#612F74]">¿Por qué elegir ExploraTour?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <FaMapMarkedAlt className="mx-auto text-[#DA70D6] text-4xl mb-4" />
              <h3 className="font-bold text-lg">Experiencias Locales</h3>
              <p>Guías locales que conocen cada rincón especial.</p>
            </div>
            <div>
              <FaUsers className="mx-auto text-[#DA70D6] text-4xl mb-4" />
              <h3 className="font-bold text-lg">Tours Personalizados</h3>
              <p>Elige tu propio ritmo, horario y lugares.</p>
            </div>
            <div>
              <FaRegStar className="mx-auto text-[#DA70D6] text-4xl mb-4" />
              <h3 className="font-bold text-lg">Calificaciones Excelentes</h3>
              <p>Clientes felices y recomendaciones reales.</p>
            </div>
          </div>
        </div>
      </section>
  )}