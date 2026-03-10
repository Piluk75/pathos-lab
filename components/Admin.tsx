import React, { useState, useEffect, useRef } from 'react';
import {
    Save, ChevronLeft, Layout, Type, Image as ImageIcon, Plus, Trash2,
    ArrowUp, ArrowDown, ExternalLink, Briefcase, Boxes, Rocket, Sparkles, Upload,
    Lock, ShieldAlert, LogOut, Key, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Project {
    id: string;
    title: string;
    category: string;
    featured_image: string;
    challenge: string;
    solution: string;
    results: string;
    url: string;
    order: number;
}

const Admin: React.FC = () => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('pathos_admin_token'));
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const [activeTab, setActiveTab] = useState<'content' | 'portfolio' | 'services' | 'benefits' | 'strategy' | 'process_cta' | 'faq'>('content');
    const [content, setContent] = useState<any>(null);
    const [portfolio, setPortfolio] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadingFor, setUploadingFor] = useState<{ type: 'portfolio' | 'general' | 'problem', id?: string, path?: string, index?: number } | null>(null);

    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const { data: contentData, error: contentError } = await supabase
                    .from('site_content')
                    .select('data')
                    .eq('id', 1)
                    .single();

                if (contentError && contentError.code !== 'PGRST116') throw contentError;

                const { data: portfolioData, error: portfolioError } = await supabase
                    .from('portfolio')
                    .select('*')
                    .order('order', { ascending: true });

                if (portfolioError) throw portfolioError;

                if (contentData) {
                    setContent(contentData.data);
                }
                setPortfolio(portfolioData || []);
                setLoading(false);
            } catch (err) {
                console.error('Error loading data from Supabase:', err);
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setLoginError('');

        const ADMIN_PASSWORD = 'admin';
        if (password === ADMIN_PASSWORD) {
            localStorage.setItem('pathos_admin_token', 'logged_in');
            setToken('logged_in');
        } else {
            setLoginError('Contraseña incorrecta');
        }
        setSaving(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('pathos_admin_token');
        setToken(null);
        setContent(null);
        setPortfolio([]);
    };

    const handleSaveGeneral = async () => {
        setSaving(true);
        try {
            const { error } = await supabase
                .from('site_content')
                .upsert({ id: 1, data: content });

            if (error) throw error;
            alert('¡Contenido actualizado!');
        } catch (err) {
            console.error(err);
            alert('Error al guardar.');
        } finally {
            setSaving(false);
        }
    };

    const handleSavePortfolio = async () => {
        setSaving(true);
        try {
            const { error: deleteError } = await supabase
                .from('portfolio')
                .delete()
                .neq('id', '00000000-0000-0000-0000-000000000000');

            if (deleteError) throw deleteError;

            const { error: insertError } = await supabase
                .from('portfolio')
                .insert(portfolio.map(p => ({
                    id: p.id,
                    title: p.title,
                    category: p.category,
                    featured_image: p.featured_image,
                    challenge: p.challenge,
                    solution: p.solution,
                    results: p.results,
                    url: p.url,
                    order: p.order
                })));

            if (insertError) throw insertError;

            alert('¡Portfolio actualizado!');
        } catch (err) {
            console.error(err);
            alert('Error al guardar el portfolio.');
        } finally {
            setSaving(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !uploadingFor) return;

        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `uploads/${fileName}`;

        try {
            const { error } = await supabase.storage
                .from('site_images')
                .upload(filePath, file);

            if (error) throw error;

            const { data: { publicUrl } } = supabase.storage
                .from('site_images')
                .getPublicUrl(filePath);

            if (publicUrl) {
                if (uploadingFor.type === 'portfolio' && uploadingFor.id) {
                    updateProjectField(uploadingFor.id, 'featured_image', publicUrl);
                } else if (uploadingFor.type === 'general' && uploadingFor.path) {
                    const keys = uploadingFor.path.split('.');
                    const newContent = { ...content };
                    let temp = newContent;
                    for (let i = 0; i < keys.length - 1; i++) {
                        temp = temp[keys[i]];
                    }
                    temp[keys[keys.length - 1]] = publicUrl;
                    setContent(newContent);
                } else if (uploadingFor.type === 'problem' && uploadingFor.index !== undefined) {
                    const newContent = { ...content };
                    newContent.problem.list[uploadingFor.index].image = publicUrl;
                    setContent(newContent);
                }
            }
        } catch (err) {
            console.error(err);
            alert('Error al subir la imagen');
        } finally {
            setUploadingFor(null);
        }
    };

    const addProject = () => {
        const newProject: Project = {
            id: `project-${Date.now()}`,
            title: 'Nuevo Proyecto',
            category: 'DISEÑO WEB',
            featured_image: '',
            challenge: '',
            solution: '',
            results: '',
            url: '',
            order: portfolio.length + 1
        };
        setPortfolio([...portfolio, newProject]);
    };

    const deleteProject = (id: string) => {
        if (confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
            const updated = portfolio.filter(p => p.id !== id);
            setPortfolio(updated);
        }
    };

    const updateProjectField = (id: string, field: keyof Project, value: any) => {
        const updated = portfolio.map(p => p.id === id ? { ...p, [field]: value } : p);
        setPortfolio(updated);
    };

    const moveProject = (index: number, direction: 'up' | 'down') => {
        const updated = [...portfolio];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < updated.length) {
            [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
            updated.forEach((p, i) => p.order = i + 1);
            setPortfolio(updated);
        }
    };

    const addFAQ = () => {
        const newContent = { ...content };
        if (!newContent.faq) newContent.faq = { list: [] };
        newContent.faq.list.push({ question: 'Nueva Pregunta', answer: 'Nueva Respuesta' });
        setContent(newContent);
    };

    const deleteFAQ = (index: number) => {
        if (confirm('¿Eliminar esta pregunta?')) {
            const newContent = { ...content };
            newContent.faq.list.splice(index, 1);
            setContent(newContent);
        }
    };

    if (!token) {
        return (
            <div className="min-h-screen bg-[#020617] text-slate-200 flex items-center justify-center p-6 relative overflow-hidden font-sans">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-pathos-cyan/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-pathos-primary/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in duration-500">
                    <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pathos-cyan to-transparent opacity-50"></div>

                        <div className="text-center mb-10">
                            <div className="w-20 h-20 rounded-3xl bg-pathos-cyan/10 border border-pathos-cyan/20 flex items-center justify-center mx-auto mb-6 ring-8 ring-pathos-cyan/5">
                                <Lock className="text-pathos-cyan" size={32} />
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2 font-display tracking-tight">Acceso Privado</h1>
                            <p className="text-slate-500 font-medium">Pathos Lab Intelligence CMS</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Contraseña de Administrador</label>
                                <div className="relative">
                                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                                    <input
                                        type="password"
                                        autoFocus
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-950/60 border border-white/5 pl-12 pr-4 py-4 rounded-2xl focus:border-pathos-cyan outline-none transition-all placeholder-slate-700 font-medium"
                                        placeholder="········"
                                    />
                                </div>
                            </div>

                            {loginError && (
                                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl text-sm border border-red-400/20 animate-shake">
                                    <ShieldAlert size={16} />
                                    {loginError}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={saving}
                                className="w-full bg-pathos-cyan text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-pathos-primary transition-all shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                            >
                                {saving ? 'Verificando...' : 'Desbloquear Panel'}
                            </button>
                        </form>
                    </div>
                    <p className="text-center text-slate-700 text-xs mt-8">© 2026 Pathos Lab. Todos los derechos reservados.</p>
                </div>
            </div>
        );
    }

    if (loading || !content) return (
        <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center p-8">
            <div className="w-16 h-16 border-4 border-pathos-cyan border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="font-display text-xl animate-pulse">Sincronizando con Pathos Lab...</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-pathos-cyan/30">
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleImageUpload} accept="image/*" />

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-pathos-cyan/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-pathos-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto p-6 lg:p-12">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-16">
                    <div>
                        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-pathos-cyan transition-colors mb-3 text-sm font-medium">
                            <ChevronLeft size={16} /> Ver sitio web
                        </Link>
                        <h1 className="text-5xl font-bold text-white tracking-tight flex items-center gap-4 font-display">
                            Pathos <span className="bg-gradient-to-r from-pathos-cyan to-blue-500 bg-clip-text text-transparent">Intelligence</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap bg-slate-900/40 p-1.5 rounded-[1.5rem] border border-white/5 backdrop-blur-xl items-center">
                        {[
                            { id: 'content', label: 'Hero', icon: Sparkles },
                            { id: 'strategy', label: 'Estrategia', icon: ShieldAlert },
                            { id: 'services', label: 'Servicios', icon: Layout },
                            { id: 'benefits', label: 'Beneficios', icon: Rocket },
                            { id: 'process_cta', label: 'Proceso', icon: Boxes },
                            { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
                            { id: 'faq', label: 'FAQ', icon: HelpCircle }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all font-bold text-sm ${activeTab === tab.id ? 'bg-white text-slate-950 shadow-2xl' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <tab.icon size={18} /> {tab.label}
                            </button>
                        ))}
                        <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>
                        <button
                            onClick={handleLogout}
                            className="p-3 text-slate-500 hover:text-red-400 transition-colors rounded-xl"
                            title="Cerrar Sesión"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>

                    <button
                        onClick={activeTab === 'portfolio' ? handleSavePortfolio : handleSaveGeneral}
                        disabled={saving}
                        className="bg-pathos-cyan text-white px-10 py-4 rounded-[1.5rem] font-bold flex items-center gap-3 hover:bg-pathos-primary transition-all shadow-[0_0_30px_rgba(6,182,212,0.2)] disabled:opacity-50 hover:scale-105 active:scale-95"
                    >
                        <Save size={20} /> {saving ? 'Guardando...' : 'Publicar Cambios'}
                    </button>
                </div>

                {activeTab === 'content' && (
                    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <section className="bg-slate-900/30 backdrop-blur-3xl border border-white/5 p-12 rounded-[3.5rem] shadow-2xl">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-3xl bg-pathos-cyan/10 flex items-center justify-center border border-pathos-cyan/20 ring-8 ring-pathos-cyan/5">
                                    <Sparkles className="text-pathos-cyan" size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Sección Hero</h2>
                                    <p className="text-slate-500 font-medium">El primer impacto de tu web</p>
                                </div>
                            </div>

                            <div className="grid gap-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Parte 1 (Texto)</label>
                                        <input
                                            type="text"
                                            value={content.hero.title_part1}
                                            onChange={(e) => setContent({ ...content, hero: { ...content.hero, title_part1: e.target.value } })}
                                            className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl focus:border-pathos-cyan outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-pathos-cyan ml-1">Parte 2 (IA / Resaltado)</label>
                                        <input
                                            type="text"
                                            value={content.hero.title_part2}
                                            onChange={(e) => setContent({ ...content, hero: { ...content.hero, title_part2: e.target.value } })}
                                            className="w-full bg-slate-950/40 border border-pathos-cyan/30 p-5 rounded-2xl focus:border-pathos-cyan outline-none transition-all shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Parte 3 (Texto)</label>
                                        <input
                                            type="text"
                                            value={content.hero.title_part3}
                                            onChange={(e) => setContent({ ...content, hero: { ...content.hero, title_part3: e.target.value } })}
                                            className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl focus:border-pathos-cyan outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Descripción de la Misión</label>
                                    <textarea
                                        rows={4}
                                        value={content.hero.description}
                                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, description: e.target.value } })}
                                        className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-3xl focus:border-pathos-cyan outline-none transition-all leading-relaxed text-slate-400"
                                    ></textarea>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'services' && (
                    <div className="max-w-[1200px] mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="bg-slate-900/30 backdrop-blur-3xl border border-white/5 p-12 rounded-[3.5rem] shadow-2xl">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <Layout className="text-blue-500" size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">Cabecera de Servicios</h2>
                            </div>
                            <div className="grid gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <input className="bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none focus:border-blue-500 w-full" value={content.services.header.title_main} onChange={(e) => setContent({ ...content, services: { ...content.services, header: { ...content.services.header, title_main: e.target.value } } })} />
                                    <input className="bg-slate-950/40 border border-blue-500/30 p-5 rounded-2xl outline-none focus:border-blue-500 w-full text-blue-400" value={content.services.header.title_accent1} onChange={(e) => setContent({ ...content, services: { ...content.services, header: { ...content.services.header, title_accent1: e.target.value } } })} />
                                    <input className="bg-slate-950/40 border border-blue-500/30 p-5 rounded-2xl outline-none focus:border-blue-500 w-full text-blue-400" value={content.services.header.title_accent2} onChange={(e) => setContent({ ...content, services: { ...content.services, header: { ...content.services.header, title_accent2: e.target.value } } })} />
                                </div>
                                <textarea className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-3xl outline-none focus:border-blue-500 h-32" value={content.services.header.description} onChange={(e) => setContent({ ...content, services: { ...content.services, header: { ...content.services.header, description: e.target.value } } })} />
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {['escaparate', 'motor'].map((sec: any) => (
                                <div key={sec} className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-10 rounded-[3.5rem] shadow-xl">
                                    <h3 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-tighter italic">Solución {sec === 'escaparate' ? '1' : '2'}</h3>
                                    <div className="space-y-6">
                                        <input className="w-full bg-slate-950/60 p-4 rounded-xl border border-white/5 font-bold text-white" value={content.services[sec].title} onChange={(e) => setContent({ ...content, services: { ...content.services, [sec]: { ...content.services[sec], title: e.target.value } } })} />
                                        <textarea className="w-full bg-slate-950/40 p-4 rounded-xl border border-white/5 text-slate-400 italic text-sm" value={content.services[sec].quote} onChange={(e) => setContent({ ...content, services: { ...content.services, [sec]: { ...content.services[sec], quote: e.target.value } } })} />

                                        <div className="space-y-4">
                                            {content.services[sec].features.map((f: any, i: number) => (
                                                <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                                                    <input className="w-full bg-transparent font-bold text-sm text-blue-300 outline-none" value={f.title} onChange={(e) => {
                                                        const newF = [...content.services[sec].features];
                                                        newF[i].title = e.target.value;
                                                        setContent({ ...content, services: { ...content.services, [sec]: { ...content.services[sec], features: newF } } });
                                                    }} />
                                                    <textarea className="w-full bg-transparent text-xs text-slate-500 outline-none" value={f.desc} onChange={(e) => {
                                                        const newF = [...content.services[sec].features];
                                                        newF[i].desc = e.target.value;
                                                        setContent({ ...content, services: { ...content.services, [sec]: { ...content.services[sec], features: newF } } });
                                                    }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'benefits' && (
                    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="bg-slate-900/30 backdrop-blur-3xl border border-white/5 p-12 rounded-[3.5rem] shadow-2xl">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-3xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                    <Rocket className="text-green-500" size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">Beneficios Directos</h2>
                            </div>
                            <div className="grid gap-10">
                                {content.benefits.list.map((b: any, i: number) => (
                                    <div key={i} className="relative group p-8 bg-slate-950/40 rounded-[2rem] border border-white/5 hover:border-pathos-cyan/30 transition-all">
                                        <div className="grid gap-4">
                                            <input className="text-xl font-bold text-white bg-transparent outline-none border-b border-white/10 pb-2" value={b.title} onChange={(e) => {
                                                const newList = [...content.benefits.list];
                                                newList[i].title = e.target.value;
                                                setContent({ ...content, benefits: { ...content.benefits, list: newList } });
                                            }} />
                                            <textarea className="bg-transparent text-slate-400 outline-none leading-relaxed" value={b.desc} onChange={(e) => {
                                                const newList = [...content.benefits.list];
                                                newList[i].desc = e.target.value;
                                                setContent({ ...content, benefits: { ...content.benefits, list: newList } });
                                            }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'strategy' && (
                    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="bg-slate-900/30 backdrop-blur-3xl border border-white/5 p-12 rounded-[3.5rem] shadow-2xl">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-3xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                                    <ShieldAlert className="text-amber-500" size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">La Trampa Digital</h2>
                            </div>
                            <div className="grid gap-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Título Parte 1</label>
                                        <input className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none focus:border-pathos-cyan" value={content.digital_trap.title_part1} onChange={(e) => setContent({ ...content, digital_trap: { ...content.digital_trap, title_part1: e.target.value } })} />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Título Resaltado</label>
                                        <input className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none text-pathos-cyan focus:border-pathos-cyan" value={content.digital_trap.title_accent} onChange={(e) => setContent({ ...content, digital_trap: { ...content.digital_trap, title_accent: e.target.value } })} />
                                    </div>
                                </div>

                                <div className="space-y-4 p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Texto Principal (con resaltados)</label>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <input className="bg-transparent border-b border-white/10 p-2 outline-none flex-1 min-w-[200px]" value={content.digital_trap.main_text_part1} onChange={(e) => setContent({ ...content, digital_trap: { ...content.digital_trap, main_text_part1: e.target.value } })} />
                                        <input className="bg-white/10 rounded-lg p-2 outline-none font-bold text-white focus:bg-white/20" value={content.digital_trap.main_text_highlight1} onChange={(e) => setContent({ ...content, digital_trap: { ...content.digital_trap, main_text_highlight1: e.target.value } })} title="Resaltado 1" />
                                        <input className="bg-transparent border-b border-white/10 p-2 outline-none flex-1 min-w-[100px]" value={content.digital_trap.main_text_part2} onChange={(e) => setContent({ ...content, digital_trap: { ...content.digital_trap, main_text_part2: e.target.value } })} />
                                        <input className="bg-white/10 rounded-lg p-2 outline-none font-bold text-white focus:bg-white/20" value={content.digital_trap.main_text_highlight2} onChange={(e) => setContent({ ...content, digital_trap: { ...content.digital_trap, main_text_highlight2: e.target.value } })} title="Resaltado 2" />
                                        <input className="bg-transparent border-b border-white/10 p-2 outline-none w-8" value={content.digital_trap.main_text_part3} onChange={(e) => setContent({ ...content, digital_trap: { ...content.digital_trap, main_text_part3: e.target.value } })} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Frase Final</label>
                                    <textarea className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-3xl outline-none focus:border-pathos-cyan" rows={2} value={content.digital_trap.bottom_text} onChange={(e) => setContent({ ...content, digital_trap: { ...content.digital_trap, bottom_text: e.target.value } })} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 backdrop-blur-3xl border border-white/5 p-12 rounded-[3.5rem] shadow-2xl">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <Type className="text-blue-500" size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">El Problema</h2>
                            </div>

                            <div className="grid gap-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Badge</label>
                                        <input className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none focus:border-pathos-cyan" value={content.problem.badge} onChange={(e) => setContent({ ...content, problem: { ...content.problem, badge: e.target.value } })} />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Descripción</label>
                                        <input className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none focus:border-pathos-cyan" value={content.problem.description} onChange={(e) => setContent({ ...content, problem: { ...content.problem, description: e.target.value } })} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-5 gap-4 items-end">
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-[8px] font-black uppercase text-slate-600">Título Parte 1</label>
                                        <input className="w-full bg-slate-950/40 border border-white/5 p-3 rounded-xl outline-none text-xs focus:border-white/20" value={content.problem.title_main} onChange={(e) => setContent({ ...content, problem: { ...content.problem, title_main: e.target.value } })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[8px] font-black uppercase text-pathos-cyan">Accent 1</label>
                                        <input className="w-full bg-slate-950/40 border border-pathos-cyan/30 p-3 rounded-xl outline-none text-xs text-pathos-cyan focus:border-pathos-cyan" value={content.problem.title_accent1} onChange={(e) => setContent({ ...content, problem: { ...content.problem, title_accent1: e.target.value } })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[8px] font-black uppercase text-slate-600">Mid</label>
                                        <input className="w-full bg-slate-950/40 border border-white/5 p-3 rounded-xl outline-none text-xs focus:border-white/20" value={content.problem.title_mid} onChange={(e) => setContent({ ...content, problem: { ...content.problem, title_mid: e.target.value } })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[8px] font-black uppercase text-pathos-cyan">Accent 2</label>
                                        <input className="w-full bg-slate-950/40 border border-pathos-cyan/30 p-3 rounded-xl outline-none text-xs text-pathos-cyan focus:border-pathos-cyan" value={content.problem.title_accent2} onChange={(e) => setContent({ ...content, problem: { ...content.problem, title_accent2: e.target.value } })} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    {content.problem.list.map((item: any, i: number) => (
                                        <div key={i} className="bg-slate-950/40 p-8 rounded-[2.5rem] border border-white/5 space-y-6">
                                            <input className="w-full bg-transparent border-b border-white/10 text-xl font-bold text-white outline-none focus:border-pathos-cyan" value={item.title} onChange={(e) => {
                                                const newList = [...content.problem.list];
                                                newList[i].title = e.target.value;
                                                setContent({ ...content, problem: { ...content.problem, list: newList } });
                                            }} />
                                            <textarea className="w-full bg-transparent text-slate-400 outline-none text-sm leading-relaxed" rows={3} value={item.desc} onChange={(e) => {
                                                const newList = [...content.problem.list];
                                                newList[i].desc = e.target.value;
                                                setContent({ ...content, problem: { ...content.problem, list: newList } });
                                            }} />

                                            <div
                                                onClick={() => {
                                                    setUploadingFor({ type: 'problem', index: i });
                                                    fileInputRef.current?.click();
                                                }}
                                                className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 group/pimg"
                                            >
                                                <img src={item.image} className="w-full h-full object-cover opacity-60 group-hover/pimg:scale-110 transition-transform" />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/pimg:opacity-100 transition-opacity bg-slate-950/40">
                                                    <Upload size={20} className="text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'process_cta' && (
                    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="bg-slate-900/30 backdrop-blur-3xl border border-white/5 p-12 rounded-[3.5rem] shadow-2xl">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                    <Boxes className="text-indigo-500" size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">El Proceso (3 Pasos)</h2>
                            </div>
                            <div className="grid gap-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <input className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none" value={content.process.header.title_main} onChange={(e) => setContent({ ...content, process: { ...content.process, header: { ...content.process.header, title_main: e.target.value } } })} />
                                    <input className="w-full bg-slate-950/40 border border-pathos-cyan/30 p-5 rounded-2xl outline-none text-pathos-cyan" value={content.process.header.title_accent} onChange={(e) => setContent({ ...content, process: { ...content.process, header: { ...content.process.header, title_accent: e.target.value } } })} />
                                </div>
                                <textarea className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-3xl outline-none" rows={2} value={content.process.header.description} onChange={(e) => setContent({ ...content, process: { ...content.process, header: { ...content.process.header, description: e.target.value } } })} />

                                <div className="grid md:grid-cols-3 gap-6">
                                    {content.process.list.map((step: any, i: number) => (
                                        <div key={i} className="bg-slate-950/40 p-6 rounded-[2rem] border border-white/5 space-y-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-pathos-cyan font-black italic">#{i + 1}</span>
                                                <input className="w-full bg-transparent border-b border-white/10 text-white font-bold outline-none" value={step.title} onChange={(e) => {
                                                    const newList = [...content.process.list];
                                                    newList[i].title = e.target.value;
                                                    setContent({ ...content, process: { ...content.process, list: newList } });
                                                }} />
                                            </div>
                                            <textarea className="w-full bg-transparent text-slate-400 text-xs leading-relaxed outline-none" rows={4} value={step.description} onChange={(e) => {
                                                const newList = [...content.process.list];
                                                newList[i].description = e.target.value;
                                                setContent({ ...content, process: { ...content.process, list: newList } });
                                            }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-pathos-cyan/10 border border-pathos-cyan/20 p-12 rounded-[3.5rem] shadow-2xl">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-3xl bg-pathos-cyan/20 flex items-center justify-center border border-pathos-cyan/30">
                                    <Rocket className="text-pathos-cyan" size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">Llamada a la Acción (CTA)</h2>
                            </div>
                            <div className="grid gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Título</label>
                                    <input className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none text-xl font-bold" value={content.cta.title} onChange={(e) => setContent({ ...content, cta: { ...content.cta, title: e.target.value } })} />
                                </div>

                                <div className="space-y-4 p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Descripción con Resaltado</label>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <input className="bg-transparent border-b border-white/10 p-2 outline-none flex-1 min-w-[200px]" value={content.cta.description_part1} onChange={(e) => setContent({ ...content, cta: { ...content.cta, description_part1: e.target.value } })} />
                                        <input className="bg-pathos-cyan text-white rounded-lg p-2 outline-none font-bold italic underline" value={content.cta.description_highlight} onChange={(e) => setContent({ ...content, cta: { ...content.cta, description_highlight: e.target.value } })} title="Resaltado" />
                                        <input className="bg-transparent border-b border-white/10 p-2 outline-none flex-1 min-w-[100px]" value={content.cta.description_part2} onChange={(e) => setContent({ ...content, cta: { ...content.cta, description_part2: e.target.value } })} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Texto del Botón</label>
                                        <input className="w-full bg-white text-pathos-cyan font-black p-5 rounded-2xl outline-none" value={content.cta.button_text} onChange={(e) => setContent({ ...content, cta: { ...content.cta, button_text: e.target.value } })} />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Texto Inferior</label>
                                        <input className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none text-slate-400" value={content.cta.bottom_text} onChange={(e) => setContent({ ...content, cta: { ...content.cta, bottom_text: e.target.value } })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'portfolio' && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-4xl font-bold text-white tracking-tight font-display">Casos de Éxito</h2>
                                <p className="text-slate-500 font-medium">Gestiona cómo se muestran tus proyectos estrella</p>
                            </div>
                            <button
                                onClick={addProject}
                                className="flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-[1.5rem] font-bold hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl"
                            >
                                <Plus size={24} /> Nuevo Caso
                            </button>
                        </div>

                        <div className="grid gap-16">
                            {portfolio.map((project, index) => (
                                <div key={project.id} className="relative group/card bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-12 rounded-[4rem] shadow-2xl hover:border-pathos-cyan/20 transition-all">
                                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
                                        <button onClick={() => moveProject(index, 'up')} disabled={index === 0} className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-pathos-cyan text-white transition-all disabled:opacity-10"><ArrowUp size={20} /></button>
                                        <div className="text-center font-black text-2xl text-slate-800">{index + 1}</div>
                                        <button onClick={() => moveProject(index, 'down')} disabled={index === portfolio.length - 1} className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-pathos-cyan text-white transition-all disabled:opacity-10"><ArrowDown size={20} /></button>
                                    </div>

                                    <div className="flex flex-col xl:flex-row gap-16">
                                        <div className="flex-1 space-y-10">
                                            <div className="flex justify-between gap-4">
                                                <div className="flex-1">
                                                    <input className="bg-transparent border-b border-white/10 text-3xl font-bold text-white mb-4 w-full focus:border-pathos-cyan outline-none tracking-tight" value={project.title} placeholder="Nombre del proyecto..." onChange={(e) => updateProjectField(project.id, 'title', e.target.value)} />
                                                    <div className="flex items-center gap-3 text-pathos-cyan font-black text-[10px] tracking-[0.2em] uppercase">
                                                        <Boxes size={16} />
                                                        <input className="bg-transparent outline-none w-full" value={project.category} onChange={(e) => updateProjectField(project.id, 'category', e.target.value.toUpperCase())} />
                                                    </div>
                                                </div>
                                                <button onClick={() => deleteProject(project.id)} className="w-12 h-12 flex items-center justify-center text-slate-600 hover:text-red-500 transition-colors bg-white/5 rounded-2xl hover:bg-red-500/10"><Trash2 size={24} /></button>
                                            </div>

                                            <div className="grid gap-8">
                                                {[
                                                    { field: 'challenge', label: 'El Reto', color: 'text-pathos-cyan' },
                                                    { field: 'solution', label: 'La Solución', color: 'text-blue-400' },
                                                    { field: 'results', label: 'Los Resultados', color: 'text-green-400' }
                                                ].map((box) => (
                                                    <div key={box.field} className="space-y-3">
                                                        <h4 className={`text-xs font-black uppercase tracking-[0.2em] ${box.color}`}>{box.label}</h4>
                                                        <textarea
                                                            className="w-full bg-slate-950/40 border border-white/5 p-5 rounded-2xl outline-none focus:border-white/20 text-slate-400 font-light leading-relaxed h-28"
                                                            value={(project as any)[box.field]}
                                                            onChange={(e) => updateProjectField(project.id, box.field as any, e.target.value)}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="w-full xl:w-[450px] space-y-8">
                                            <div className="space-y-4">
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Imagen del Caso</h4>
                                                <div
                                                    onClick={() => {
                                                        setUploadingFor({ type: 'portfolio', id: project.id });
                                                        fileInputRef.current?.click();
                                                    }}
                                                    className="relative aspect-[16/10] bg-slate-950/60 rounded-[3rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center group/img overflow-hidden cursor-pointer hover:border-pathos-cyan/30 transition-all shadow-inner"
                                                >
                                                    {project.featured_image ? (
                                                        <>
                                                            <img src={project.featured_image} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" />
                                                            <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover/img:opacity-100 transition-all flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                                                                <Upload className="text-white animate-bounce" />
                                                                <span className="font-bold text-white text-sm">Cambiar Imagen</span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="text-center p-8">
                                                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover/img:bg-pathos-cyan/20 transition-all">
                                                                <ImageIcon className="text-slate-600 group-hover/img:text-pathos-cyan" size={32} />
                                                            </div>
                                                            <span className="text-sm font-bold text-slate-600">Subir fotografía del proyecto</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Enlace Directo</h4>
                                                <div className="flex items-center gap-4 bg-slate-950/40 p-4 rounded-[1.5rem] border border-white/5 group-hover/card:border-white/10 transition-all">
                                                    <ExternalLink className="text-slate-700" size={18} />
                                                    <input className="bg-transparent w-full outline-none text-slate-400 font-medium text-sm" placeholder="https://..." value={project.url} onChange={(e) => updateProjectField(project.id, 'url', e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'faq' && (
                    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-bold text-white font-display uppercase tracking-tighter">Preguntas Frecuentes</h2>
                            <button onClick={addFAQ} className="px-6 py-3 bg-pathos-cyan text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-pathos-primary transition-all">
                                <Plus size={20} /> Añadir FAQ
                            </button>
                        </div>

                        <div className="space-y-6">
                            {content.faq?.list.map((item: any, i: number) => (
                                <div key={i} className="bg-slate-900/40 p-8 rounded-[2.5rem] border border-white/5 relative group">
                                    <button onClick={() => deleteFAQ(i)} className="absolute top-6 right-6 p-2 text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Trash2 size={18} />
                                    </button>
                                    <div className="space-y-4">
                                        <input className="w-full bg-transparent border-b border-white/10 p-2 text-white font-bold outline-none focus:border-pathos-cyan" value={item.question} onChange={(e) => {
                                            const newList = [...content.faq.list];
                                            newList[i].question = e.target.value;
                                            setContent({ ...content, faq: { ...content.faq, list: newList } });
                                        }} />
                                        <textarea className="w-full bg-transparent p-2 text-slate-400 outline-none text-sm leading-relaxed" rows={3} value={item.answer} onChange={(e) => {
                                            const newList = [...content.faq.list];
                                            newList[i].answer = e.target.value;
                                            setContent({ ...content, faq: { ...content.faq, list: newList } });
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
