import React from 'react';
import { IconMail, IconNexus, IconCreditCard, IconScale, IconFileText } from './Icons';

export const SmartDispatch = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden border-t border-gray-200">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tighter">Fini le ping-pong.</h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Nexus identifie chaque document et le route instantanément <br />vers la bonne équipe, sans intervention humaine.
                    </p>
                </div>

                {/* VISUAL PIPELINE ANIMATION */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">

                    {/* LEFT: INPUT */}
                    <div className="relative flex flex-col items-center gap-6 shrink-0 z-20">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-xl relative">
                            <IconMail className="w-10 h-10 text-gray-400" />
                            {/* Mail moving to center animation */}
                            <div className="absolute inset-0 flex items-center justify-center animate-[dispatchMove_3s_ease-in-out_infinite]">
                                <div className="w-14 h-16 bg-white rounded shadow-md border border-gray-100 flex items-center justify-center">
                                    <div className="w-8 h-1 bg-gray-200 mb-1"></div>
                                </div>
                            </div>
                        </div>
                        <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">Courrier Entrant</span>
                    </div>

                    {/* CENTER: AI BRAIN (The Processor) */}
                    <div className="relative flex-1 h-40 flex items-center justify-center w-full">
                        {/* Connection Lines */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full h-px bg-gray-300 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-[loading_2s_ease-in-out_infinite]"></div>
                            </div>
                        </div>

                        <div className="relative z-10 w-32 h-32 rounded-full bg-white border border-gray-200 shadow-2xl flex items-center justify-center">
                            <IconNexus className="w-12 h-12 text-black" />
                            <div className="absolute -bottom-10 text-[10px] font-mono text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                                INTELLIGENT_ROUTING
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: TEAMS OUTPUT */}
                    <div className="flex flex-col gap-4 shrink-0 z-20">
                        {/* Team 1 */}
                        <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 w-72 shadow-sm hover:shadow-md transition-all group">
                            <img src="/assets/people/david-hurley-MOM0aPcKWhQ-unsplash.jpg" className="w-10 h-10 rounded-full object-cover border border-gray-100" alt="Finance Lead" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900">Finance</span>
                                <span className="text-xs text-gray-500">Factures, Avis d'imposition</span>
                            </div>
                            <div className="ml-auto text-gray-400"><IconCreditCard className="w-5 h-5" /></div>
                        </div>
                        {/* Team 2 */}
                        <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 w-72 shadow-sm hover:shadow-md transition-all group">
                            <img src="/assets/people/kinga-howard-5qNTJcCckmc-unsplash.jpg" className="w-10 h-10 rounded-full object-cover border border-gray-100" alt="Legal Lead" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900">Juridique</span>
                                <span className="text-xs text-gray-500">Contrats, AG, Statuts</span>
                            </div>
                            <div className="ml-auto text-gray-400"><IconScale className="w-5 h-5" /></div>
                        </div>
                        {/* Team 3 */}
                        <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 w-72 shadow-sm hover:shadow-md transition-all group">
                            <img src="/assets/people/toa-heftiba-6bKpHAun4d8-unsplash.jpg" className="w-10 h-10 rounded-full object-cover border border-gray-100" alt="Accounting Lead" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900">Comptabilité</span>
                                <span className="text-xs text-gray-500">Bilans, TVA, Notes de frais</span>
                            </div>
                            <div className="ml-auto text-gray-400"><IconFileText className="w-5 h-5" /></div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes dispatchMove {
                        0% { opacity: 0; transform: scale(0.5) translateX(-50px); }
                        20% { opacity: 1; transform: scale(1) translateX(0); }
                        50% { opacity: 1; transform: scale(0.8) translateX(150px); }
                        80% { opacity: 0; transform: scale(0.2) translateX(250px); }
                        100% { opacity: 0; }
                    }
                `}</style>
            </div>
        </section>
    );
};
