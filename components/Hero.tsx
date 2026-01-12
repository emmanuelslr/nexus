import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowRight, IconCheck, IconScan, IconFileText, IconActivity, IconMail, IconDownload, IconShare, IconTrash, IconBuilding } from './Icons';

// Custom Icon for French Administration
const IconMarianne = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="currentColor" className="text-gray-900" fillOpacity="0.1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m0 0L4 7m8 5l8-5" />
    </svg>
);

const NexusAppUI = () => {
    return (
        <div className="bg-[#050505] h-full w-full flex flex-col relative overflow-hidden rounded-[2.5rem] font-sans text-white border-[6px] border-[#1a1a1a]">
            {/* Status Bar */}
            <div className="w-full flex justify-between items-center px-6 pt-4 pb-2 z-20">
                <div className="text-[10px] font-medium text-gray-500">9:41</div>
                <div className="flex gap-1.5">
                    <div className="w-4 h-2.5 bg-gray-600 rounded-[2px]" />
                    <div className="w-4 h-2.5 bg-gray-600 rounded-[2px]" />
                    <div className="w-5 h-2.5 border border-gray-600 rounded-[4px] relative">
                        <div className="absolute inset-0.5 bg-gray-600 rounded-[1px]" />
                    </div>
                </div>
            </div>

            {/* App Header - Ultra Minimal */}
            <div className="px-6 py-4 flex items-center justify-between z-10 bg-[#050505]">
                <div className="flex items-center gap-2 text-gray-400">
                    <IconArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <div className="text-xs font-medium tracking-widest uppercase text-gray-500">Scanner IA</div>
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-gray-400">ES</span>
                </div>
                <motion.div
                    className="absolute top-1/4 right-4 bg-gray-900/90 backdrop-blur px-2 py-1 rounded text-[9px] font-mono text-emerald-400 border border-emerald-500/20 shadow-lg"
                    animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    SCANNING...
                </motion.div>
            </div>

            {/* Main Scanning Area */}
            <div className="flex-1 relative flex items-center justify-center p-6 overflow-hidden bg-[#050505]">

                {/* The Document Card */}
                <motion.div
                    className="relative w-full max-w-[260px] aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-2xl"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Document Content - Realistic DGFIP */}
                    <div className="p-5 text-[8px] text-gray-900 font-serif leading-relaxed opacity-90">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4 border-b border-gray-200 pb-2">
                            <div className="space-y-0.5">
                                <div className="font-bold uppercase tracking-widest text-gray-600 text-[6px]">République Française</div>
                                <div className="font-bold text-gray-900">DIRECTION GÉNÉRALE DES<br />FINANCES PUBLIQUES</div>
                            </div>
                            <div className="text-right text-gray-500 leading-tight">
                                SIE PARIS 8<br />
                                12 RUE DE LONDRES<br />
                                75008 PARIS
                            </div>
                        </div>

                        {/* Body */}
                        <div className="space-y-3">
                            <div className="font-bold bg-gray-100 inline-block px-1.5 py-0.5 rounded-[2px]">
                                OBJET : RELANCE AMIABLE
                            </div>

                            <div className="text-justify text-gray-700">
                                Sauf erreur de notre part, le solde de votre Impôt sur les Sociétés (IS) pour l'exercice 2024 n'a pas été réglé à ce jour.
                            </div>

                            {/* Key Data Table */}
                            <div className="mt-2 border border-gray-200 rounded bg-gray-50 p-2 space-y-1.5">
                                <div className="flex justify-between">
                                    <span className="font-bold text-gray-500">Nature</span>
                                    <span className="font-bold">Solde IS 2024</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold text-gray-500">Date limite</span>
                                    <span className="font-bold text-red-600">15 NOV 2024</span>
                                </div>
                                <div className="flex justify-between pt-1 border-t border-gray-200">
                                    <span className="font-bold">NET À PAYER</span>
                                    <span className="font-bold text-base">3 450,00 €</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Laser Scanner Effect */}
                    <motion.div
                        className="absolute inset-x-0 h-[2px] bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] z-20"
                        animate={{ top: ["0%", "100%"] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 0.5
                        }}
                    />

                    {/* Scanner Gradient Trail */}
                    <motion.div
                        className="absolute inset-x-0 h-32 bg-gradient-to-b from-emerald-500/0 to-emerald-500/10 z-10 pointer-events-none"
                        animate={{ top: ["-20%", "80%"] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 0.5
                        }}
                    />

                    {/* Detected Field Highlights (Animated) */}
                    <motion.div
                        className="absolute bottom-[55px] right-[20px] w-[80px] h-[20px] rounded bg-emerald-500/20 border border-emerald-500/50 z-10"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
                    />
                </motion.div>
            </div>

            {/* Bottom Action Sheet - Clean Result */}
            <div className="bg-[#111] p-6 pt-6 border-t border-gray-800 z-30">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Montant détecté</div>
                        <div className="text-2xl font-bold text-white tracking-tight">3 450,00 €</div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <IconCheck className="w-5 h-5 text-emerald-500" />
                    </div>
                </div>

                <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors text-sm">
                    Payer en 1 clic
                </button>
            </div>
        </div>
    );
};

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-white text-gray-900 overflow-hidden pt-20">
            {/* Background Gradients - Subtle Silver/Gray */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-gray-100 rounded-full blur-[120px] opacity-50 mix-blend-multiply animate-[blob_15s_infinite]"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] opacity-60 animate-[blob_15s_infinite_reverse]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-600 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                        La domiciliation nouvelle génération
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900"
                    >
                        Votre siège social <br />
                        <span className="text-gray-500">
                            dès 19€/mois
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-500 max-w-lg leading-relaxed"
                    >
                        Une adresse prestigieuse à Paris. Une gestion du courrier 100% digitalisée.
                        Libérez-vous de l'administratif.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="h-14 px-8 rounded-2xl bg-black text-white font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-gray-200">
                            Domicilier ma société
                            <IconArrowRight className="w-5 h-5" />
                        </button>
                        <button className="h-14 px-8 rounded-2xl bg-white border border-gray-200 text-gray-900 font-medium text-lg hover:bg-gray-50 transition-all flex items-center justify-center shadow-sm hover:shadow-md">
                            Voir les tarifs
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="pt-8 border-t border-gray-100 grid grid-cols-2 gap-6"
                    >
                        {[
                            "Attestation en 5 min",
                            "Courrier numérisé",
                            "Sans engagement",
                            "Support 7j/7"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-900">
                                    <IconCheck className="w-3 h-3" />
                                </div>
                                {item}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Visual - Person + Phone */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative hidden lg:block h-[600px] w-full"
                >
                    {/* Person Image (Preserved) */}
                    <div className="absolute right-0 bottom-0 w-3/4 h-5/6 z-0">
                        <img
                            src="/assets/people/jeffery-erhunse-4XK2oKKvzVU-unsplash.jpg"
                            alt="Happy User"
                            className="w-full h-full object-cover object-top rounded-3xl grayscale-[20%]"
                        />
                        {/* Gradient Fade at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    {/* Hyper-Real Titanium Phone */}
                    <div className="absolute top-10 left-0 z-10 w-[300px] h-[600px] animate-[hoverAgent_6s_ease-in-out_infinite]">
                        {/* The Frame (Titanium) */}
                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_20px_50px_-10px_rgba(0,0,0,0.3)] z-0"></div>
                        <div className="absolute inset-[2px] rounded-[2.4rem] bg-black z-0"></div>

                        {/* Screen Container */}
                        <div className="absolute inset-[6px] rounded-[2.2rem] overflow-hidden bg-black z-10">
                            {/* Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-50 flex justify-center items-center">
                                <div className="w-20 h-5 bg-black rounded-full"></div>
                            </div>

                            <NexusAppUI />
                        </div>

                        {/* Side Buttons */}
                        <div className="absolute top-24 -left-[2px] w-[2px] h-8 bg-gray-400 rounded-l-sm"></div>
                        <div className="absolute top-36 -left-[2px] w-[2px] h-12 bg-gray-400 rounded-l-sm"></div>
                        <div className="absolute top-28 -right-[2px] w-[2px] h-16 bg-gray-400 rounded-r-sm"></div>
                    </div>
                </motion.div>
            </div>
            <style>{`
                @keyframes hoverAgent {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
            `}</style>
        </section>
    );
};
