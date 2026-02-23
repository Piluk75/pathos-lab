import React from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
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
            Política de <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">Privacidad</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed mb-8">
              La presente Política de Privacidad establece los términos en que <strong>Pathos Lab</strong> usa y protege la información que es proporcionada por sus usuarios al momento de utilizar el sitio web <a href="https://www.pathos-lab.com" className="text-pathos-primary hover:underline">www.pathos-lab.com</a>. Esta empresa está comprometida con la seguridad de los datos de sus usuarios.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Responsable del Tratamiento de los Datos</h2>
            <ul className="text-slate-600 mb-8 space-y-2">
              <li><strong>Titular:</strong> Pathos-Lab</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Información que es recogida</h2>
            <p className="text-slate-600 mb-8">
              Nuestro sitio web podrá recoger información personal, por ejemplo: nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo, cuando sea necesario, podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Finalidad del tratamiento de los datos</h2>
            <p className="text-slate-600 mb-4">
              <strong>Pathos Lab</strong> utiliza la información con el fin de proporcionar el mejor servicio posible, particularmente para:
            </p>
            <ul className="text-slate-600 mb-8 list-disc pl-6 space-y-2">
              <li>Mantener un registro de usuarios y pedidos en caso de que aplique.</li>
              <li>Responder a consultas, dudas o solicitudes realizadas a través de los formularios de contacto.</li>
              <li>Enviar correos electrónicos periódicos con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio (siempre que usted haya dado su consentimiento previo). Estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Legitimación para el tratamiento</h2>
            <p className="text-slate-600 mb-4">
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul className="text-slate-600 mb-8 list-disc pl-6 space-y-2">
              <li><strong>El consentimiento:</strong> Al marcar la casilla de aceptación en nuestros formularios, usted otorga su consentimiento para que tratemos sus datos según las finalidades descritas.</li>
              <li><strong>Ejecución de un contrato:</strong> En caso de adquisición de servicios o productos a través de la web.</li>
              <li><strong>Interés legítimo:</strong> Para la navegación técnica por el sitio web.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Conservación de los datos</h2>
            <p className="text-slate-600 mb-8">
              Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">6. Destinatarios de los datos</h2>
            <p className="text-slate-600 mb-8">
              Sus datos no serán cedidos a terceros, salvo obligación legal o que sea estrictamente necesario para la prestación del servicio (por ejemplo, empresas de logística para envíos o procesadores de pago).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">7. Derechos del Usuario</h2>
            <p className="text-slate-600 mb-4">
              Usted tiene derecho en cualquier momento a:
            </p>
            <ul className="text-slate-600 mb-8 list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> Conocer qué datos estamos tratando.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
              <li><strong>Supresión (Derecho al olvido):</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong>Limitación del tratamiento:</strong> Solicitar que suspendamos temporalmente el tratamiento de sus datos.</li>
              <li><strong>Oposición:</strong> Oponerse a que tratemos sus datos para fines específicos (como marketing).</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado y fácil de leer.</li>
            </ul>
            <p className="text-slate-600 mb-8">
              Para ejercer estos derechos, puede enviar un correo electrónico a <strong>hola@pathos-lab.com</strong>, adjuntando una copia de su DNI o documento equivalente para verificar su identidad.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">8. Seguridad de la Información</h2>
            <p className="text-slate-600 mb-8">
              <strong>Pathos Lab</strong> está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos de que no exista ningún acceso no autorizado.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">9. Enlaces a Terceros</h2>
            <p className="text-slate-600 mb-8">
              Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">10. Control de su información personal</h2>
            <p className="text-slate-600 mb-4">
              En cualquier momento usted puede registrar la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico.
            </p>
            <p className="text-slate-600 mb-8">
              Esta empresa no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con una orden judicial.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
