import React from 'react';
import { IconMapPin, IconArrowRight } from './Icons';

export const StrategicFoundation = () => {
    const addresses = [
        {
            id: 1,
            location: "PARIS_08_PRESTIGE",
            title: "Le Triangle d'Or",
            details: "12 Rue de la Paix, 75008 Paris",
            image: "/assets/paris-classic.jpg",
            status: "DISPONIBLE",
            features: ["Prestige", "Courrier J+0", "Salle de réunion"]
        },
        {
            id: 2,
            location: "PARIS_17_MODERN",
            title: "Espace Wagram",
            details: "15 Avenue de Wagram, 75017 Paris",
            image: "/assets/paris-modern.jpg",
            status: "POPULAIRE",
            features: ["Architecture Moderne", "Parking", "Rooftop"]
        },
        {
            id: 3,
            location: "LYON_PART_DIEU",
            title: "Tour Oxygène",
            details: "10-12 Boulevard Vivier Merle, 69003 Lyon",
            image: "/assets/lyon-lobby.jpg",
            status: "NOUVEAU",
            features: ["Accès Gare", "Lobby Premium", "Bureaux Flex"]
        }
    ];

    return (
        <section id="infrastructure-assets" className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
            {/* Header Container */}
            <div className="max-w-[1400px] mx-auto px-6 mb-16">
                <div className="font-mono text-[10px] text-gray-400 mb-4 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    INFRASTRUCTURE_ASSETS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.1] max-w-4xl">
                    Grâce à notre service de domiciliation,<br className="hidden md:block" />
                    <span className="text-gray-500">devenez une entreprise sans frontières.</span>
                </h2>
            </div>

            {/* Content Grid */}
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {addresses.map((addr) => (
                    <div key={addr.id} className="relative group overflow-hidden rounded-2xl h-[500px] flex flex-col cursor-pointer bg-gray-100">

                        {/* Image Container */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={addr.image}
                                alt={addr.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                        </div>

                        {/* Top Status Badge */}
                        <div className="relative z-10 p-6 flex justify-between items-start">
                            <div className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-[10px] font-mono text-white uppercase tracking-wider rounded-full">
                                {addr.location}
                            </div>
                            <div className={`px-2 py-1 text-[9px] font-bold font-mono uppercase tracking-widest rounded-sm border ${addr.status === 'DISPONIBLE' ? 'bg-green-500 text-white border-green-500' : 'bg-white text-black border-white'}`}>
                                {addr.status}
                            </div>
                        </div>

                        {/* Bottom Content */}
                        <div className="mt-auto relative z-10 p-8 transform transition-transform duration-500">
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{addr.title}</h3>
                            <p className="text-gray-300 text-sm font-light mb-6 flex items-center gap-2">
                                <IconMapPin className="w-4 h-4 text-gray-400" />
                                {addr.details}
                            </p>

                            {/* Features List */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {addr.features.map((feature, i) => (
                                    <span key={i} className="text-[10px] font-mono text-gray-300 border border-gray-600 px-2 py-1 rounded bg-black/30">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Call to Action Button */}
                            <button className="w-full py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                                Choisir cette adresse
                                <IconArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
