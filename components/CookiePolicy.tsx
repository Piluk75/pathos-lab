import React from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-pathos-bg min-h-screen text-slate-900 font-sans">
      <Navbar />
      
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl lg:text-7xl font-bold mb-10 tracking-tight text-slate-900"
          >
            Política de <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">Cookies</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed mb-8">
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y garantía de los derechos digitales (LOPDGDD), <strong>Pathos Lab</strong> informa a los usuarios sobre el uso de cookies en su sitio web <a href="https://www.pathos-lab.com" className="text-pathos-primary hover:underline">www.pathos-lab.com</a>.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. ¿Qué son las cookies?</h2>
            <p className="text-slate-600 mb-8">
              Las cookies son pequeños archivos de texto que se descargan y almacenan en el terminal (ordenador/smartphone/tablet) del usuario al acceder a determinadas páginas web. Permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan, pueden utilizarse para reconocer al usuario.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Tipos de cookies utilizadas</h2>
            <p className="text-slate-600 mb-4">
              Este sitio web puede utilizar los siguientes tipos de cookies:
            </p>
            <ul className="text-slate-600 mb-8 list-disc pl-6 space-y-4">
              <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan (por ejemplo, controlar el tráfico, identificar la sesión, acceder a partes de acceso restringido, etc.).</li>
              <li><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario (idioma, tipo de navegador, etc.).</li>
              <li><strong>Cookies de análisis:</strong> Son aquellas que, tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
              <li><strong>Cookies publicitarias o de terceros:</strong> Son aquellas que, tratadas por nosotros o por terceros, permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Cuadro informativo de cookies</h2>
            <p className="text-slate-600 mb-6">
              A continuación, se detallan las cookies utilizadas en este sitio web:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-slate-200 text-left text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-3 font-bold">Nombre de la cookie</th>
                    <th className="border border-slate-200 p-3 font-bold">Finalidad</th>
                    <th className="border border-slate-200 p-3 font-bold">Duración</th>
                    <th className="border border-slate-200 p-3 font-bold">Titular</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3">_ga / _gid</td>
                    <td className="border border-slate-200 p-3">Análisis estadístico (Google Analytics)</td>
                    <td className="border border-slate-200 p-3">2 años / 24h</td>
                    <td className="border border-slate-200 p-3">Tercero</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3">cookielawinfo-checkbox</td>
                    <td className="border border-slate-200 p-3">Guardar consentimiento de cookies</td>
                    <td className="border border-slate-200 p-3">1 año</td>
                    <td className="border border-slate-200 p-3">Propio</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Cómo administrar las cookies en el navegador</h2>
            <p className="text-slate-600 mb-4">
              El usuario tiene la opción de permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su terminal:
            </p>
            <ul className="text-slate-600 mb-8 list-disc pl-6 space-y-2">
              <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
              <li><strong>Mozilla Firefox:</strong> Ajustes &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.</li>
              <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies y datos del sitio web.</li>
              <li><strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.</li>
            </ul>
            <p className="text-slate-600 mb-8">
              Si se bloquea el uso de cookies en su navegador es posible que algunos servicios o funcionalidades de la página web no estén disponibles.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Consentimiento</h2>
            <p className="text-slate-600 mb-8">
              Al navegar y continuar en nuestro sitio web, el usuario consiente el uso de las cookies anteriormente enunciadas, por los plazos señalados y en las condiciones contenidas en la presente Política de Cookies.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">6. Actualizaciones y cambios</h2>
            <p className="text-slate-600 mb-4">
              <strong>Pathos Lab</strong> puede modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
            </p>
            <p className="text-slate-600 mb-8">
              Para cualquier duda o consulta sobre esta política, puede contactar con nosotros en: <strong>hola@pathos-lab.com</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
