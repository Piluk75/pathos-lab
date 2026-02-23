import React from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

const LegalNotice: React.FC = () => {
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
            Aviso <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">Legal</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed mb-8">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos del titular del sitio web:
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Datos Identificativos</h2>
            <ul className="text-slate-600 mb-8 space-y-2">
              <li><strong>Titular:</strong> Pathos-Lab</li>
              <li><strong>Sitio Web:</strong> <a href="https://www.pathos-lab.com" className="text-pathos-primary hover:underline">www.pathos-lab.com</a></li>
              <li><strong>Email de contacto:</strong> <a href="mailto:hola@pathos-lab.com" className="text-pathos-primary hover:underline">hola@pathos-lab.com</a></li>
            </ul>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Propiedad Intelectual e Industrial</h2>
            <p className="text-slate-600 mb-4">
              Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de <strong>Pathos Lab</strong> y, por tanto, queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de sus páginas web ni aun citando las fuentes, salvo consentimiento por escrito de <strong>Pathos Lab</strong>.
            </p>
            <p className="text-slate-600 mb-8">
              Todos los nombres comerciales, marcas o signos distintos de cualquier clase contenidos en las páginas web de la empresa son propiedad de sus dueños y están protegidos por ley.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Condiciones de Uso del Portal</h2>
            <p className="text-slate-600 mb-4">
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que <strong>Pathos Lab</strong> ofrece a través de su portal y con carácter enunciativo, pero no limitativo, a no emplearlos para:
            </p>
            <ul className="text-slate-600 mb-8 list-disc pl-6 space-y-2">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos y lógicos de <strong>Pathos Lab</strong>, de sus proveedores o de terceras personas.</li>
              <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Exclusión de Responsabilidad</h2>
            <p className="text-slate-600 mb-8">
              <strong>Pathos Lab</strong> no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Enlaces (Links)</h2>
            <p className="text-slate-600 mb-8">
              En el caso de que en <a href="https://www.pathos-lab.com" className="text-pathos-primary hover:underline">www.pathos-lab.com</a> se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, <strong>Pathos Lab</strong> no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">6. Modificaciones</h2>
            <p className="text-slate-600 mb-8">
              <strong>Pathos Lab</strong> se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">7. Legislación Aplicable y Jurisdicción</h2>
            <p className="text-slate-600 mb-8">
              La relación entre <strong>Pathos Lab</strong> y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad correspondiente al domicilio del titular o, en su defecto, los que por ley correspondan.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalNotice;
