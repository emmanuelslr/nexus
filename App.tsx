import React from 'react';
import { Layout } from './components/Layout';
import { DemoDashboard } from './components/DemoDashboard';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { StrategicFoundation } from './components/StrategicFoundation';
import { SmartDispatch } from './components/SmartDispatch';
import { IconCheck } from './components/Icons';
import { SiSlack, SiNotion, SiHubspot, SiLinear, SiSalesforce, SiZapier, SiAsana, SiQuickbooks } from "react-icons/si";

// --- REVIEWS SECTION ---
const ReviewsSection = () => {
    const reviews = [
        {
            name: "Marc D.",
            role: "CEO @ ScaleUp",
            quote: "Nous avons fermé notre bureau physique le mois dernier. Nexus gère tout.",
            metric: "ÉCONOMIE: 15K€/AN",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
        },
        {
            name: "Sophie L.",
            role: "Avocate Associée",
            quote: "L'indexation sémantique change tout. Je retrouve tout en 3 secondes.",
            metric: "GAIN: 4H/SEMAINE",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
        },
        {
            name: "Thomas B.",
            role: "Freelance Tech",
            quote: "Recevoir mon courrier sur Slack à Bali, c'est la liberté totale.",
            metric: "MOBILITÉ: 100%",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
        },
        {
            name: "Sarah J.",
            role: "DAF @ Retail",
            quote: "La compta est à jour en temps réel. Plus de facture égarée.",
            metric: "ERREURS: 0%",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
        },
        {
            name: "Karim M.",
            role: "Fondateur Agence",
            quote: "On a l'impression d'avoir une secrétaire dédiée, pour 1/100e du prix.",
            metric: "ROI: x20",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
        },
        {
            name: "Elise M.",
            role: "Architecte",
            quote: "Tout est scanné, classé, et accessible sur chantier. Indispensable.",
            metric: "PAPIER: -95%",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces",
        }
    ];

    // Duplicate for infinite scroll
    const allReviews = [...reviews, ...reviews];

    return (
        <section className="py-32 border-t border-gray-100 relative overflow-hidden bg-white">
            <div className="max-w-[1400px] mx-auto relative z-10 mb-16 px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-gray-200 text-[10px] font-mono uppercase tracking-widest text-gray-500 bg-gray-50 mb-6">
                            <div className="w-1.5 h-1.5 bg-green-500"></div>
                            User_Feedback_Log
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">Données vérifiées.</h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="font-mono text-4xl font-bold text-gray-900 tracking-tighter mb-1">4.9<span className="text-lg text-gray-400">/5</span></div>
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">TRUSTPILOT_SCORE</div>
                    </div>
                </div>
            </div>

            {/* INFINITE SCROLL MARQUEE */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 animate-[scrollX_40s_linear_infinite] w-max px-6 hover:pause">
                    {allReviews.map((review, idx) => (
                        <div key={idx} className="w-[400px] bg-white p-8 flex flex-col border border-gray-200 hover:border-gray-400 transition-colors group shrink-0 rounded-2xl shadow-sm">
                            {/* User Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover grayscale opacity-80" />
                                <div>
                                    <div className="font-mono font-bold text-gray-900 text-xs uppercase">{review.name}</div>
                                    <div className="text-[10px] text-gray-500 font-mono uppercase">{review.role}</div>
                                </div>
                            </div>

                            {/* The Quote */}
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow font-serif italic border-l-2 border-gray-100 pl-4">
                                "{review.quote}"
                            </p>

                            {/* The Metric */}
                            <div className="pt-4 border-t border-gray-100 mt-auto">
                                <div className="font-mono font-bold text-xs text-gray-900 flex items-center gap-2 bg-gray-50 w-fit px-2 py-1 rounded-md">
                                    {review.metric}
                                    <IconCheck className="w-3 h-3 text-green-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scrollX {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .hover\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

// --- LOGO TICKER COMPONENT ---
const LogoTicker = () => {
    const logos = [
        { name: "Slack", icon: SiSlack, color: "#000" },
        { name: "Notion", icon: SiNotion, color: "#000" },
        { name: "HubSpot", icon: SiHubspot, color: "#000" },
        { name: "Linear", icon: SiLinear, color: "#000" },
        { name: "Salesforce", icon: SiSalesforce, color: "#000" },
        { name: "Zapier", icon: SiZapier, color: "#000" },
        { name: "Asana", icon: SiAsana, color: "#000" },
        { name: "QuickBooks", icon: SiQuickbooks, color: "#000" },
    ];
    // Triplicate for smooth infinite scroll
    const allLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-10 border-b border-gray-100 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Ils construisent le futur avec Nexus</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex gap-20 animate-[scrollX_40s_linear_infinite] w-max px-6 items-center hover:pause opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {allLogos.map((logo, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-900 group cursor-default">
                            <div className="grayscale group-hover:grayscale-0 transition-all">
                                <logo.icon size={24} />
                            </div>
                            <span className="font-bold text-lg font-sans tracking-tight">{logo.name}</span>
                        </div>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

function App() {
    return (
        <Layout>
            <Hero />
            <LogoTicker />
            <Features />
            <StrategicFoundation />
            <SmartDispatch />

            {/* Demo Section */}
            <section id="product" className="bg-gray-50 py-24 border-t border-gray-200 relative z-20">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tighter mb-4 text-gray-900">La fin du cauchemar administratif.</h2>
                        <p className="text-gray-500 text-lg font-light">Transformez vos recommandés et factures en tâches résolues. En un clic.</p>
                    </div>
                    {/* Enhanced container for DemoDashboard to make it pop */}
                    <div className="relative rounded-2xl p-1 bg-gradient-to-b from-gray-200 to-white shadow-xl border border-gray-200 max-w-6xl mx-auto overflow-hidden">
                        <DemoDashboard />
                    </div>
                </div>
            </section>

            <ReviewsSection />
        </Layout>
    );
}

export default App;
