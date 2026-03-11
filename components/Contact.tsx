import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Mail, MessageSquare, Send, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

declare global {
  interface Window {
    calendar: any;
  }
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    nombre: '',   // Cambiado a español para coincidir con Make
    email: '',
    empresa: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado para evitar doble clic
  const calendarButtonRef = React.useRef<HTMLDivElement>(null);
  const isCalendarInitialized = React.useRef(false);

  React.useEffect(() => {
    if (isCalendarInitialized.current) return;

    const initCalendar = () => {
      if (window.calendar && window.calendar.schedulingButton && calendarButtonRef.current) {
        if (isCalendarInitialized.current) return;

        calendarButtonRef.current.innerHTML = '';
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1OjTENxdt61NaanjbceRcMLO2-fFOXuRTJTfS-V95m-lQahO0bhD2qJb1NrtY_pR-bQnyd3k4_?gv=true',
          color: '#0066FF',
          label: 'Agendar Llamada',
          target: calendarButtonRef.current,
        });
        isCalendarInitialized.current = true;
      } else {
        setTimeout(initCalendar, 100);
      }
    };

    initCalendar();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // AQUÍ ES DONDE OCURRE LA MAGIA
      // Sustituye el texto de abajo por tu enlace de Make
      await fetch('https://hook.eu1.make.com/fk8jl4iu2ai0k87588p9eyer69sl1oo3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      // Si el envío funciona, mostramos el mensaje de éxito
      setIsSubmitted(true);
      setFormState({ nombre: '', email: '', empresa: '', mensaje: '' }); // Limpiamos el formulario
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-pathos-bg min-h-screen text-slate-900 font-sans selection:bg-pathos-primary/30">
      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-pathos-primary/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pathos-primary/20 bg-pathos-primary/5 text-pathos-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Calendar size={14} />
              Empecemos tu transformación
            </div>
            <h1 className="font-display text-6xl lg:text-8xl font-bold mb-8 tracking-tight text-slate-900">
              Hablemos de tu <span className="bg-gradient-to-r from-pathos-primary via-pathos-dark to-indigo-600 bg-clip-text text-transparent">Proyecto</span>
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Cuéntanos tus retos y diseñaremos la arquitectura digital que tu negocio necesita para escalar.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/60 p-8 lg:p-12 shadow-2xl shadow-slate-200/50"
            >
              {!isSubmitted ? (
                <>
                  <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Nombre *</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Tu nombre completo"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-pathos-primary focus:ring-4 focus:ring-pathos-primary/10 transition-all outline-none"
                          value={formState.nombre}
                          onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Email *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="tu@email.com"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-pathos-primary focus:ring-4 focus:ring-pathos-primary/10 transition-all outline-none"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Empresa</label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Nombre de tu empresa"
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-pathos-primary focus:ring-4 focus:ring-pathos-primary/10 transition-all outline-none"
                        value={formState.empresa}
                        onChange={(e) => setFormState({ ...formState, empresa: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Mensaje</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Cuéntanos sobre tus necesidades de automatización y diseño..."
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-pathos-primary focus:ring-4 focus:ring-pathos-primary/10 transition-all outline-none resize-none"
                        value={formState.mensaje}
                        onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-pathos-dark text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-pathos-primary transition-all transform hover:-translate-y-1 shadow-xl shadow-pathos-dark/20 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Enviando...' : (
                        <>
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" focusable="false" />
                          Enviar Mensaje
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">¡Mensaje Recibido!</h2>
                  <p className="text-slate-600 text-lg mb-8">Gracias por confiar en Pathos. Nuestro equipo revisará tu propuesta y te contactaremos en menos de 24 horas.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-4 border border-slate-200 rounded-full font-bold text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </motion.div>

            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-xl shadow-slate-200/50"
              >
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-8">Contacto Directo</h3>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-pathos-primary/10 text-pathos-primary flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-slate-900 font-bold text-lg">hola@pathos-lab.com</p>
                      <p className="text-slate-600 text-sm font-medium">Respuesta en menos de 24h</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Chat / Llamada en Vivo</p>
                      <p className="text-slate-900 font-bold text-lg">Disponible en la web</p>
                      <p className="text-slate-600 text-sm font-medium">Sin esperas</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-pathos-dark rounded-[2.5rem] p-10 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-pathos-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold mb-4">¿Listo para empezar?</h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">Reserva una cita personalizada y descubre cómo Pathos puede transformar tu operativa.</p>
                  <div ref={calendarButtonRef} className="google-calendar-button-container">
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;