import React from 'react';
import { Eye, Clock, CheckSquare } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Benefits: React.FC = () => {
    const { content } = useContent();
    const { benefits } = content;
    const icons = [Eye, Clock, CheckSquare];

    if (!benefits) return null;

    return (
        <section id="benefits" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        {benefits.header.title_main} <span className="text-sky-600">{benefits.header.title_accent}</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        {benefits.header.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.list.map((benefit: any, idx: number) => {
                        const Icon = icons[idx % icons.length];
                        return (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-sky-600 fade-in-section group hover:-translate-y-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
                                    <Icon className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600">
                                    {benefit.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Benefits;