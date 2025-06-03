import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/exploratours", label: "Facebook" },
  { icon: FaTwitter, url: "https://twitter.com/exploratours", label: "Twitter" },
  { icon: FaInstagram, url: "https://www.instagram.com/exploratours", label: "Instagram" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/exploratours", label: "LinkedIn" },
  { icon: FaWhatsapp, url: "https://wa.me/573001234567?text=Hola%20ExploraTours,%20quiero%20más%20información", label: "WhatsApp", hoverColor: "text-green-400" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aquí pondrías lógica para guardar el email, enviar a API, etc.
    if(email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <footer className="w-full bg-[#3a0141] text-[#ffffff] shadow-md flex flex-col items-center justify-between py-8">
      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Links legales */}
        <nav className="flex flex-col space-y-2 md:space-y-4">
          <h4 className="font-semibold text-lg mb-2">Legal</h4>
          <a href="/condiciones-de-uso" className="hover:text-white transition ease-in-out duration-300">Condiciones de uso</a>
          <a href="/politica-de-privacidad" className="hover:text-white transition ease-in-out duration-300">Política de privacidad</a>
        </nav>

        {/* Contacto */}
        <address className="not-italic space-y-1">
          <h4 className="font-semibold text-lg mb-2">Contacto</h4>
          <p>ExploraTours</p>
          <p>Email: <a href="mailto:contacto@exploratours.com" className="underline hover:text-white">contacto@exploratours.com</a></p>
          <p>Teléfono: <a href="tel:+573001234567" className="underline hover:text-white">+57 300 123 4567</a></p>
          <p>Dirección: Calle Falsa 123, Bogotá, Colombia</p>
        </address>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Suscríbete a nuestro newsletter</h4>
          {submitted ? (
            <p className="text-green-400">¡Gracias por suscribirte!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded px-3 py-2 text-gray-900"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 rounded py-2 font-semibold"
              >
                Suscribirse
              </button>
            </form>
          )}
        </div>

        {/* Redes sociales + Mapa */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Síguenos</h4>
          <div className="flex space-x-5 mb-6">
            {socialLinks.map(({ icon: Icon, url, label, hoverColor }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-gray-400 hover:${hoverColor ?? "text-pink-500"} transform hover:scale-110 transition ease-in-out duration-300 relative group`}
              >
                <Icon size={24} />
                <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-xs opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Mapa embed Google Maps */}
          <div className="rounded overflow-hidden shadow-lg">
            <iframe
              title="Ubicación ExploraTours"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789!2d-74.123456789!3d4.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f999999999999%3A0x123456789abcdef!2sBogotá%2C+Colombia!5e0!3m2!1ses!2sus!4v1619456789012!5m2!1ses!2sus"
              width="100%"
              height="150"
              loading="lazy"
              className="border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="w-full text-center text-[#ffffff] text-xs py-2 border-t border-[#ffffff] mt-6">
        &copy; {new Date().getFullYear()} ExploraTours. Todos los derechos reservados.
      </div>
    </footer>
  );
}
