
import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { DemoDashboard } from './components/DemoDashboard';
import { IconArrowRight, IconShield, IconZap, IconSearch, IconSlack, IconDrive, IconCheck, IconMapPin, IconScan, IconNotion, IconHubspot, IconBot, IconFileText, IconLinear, IconBuilding, IconMail, IconNexus, IconUsers, IconScale, IconCreditCard, IconSalesforce, IconZapier, IconAsana, IconQuickBooks, IconServer, IconWifi, IconActivity, IconGlobe, IconQuote, IconStar } from './components/Icons';
import { SiSlack, SiStripe, SiZapier, SiNotion, SiHubspot, SiSalesforce, SiAsana, SiTrello, SiDropbox, SiGoogle, SiLinear, SiQuickbooks } from "react-icons/si";

// --- NEW HIGH-TECH AI BACKGROUND COMPONENT (Bland.ai Style) ---
const AIProcessingNetwork = () => {
    // Mock data for "Living" agents
    const agents = [
        { id: 1, x: 20, y: 30, delay: 0, scale: 1 },
        { id: 2, x: 75, y: 15, delay: 2, scale: 0.8 },
        { id: 3, x: 85, y: 60, delay: 4, scale: 0.9 },
        { id: 4, x: 15, y: 75, delay: 1.5, scale: 0.85 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#FAFAFA]">
            {/* 1. Neural Grid Floor (Perspective) */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
                    transformOrigin: 'top center'
                }}>
            </div>

            {/* 2. Active AI Agents Processing Papers */}
            {agents.map((agent) => (
                <div
                    key={agent.id}
                    className="absolute"
                    style={{
                        left: `${agent.x}%`,
                        top: `${agent.y}%`,
                        transform: `scale(${agent.scale})`,
                        animation: `hoverAgent 6s ease-in-out infinite`,
                        animationDelay: `${agent.delay}s`
                    }}
                >
                    {/* The "Physical" Paper being targeted */}
                    <div className="absolute -translate-x-1/2 translate-y-20 w-24 h-32 bg-white border border-gray-200 shadow-xl flex flex-col p-3 overflow-hidden transition-all duration-500"
                        style={{ animation: `paperFloat 6s ease-in-out infinite`, animationDelay: `${agent.delay}s` }}>
                        <div className="w-full h-1 bg-gray-100 mb-2"></div>
                        <div className="w-2/3 h-1 bg-gray-100 mb-2"></div>
                        <div className="w-full h-1 bg-gray-100 mb-2"></div>
                        <div className="w-full h-1 bg-gray-100 mb-2"></div>

                        {/* The "Scan" Effect on the paper */}
                        <div className="absolute inset-0 bg-gradient-to-b from-green-400/0 via-green-400/10 to-green-400/0 h-full w-full animate-[scanDown_3s_ease-in-out_infinite]"></div>

                        {/* Deconstruction Particles (Paper turning into data) */}
                        <div className="absolute top-0 inset-x-0 flex justify-center">
                            <div className="absolute -top-10 text-[8px] font-mono font-bold text-green-600 animate-[dataRise_2s_linear_infinite]" style={{ left: '20%', animationDelay: '0.1s' }}>1001</div>
                            <div className="absolute -top-10 text-[8px] font-mono font-bold text-green-600 animate-[dataRise_2s_linear_infinite]" style={{ left: '50%', animationDelay: '0.5s' }}>XML</div>
                            <div className="absolute -top-10 text-[8px] font-mono font-bold text-green-600 animate-[dataRise_2s_linear_infinite]" style={{ left: '80%', animationDelay: '0.3s' }}>{`{}`}</div>
                        </div>
                    </div>

                    {/* The Connection Beam (Laser) */}
                    <div className="absolute left-0 top-0 h-20 w-[1px] bg-gradient-to-b from-green-500 via-green-500/50 to-transparent -translate-x-1/2 origin-top animate-pulse"></div>

                    {/* The AI Agent (Orb/Drone) */}
                    <div className="relative z-10 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                        {/* Outer Ring */}
                        <div className="absolute inset-0 border border-gray-300 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-[-4px] border border-dashed border-gray-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                        {/* Core */}
                        <div className="absolute inset-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-100 shadow-[0_0_15px_rgba(0,0,0,0.05)] flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                        </div>

                        {/* HUD Label */}
                        <div className="absolute left-full ml-3 top-0 bg-black/5 backdrop-blur-sm border border-gray-200 px-2 py-1 rounded text-[9px] font-mono text-gray-600 whitespace-nowrap opacity-0 animate-[fadeInOut_6s_infinite]" style={{ animationDelay: `${agent.delay}s` }}>
                            <div className="flex items-center gap-1">
                                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                                OCR_PROCESSING
                            </div>
                            <div className="text-[8px] text-gray-400 mt-0.5">CONFIDENCE: 99.8%</div>
                        </div>
                    </div>
                </div>
            ))}

            {/* 3. Ambient Data Clouds */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-green-50 to-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <style>{`
        @keyframes hoverAgent {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-15px) scale(1); }
        }
        @keyframes paperFloat {
            0%, 100% { transform: translate(-50%, 80px) rotate(-2deg); }
            50% { transform: translate(-50%, 90px) rotate(2deg); }
        }
        @keyframes scanDown {
            0% { transform: translateY(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes dataRise {
            0% { transform: translateY(40px); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(-40px); opacity: 0; }
        }
        @keyframes fadeInOut {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
        }
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
        </div>
    );
};

// --- AUTO-PLAY AI TASK LIST ANIMATION COMPONENT ---
const AITaskList = () => {
    const [steps, setSteps] = useState([
        { id: 1, text: "Lecture du document", status: 'waiting' },
        { id: 2, text: "Extraction du montant (TVA)", status: 'waiting' },
        { id: 3, text: "Détection échéance (15/01)", status: 'waiting' },
        { id: 4, text: "Alerte envoyée au Dirigeant", status: 'waiting' }
    ]);

    useEffect(() => {
        const runAnimation = async () => {
            // Reset state cleanly
            setSteps(prev => prev.map(step => ({ ...step, status: 'waiting' })));
            await new Promise(r => setTimeout(r, 500));

            for (let i = 0; i < steps.length; i++) {
                // Set Processing
                setSteps(prev => prev.map((step, idx) =>
                    idx === i ? { ...step, status: 'processing' } : step
                ));
                // Wait random time to simulate thinking
                await new Promise(r => setTimeout(r, 800));

                // Set Completed
                setSteps(prev => prev.map((step, idx) =>
                    idx === i ? { ...step, status: 'completed' } : step
                ));
            }
            // Pause before restart
            await new Promise(r => setTimeout(r, 2000));
            runAnimation(); // Loop
        };

        runAnimation();

        // Cleanup handled by React usually, but good to note this runs forever
        return () => { };
    }, []);

    return (
        <div className="bg-[#0A0A0A] rounded-xl border border-gray-800 p-6 w-full max-w-xs shadow-2xl font-mono text-xs relative overflow-hidden">
            {/* Matrix Rain Background Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 text-[8px] text-green-500 animate-[scanDown_2s_linear_infinite]">010101</div>
                <div className="absolute top-0 left-3/4 text-[8px] text-green-500 animate-[scanDown_3s_linear_infinite] animation-delay-1000">101100</div>
            </div>

            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-3 relative z-10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-gray-400 font-bold tracking-widest">NEXUS_AGENT_ACTIVE</span>
            </div>
            <div className="space-y-4 relative z-10">
                {steps.map((step) => (
                    <div key={step.id} className="flex items-center justify-between">
                        <span className={`transition-colors duration-300 ${step.status === 'completed' ? 'text-gray-500' : step.status === 'processing' ? 'text-white' : 'text-gray-700'}`}>
                            {step.text}
                        </span>
                        {step.status === 'completed' && <IconCheck className="w-3 h-3 text-green-500 animate-in zoom-in duration-300" />}
                        {step.status === 'processing' && (
                            <div className="flex gap-1">
                                <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                                <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-100"></div>
                                <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-200"></div>
                            </div>
                        )}
                        {step.status === 'waiting' && <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>}
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-3 border-t border-gray-800 text-gray-600 text-[10px] flex justify-between relative z-10">
                <span className="font-mono text-green-500/50">SYS_OPTIMAL</span>
                <span className="animate-pulse">LATENCY: 12ms</span>
            </div>
        </div>
    );
};

// --- UPDATED ADDRESS MAP WITH HOLOGRAPHIC ENVELOPE ---
const AddressMap = () => {
    return (
        <div className="relative w-full h-full bg-gray-900 overflow-hidden rounded-3xl border border-gray-800 shadow-2xl group perspective-1000">
            {/* 1. Isometric Grid Floor */}
            <div className="absolute inset-[-100%] w-[300%] h-[300%] opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(90deg, #4b5563 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    transform: 'rotateX(60deg) rotateZ(45deg) translateY(-20%)',
                    transformStyle: 'preserve-3d'
                }}>
            </div>

            {/* 2. Radar Pulse Ground */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-green-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-green-500/30 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>

            {/* 3. The Holographic Envelope (Digital Twin) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-10">
                {/* Floating Animation Wrapper */}
                <div className="animate-[hoverAgent_4s_ease-in-out_infinite]">
                    {/* The Envelope 3D Construction */}
                    <div className="w-32 h-20 bg-green-900/20 border border-green-400/60 relative backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.3)] flex items-center justify-center transform rotate-12">
                        {/* Envelope Flap Lines */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <div className="w-[150%] h-px bg-green-500/50 absolute top-0 left-0 rotate-[25deg] origin-top-left"></div>
                            <div className="w-[150%] h-px bg-green-500/50 absolute top-0 right-0 -rotate-[25deg] origin-top-right"></div>
                        </div>
                        {/* Hologram Texture */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30 mix-blend-overlay"></div>

                        {/* Center Seal */}
                        <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center relative z-10 shadow-[0_0_10px_#4ade80]">
                            <IconNexus className="w-4 h-4 text-green-400" />
                        </div>
                    </div>

                    {/* Scanning Laser Plane */}
                    <div className="absolute -top-10 -left-10 w-[160%] h-1 bg-green-400/80 shadow-[0_0_20px_#4ade80] animate-[scanVertical_3s_ease-in-out_infinite] opacity-70"></div>
                </div>
            </div>

            {/* 4. Floating UI Labels */}
            <div className="absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-2 mb-2">
                    <div className="px-2 py-0.5 rounded bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-mono animate-pulse">RECEPTION_CONFIRMED</div>
                </div>
                <h4 className="text-white font-bold text-lg">Siège Social</h4>
                <p className="text-gray-400 text-xs">75008 Paris, France</p>
            </div>

            {/* 5. Connectivity Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" style={{ transform: 'rotateX(45deg)' }}>
                <line x1="50%" y1="50%" x2="10%" y2="20%" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="90%" y2="80%" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
            </svg>

            <style>{`
                @keyframes scanVertical {
                    0%, 100% { transform: translateY(0); opacity: 0; }
                    50% { transform: translateY(100px); opacity: 1; }
                }
             `}</style>
        </div>
    );
};

const StrategicFoundationSection = () => {
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
        <section className="min-h-[90vh] flex flex-col bg-white border-t border-gray-100 overflow-hidden relative">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            {/* Header Container */}
            <div className="flex-none w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm z-20">
                <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-12 flex items-end justify-between">
                    <div>
                        <div className="font-mono text-[9px] text-gray-400 mb-2 tracking-widest uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            INFRASTRUCTURE_ASSETS_V4
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1] max-w-4xl">
                            Grâce à notre service de domiciliation,<br className="hidden md:block" />
                            <span className="text-gray-500">devenez une entreprise sans frontières.</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-[9px] font-mono text-gray-400 mb-1">NETWORK_STATUS</div>
                        <div className="text-sm font-bold text-green-600 font-mono">ALL_SYSTEMS_OPERATIONAL</div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 h-full overflow-hidden">
                {addresses.map((addr) => (
                    <div key={addr.id} className="relative group border-r border-gray-100 overflow-hidden h-[600px] md:h-auto flex flex-col cursor-pointer bg-black">

                        {/* Image Container */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={addr.image}
                                alt={addr.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale contrast-125 opacity-60 group-hover:opacity-40"
                            />
                            {/* Tech Green Tint & Gradient */}
                            <div className="absolute inset-0 bg-green-900/20 mix-blend-overlay pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                        </div>

                        {/* Top Status Badge */}
                        <div className="relative z-10 p-6 flex justify-between items-start">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-mono text-white uppercase tracking-wider rounded-full">
                                {addr.location}
                            </div>
                            <div className={`px-2 py-1 text-[9px] font-bold font-mono uppercase tracking-widest rounded-sm border ${addr.status === 'DISPONIBLE' ? 'bg-green-500 text-black border-green-400' : 'bg-white text-black border-white'}`}>
                                {addr.status}
                            </div>
                        </div>

                        {/* Bottom Content - Always Visible & Clear */}
                        <div className="mt-auto relative z-10 p-8 transform transition-transform duration-500">
                            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{addr.title}</h3>
                            <p className="text-gray-300 text-sm font-light mb-6 flex items-center gap-2">
                                <IconMapPin className="w-4 h-4 text-gray-400" />
                                {addr.details}
                            </p>

                            {/* Features List */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {addr.features.map((feature, i) => (
                                    <span key={i} className="text-[10px] font-mono text-gray-400 border border-gray-700 px-2 py-1 rounded bg-black/30">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Call to Action Button */}
                            <button className="w-full py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-green-400 transition-colors flex items-center justify-center gap-2 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 duration-300">
                                Choisir cette adresse
                                <IconArrowRight className="w-4 h-4" />
                            </button>

                            {/* Default state indicator (visible when button is hidden) */}
                            <div className="h-1 w-full bg-gray-800 mt-4 rounded-full overflow-hidden group-hover:hidden">
                                <div className="h-full bg-green-500 w-1/3"></div>
                            </div>
                        </div>

                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500/50 transition-colors pointer-events-none z-20"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};


// --- REFINED SMART DISPATCH SECTION (Cinematic) ---
const SmartDispatchSection = () => {
    return (
        <section className="min-h-[80vh] flex items-center py-24 bg-[#08090A] relative overflow-hidden border-t border-gray-800">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Fini le ping-pong.</h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Nexus identifie chaque document et le route instantanément <br />vers la bonne équipe, sans intervention humaine.
                    </p>
                </div>

                {/* VISUAL PIPELINE ANIMATION */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">

                    {/* LEFT: INPUT */}
                    <div className="relative flex flex-col items-center gap-6 shrink-0 z-20">
                        <div className="w-28 h-28 rounded-2xl bg-[#1A1D21] border border-gray-700 flex items-center justify-center shadow-2xl relative">
                            <IconMail className="w-10 h-10 text-gray-400" />
                            {/* Mail moving to center animation - Refined */}
                            <div className="absolute inset-0 flex items-center justify-center animate-[dispatchMove_3s_ease-in-out_infinite]">
                                <div className="w-16 h-20 bg-white rounded shadow-lg border border-gray-200 flex items-center justify-center">
                                    <div className="w-10 h-1 bg-gray-200 mb-1"></div>
                                </div>
                            </div>
                        </div>
                        <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">Courrier Entrant</span>
                    </div>

                    {/* CENTER: AI BRAIN (The Processor) */}
                    <div className="relative flex-1 h-40 flex items-center justify-center w-full">
                        {/* Connection Lines */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full h-px bg-gray-800 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-green-500 to-transparent animate-[loading_2s_ease-in-out_infinite]"></div>
                            </div>
                        </div>

                        <div className="relative z-10 w-40 h-40 rounded-full bg-black border border-green-500/20 shadow-[0_0_80px_rgba(34,197,94,0.1)] flex items-center justify-center">
                            {/* Spinning Rings */}
                            <div className="absolute inset-2 rounded-full border border-gray-800 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-6 rounded-full border border-gray-800 animate-[spin_15s_linear_infinite_reverse]"></div>

                            <IconNexus className="w-16 h-16 text-green-500 animate-pulse" />

                            <div className="absolute -bottom-12 text-[10px] font-mono text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                                INTELLIGENT_ROUTING_V2
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: TEAMS OUTPUT */}
                    <div className="flex flex-col gap-4 shrink-0 z-20">
                        {/* Team 1 */}
                        <div className="relative flex items-center gap-4 p-5 rounded-xl bg-[#1A1D21] border border-gray-700 w-72 animate-[fadeInRight_1.5s_ease-out_infinite] animation-delay-500 hover:border-blue-500/50 transition-all group shadow-lg">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" className="absolute top-3 right-3 w-6 h-6 rounded-full border border-gray-600 opacity-70 group-hover:opacity-100 transition-opacity" alt="Finance Lead" />
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform"><IconCreditCard className="w-6 h-6" /></div>
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-gray-200">Finance</span>
                                <span className="text-xs text-gray-500">Factures, Avis d'imposition</span>
                            </div>
                        </div>
                        {/* Team 2 */}
                        <div className="relative flex items-center gap-4 p-5 rounded-xl bg-[#1A1D21] border border-gray-700 w-72 animate-[fadeInRight_1.5s_ease-out_infinite] animation-delay-1000 hover:border-purple-500/50 transition-all group shadow-lg">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" className="absolute top-3 right-3 w-6 h-6 rounded-full border border-gray-600 opacity-70 group-hover:opacity-100 transition-opacity" alt="Legal Lead" />
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform"><IconScale className="w-6 h-6" /></div>
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-gray-200">Juridique</span>
                                <span className="text-xs text-gray-500">Contrats, AG, Statuts</span>
                            </div>
                        </div>
                        {/* Team 3 */}
                        <div className="relative flex items-center gap-4 p-5 rounded-xl bg-[#1A1D21] border border-gray-700 w-72 animate-[fadeInRight_1.5s_ease-out_infinite] animation-delay-1500 hover:border-yellow-500/50 transition-all group shadow-lg">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" className="absolute top-3 right-3 w-6 h-6 rounded-full border border-gray-600 opacity-70 group-hover:opacity-100 transition-opacity" alt="Accounting Lead" />
                            <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform"><IconFileText className="w-6 h-6" /></div>
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-gray-200">Comptabilité</span>
                                <span className="text-xs text-gray-500">Bilans, TVA, Notes de frais</span>
                            </div>
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
                    @keyframes fadeInRight {
                        0% { opacity: 0.5; transform: translateX(-5px); }
                        50% { opacity: 1; transform: translateX(0); border-color: rgba(255,255,255,0.2); }
                        100% { opacity: 0.5; transform: translateX(-5px); }
                    }
                `}</style>
            </div>
        </section>
    );
};

// --- NEW CUSTOMER REVIEWS SECTION (Infinite Marquee - STRICT MONOCHROME PALANTIR STYLE) ---
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
            {/* Background Tech Pattern - Subtle Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-[1400px] mx-auto relative z-10 mb-16 px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-black text-[10px] font-mono uppercase tracking-widest text-black bg-white mb-6">
                            <div className="w-1.5 h-1.5 bg-black"></div>
                            User_Feedback_Log
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">Données vérifiées.</h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="font-mono text-4xl font-bold text-black tracking-tighter mb-1">4.9<span className="text-lg text-gray-400">/5</span></div>
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">TRUSTPILOT_SCORE</div>
                    </div>
                </div>
            </div>

            {/* INFINITE SCROLL MARQUEE */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 animate-[scrollX_40s_linear_infinite] w-max px-6 hover:pause">
                    {allReviews.map((review, idx) => (
                        <div key={idx} className="w-[400px] bg-white p-8 flex flex-col border border-gray-200 hover:border-black transition-colors group shrink-0 rounded-sm shadow-none">
                            {/* User Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-none object-cover grayscale opacity-80" />
                                <div>
                                    <div className="font-mono font-bold text-black text-xs uppercase">{review.name}</div>
                                    <div className="text-[10px] text-gray-500 font-mono uppercase">{review.role}</div>
                                </div>
                            </div>

                            {/* The Quote */}
                            <p className="text-gray-900 text-lg leading-relaxed mb-8 flex-grow font-serif italic border-l-2 border-gray-200 pl-4">
                                "{review.quote}"
                            </p>

                            {/* The Metric */}
                            <div className="pt-4 border-t border-gray-100 mt-auto">
                                <div className="font-mono font-bold text-xs text-black flex items-center gap-2 bg-gray-100 w-fit px-2 py-1 rounded-none">
                                    {review.metric}
                                    <IconCheck className="w-3 h-3 text-black" />
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
        { name: "Slack", icon: SiSlack, color: "#4A154B" },
        { name: "Notion", icon: SiNotion, color: "#000000" },
        { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
        { name: "Linear", icon: SiLinear, color: "#5E6AD2" },
        { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
        { name: "Zapier", icon: SiZapier, color: "#FF4A00" },
        { name: "Asana", icon: SiAsana, color: "#F06A6A" },
        { name: "QuickBooks", icon: SiQuickbooks, color: "#2CA01C" },
    ];
    // Triplicate for smooth infinite scroll
    const allLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-8 border-b border-gray-100 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 mb-6 text-center">
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-600">Ils construisent le futur avec Nexus</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex gap-20 animate-[scrollX_40s_linear_infinite] w-max px-6 items-center hover:pause">
                    {allLogos.map((logo, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-black hover:text-black transition-colors duration-300 group cursor-default">
                            <div className="grayscale group-hover:grayscale-0 transition-all">
                                <logo.icon size={24} color={logo.color} />
                            </div>
                            <span className="font-bold text-lg font-sans tracking-tight">{logo.name}</span>
                        </div>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>

            <style>{`
                @keyframes scrollX {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .hover\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

function App() {
    return (
        <Layout>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden border-b border-gray-100 bg-[#FAFAFA]">

                <AIProcessingNetwork />

                {/* HUGE BRAND WATERMARK */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02]">
                    <IconNexus className="w-[800px] h-[800px] text-black" />
                </div>

                <div className="max-w-[1200px] mx-auto text-center relative z-20 pt-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-gray-200 text-[11px] font-medium text-gray-600 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-sm hover:shadow-md transition-shadow cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        L'infrastructure administrative des entreprises modernes
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-gray-900 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        L'administratif.<br />
                        <span className="text-gray-500">Sans le papier.</span>
                    </h1>

                    <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-normal tracking-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">
                        Obtenez votre adresse de siège social et laissez notre IA gérer votre courrier.<br />
                        Centralisez, payez et classez vos documents sans lever le petit doigt.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 mb-20">
                        <button className="group h-12 px-8 rounded-full bg-black text-white font-medium text-sm hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-gray-200 hover:scale-105 active:scale-95">
                            Domicilier mon entreprise
                            <IconArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <button className="h-12 px-8 rounded-full border border-gray-200 bg-white/80 backdrop-blur text-gray-900 font-medium text-sm hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">
                            Voir comment ça marche
                        </button>
                    </div>

                    {/* Abstract Representation of Digitization */}
                    <div className="relative h-20 w-full max-w-2xl mx-auto opacity-70">
                        <div className="absolute inset-0 flex items-center justify-between text-gray-300 px-10">
                            <div className="flex flex-col items-center gap-1 animate-pulse">
                                <IconFileText className="w-6 h-6 text-gray-400" />
                                <span className="text-[9px] font-mono">SCAN_INPUT</span>
                            </div>
                            {/* Data Pipeline 1 */}
                            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-green-400/50 to-gray-200 mx-4 relative overflow-hidden">
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-[2px] bg-green-500 rounded-full animate-[moveRight_2s_linear_infinite]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shadow-lg shadow-black/10 z-10 relative">
                                    <IconZap className="w-4 h-4" />
                                    <div className="absolute inset-0 rounded-lg bg-green-500/20 animate-ping"></div>
                                </div>
                                <span className="text-[9px] font-mono text-black">AI_CORE</span>
                            </div>
                            {/* Data Pipeline 2 */}
                            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-green-400/50 to-gray-200 mx-4 relative overflow-hidden">
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-[2px] bg-green-500 rounded-full animate-[moveRight_2s_linear_infinite]" style={{ animationDelay: '1s' }}></div>
                            </div>
                            <div className="font-mono text-[10px] text-green-600 font-bold bg-green-50 border border-green-100 px-2 py-1 rounded animate-pulse">DIGITAL_OUTPUT</div>
                        </div>
                        <style>{`
                @keyframes moveRight {
                    0% { left: -10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 110%; opacity: 0; }
                }
              `}</style>
                    </div>
                </div>
            </section>

            {/* Logo Ticker */}
            <LogoTicker />

            {/* Demo Section */}
            <section className="bg-white py-16 border-b border-gray-100 relative z-20">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tighter mb-3 text-gray-900">La fin du cauchemar administratif.</h2>
                        <p className="text-gray-500 text-lg font-light">Transformez vos recommandés et factures en tâches résolues. En un clic.</p>
                    </div>
                    {/* Enhanced container for DemoDashboard to make it pop */}
                    <div className="relative rounded-2xl p-2 bg-gradient-to-b from-gray-100 to-white shadow-sm border border-gray-100 max-w-6xl mx-auto">
                        <DemoDashboard />
                    </div>
                </div>
            </section>

            {/* The Dual Value Section (Physique + Digital) */}
            <section id="domiciliation" className="py-32 px-6 bg-[#FAFAFA] border-b border-gray-100 overflow-hidden">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">

                        {/* Block 1: Physical */}
                        <div className="space-y-8 animate-in slide-in-from-left-8 fade-in duration-1000">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-900">
                                Domiciliation
                            </div>
                            <h3 className="text-5xl font-bold tracking-tighter leading-[0.95]">Domiciliez votre entreprise.<br />Nous gérons l'administratif.</h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                Obtenez votre siège social dans le 8ème arrondissement en 5 minutes. Plus besoin de passer récupérer votre courrier : tout est réceptionné, sécurisé et accessible depuis votre téléphone.
                            </p>
                            <ul className="space-y-4 mt-4">
                                <li className="flex items-center gap-4 text-sm font-medium text-gray-800 group cursor-default hover:translate-x-1 transition-transform">
                                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors"><IconCheck className="w-3 h-3" /></div>
                                    Adresse prestigieuse (75008 Paris)
                                </li>
                                <li className="flex items-center gap-4 text-sm font-medium text-gray-800 group cursor-default hover:translate-x-1 transition-transform">
                                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors"><IconCheck className="w-3 h-3" /></div>
                                    Mise en place 100% en ligne
                                </li>
                            </ul>
                        </div>

                        {/* Visual 1 - Animated Digital Twin Map */}
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl animate-in slide-in-from-right-8 fade-in duration-1000 shadow-2xl">
                            <AddressMap />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        {/* Visual 2 - AI Task List */}
                        <div className="relative aspect-square md:aspect-[4/3] bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-inner md:order-1 flex items-center justify-center animate-in slide-in-from-left-8 fade-in duration-1000">
                            {/* Abstract Background Elements */}
                            <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-[0.04] transform -rotate-12 scale-125 pointer-events-none">
                                {Array.from({ length: 24 }).map((_, i) => <div key={i} className="h-32 bg-black rounded-full"></div>)}
                            </div>
                            <div className="relative z-10 transform transition-transform duration-500">
                                <AITaskList />
                            </div>
                        </div>

                        {/* Block 2: Digital */}
                        <div className="space-y-8 md:order-2 animate-in slide-in-from-right-8 fade-in duration-1000">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-900">
                                Intelligence Artificielle
                            </div>
                            <h3 className="text-5xl font-bold tracking-tighter leading-[0.95]">Ne traitez plus jamais<br />le courrier manuellement.</h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                Ne perdez plus de temps à ouvrir, trier ou saisir des données. Nexus lit chaque lettre, extrait les échéances importantes et prépare vos actions. C'est comme avoir un assistant administratif disponible 24/7.
                            </p>
                            <ul className="space-y-4 mt-4">
                                <li className="flex items-center gap-4 text-sm font-medium text-gray-800 group cursor-default hover:translate-x-1 transition-transform">
                                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors"><IconScan className="w-3 h-3" /></div>
                                    Extraction automatique (TVA, Dates, IBAN)
                                </li>
                                <li className="flex items-center gap-4 text-sm font-medium text-gray-800 group cursor-default hover:translate-x-1 transition-transform">
                                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors"><IconBot className="w-3 h-3" /></div>
                                    Réponses juridiques rédigées par l'IA
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: STRATEGIC FOUNDATION SECTION (Freedom/Flexibility) - STRICTLY FULL SCREEN */}
            <StrategicFoundationSection />

            {/* NEW SECTION: SMART DISPATCH */}
            <SmartDispatchSection />

            {/* Integrations Section - Solar System Style with Data Packets - SEMI-CIRCLE BOTTOM ARCH */}
            <section id="features" className="h-screen flex flex-col justify-between px-6 bg-white overflow-hidden relative">
                {/* Subtle grid background */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                {/* Title Container - Padded from Top to avoid header overlap */}
                <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 pt-12 shrink-0">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Centralisez. Automatisez. Respirez.</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">Nexus connecte votre courrier physique à vos outils numériques préférés.</p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-600 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        +50 intégrations natives disponibles
                    </div>
                </div>

                {/* Orbit Animation Container - PUSHED TO BOTTOM TO CREATE ARCH EFFECT */}
                <div className="relative w-full flex-grow flex items-end justify-center overflow-hidden">
                    {/* The System Container - Translated Down to Hide Bottom Half */}
                    <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] flex items-center justify-center origin-center transform-gpu translate-y-[15%]">
                        {/* Central Node - BRAND ASSET */}
                        <div className="absolute z-30 w-24 h-24 bg-black rounded-3xl flex items-center justify-center text-white shadow-2xl ring-8 ring-white">
                            <IconNexus className="w-12 h-12 text-white" />
                        </div>

                        {/* ORBIT RINGS (The Tracks) - Thicker & Darker */}
                        <div className="absolute w-[180px] h-[180px] border border-gray-300 rounded-full z-0"></div>
                        <div className="absolute w-[320px] h-[320px] border border-gray-300 rounded-full z-0"></div>
                        <div className="absolute w-[460px] h-[460px] border border-gray-300 rounded-full z-0"></div>

                        {/* RING 1: INNER (Fast, Clockwise) */}
                        <div className="absolute w-[180px] h-[180px] animate-[spin_20s_linear_infinite] z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-2xl shadow-xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiSlack size={20} color="#4A154B" />
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-2xl shadow-xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiNotion size={20} color="#000000" />
                            </div>
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-2xl shadow-xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiGoogle size={20} color="#4285F4" />
                            </div>
                        </div>

                        {/* RING 2: MIDDLE (Medium, Counter-Clockwise) */}
                        <div className="absolute w-[320px] h-[320px] animate-[spin_30s_linear_infinite_reverse] z-10">
                            <div className="absolute top-1/4 left-[6%] -translate-x-1/2 bg-white p-3 rounded-2xl shadow-xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiAsana size={24} color="#F06A6A" />
                            </div>
                            <div className="absolute bottom-1/4 right-[6%] translate-x-1/2 bg-white p-3 rounded-2xl shadow-xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiTrello size={24} color="#0079BF" />
                            </div>
                            <div className="absolute bottom-[6%] left-1/4 bg-white p-3 rounded-2xl shadow-xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiDropbox size={24} color="#0061FF" />
                            </div>
                        </div>

                        {/* RING 3: OUTER (Slow, Clockwise) */}
                        <div className="absolute w-[460px] h-[460px] animate-[spin_45s_linear_infinite] z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-[2rem] shadow-2xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiSalesforce size={32} color="#00A1E0" />
                            </div>
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-[2rem] shadow-2xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiHubspot size={32} color="#FF7A59" />
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-[2rem] shadow-2xl border border-gray-200 hover:scale-110 transition-transform">
                                <SiStripe size={32} color="#635BFF" />
                            </div>
                        </div>

                        {/* Data Packets */}
                        <div className="absolute w-[320px] h-[320px] rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none">
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e]"></div>
                        </div>
                        <div className="absolute w-[180px] h-[180px] rounded-full animate-[spin_20s_linear_infinite] pointer-events-none">
                            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Bento Grid (High Polish) */}
            <section className="min-h-screen flex flex-col justify-center py-20 px-6 bg-[#FAFAFA] border-t border-gray-100 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto w-full h-full flex flex-col">
                    <div className="text-center mb-12 shrink-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-6">
                            Nexus_OS v2.0
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-gray-900 leading-tight">
                            Une mémoire d'entreprise<br />
                            <span className="text-gray-400">infaillible.</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">L'IA indexe chaque ligne de chaque document. Oubliez les dossiers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* Feature 1 - Semantic Search (Large) */}
                        <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden group hover:border-gray-300 transition-all flex flex-col justify-between h-full min-h-[500px]">
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-auto">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center border border-gray-200"><IconSearch className="w-4 h-4 text-gray-700" /></div>
                                        <span className="font-mono text-[10px] text-gray-400 uppercase">Semantic_Search_Engine</span>
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight mb-2 text-gray-900">Retrouvez tout, instantanément</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">Posez une question en langage naturel. Nexus parcourt des années d'archives en millisecondes pour trouver la réponse exacte.</p>
                                </div>

                                {/* Interactive Search UI Mockup */}
                                <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-lg max-w-lg mx-auto w-full overflow-hidden relative transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="p-3 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                                        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                        <div className="h-2 w-32 bg-gray-200 rounded-full"></div>
                                    </div>
                                    <div className="p-4 space-y-4">
                                        {/* User Query */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">V</div>
                                            <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 text-xs text-gray-800">
                                                Combien a-t-on payé d'électricité en mars ?
                                            </div>
                                        </div>
                                        {/* AI Response */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[10px] text-white"><IconNexus className="w-3 h-3" /></div>
                                            <div className="space-y-2 w-full">
                                                <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 shadow-sm text-xs text-gray-600 relative overflow-hidden">
                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                                                    <span className="font-semibold text-gray-900">342,50 €</span> à EDF Entreprises.
                                                    <div className="mt-2 flex items-center gap-2 p-1.5 bg-gray-50 rounded border border-gray-100">
                                                        <IconFileText className="w-3 h-3 text-gray-400" />
                                                        <span className="text-[10px] text-gray-500 truncate">Facture_EDF_Mars_2024.pdf</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stack: Automation & Legal */}
                        <div className="flex flex-col gap-4 md:gap-6 h-full">
                            {/* Feature 3 - Automation (Standard) */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden group hover:border-gray-300 transition-all flex-1 flex flex-col justify-center">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center border border-blue-100"><IconZap className="w-4 h-4 text-blue-600" /></div>
                                        <span className="font-mono text-[10px] text-blue-600 uppercase">Auto_Workflow</span>
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight mb-2">Pilote Automatique</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Créez des règles simples : "Si facture &gt; 500€, envoyer au comptable".</p>
                                </div>
                                {/* Flow visual */}
                                <div className="absolute right-0 bottom-0 opacity-50 translate-x-1/4 translate-y-1/4">
                                    <IconActivity className="w-32 h-32 text-blue-100" />
                                </div>
                            </div>

                            {/* Feature 4 - Legal Archiving (Standard) */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden group hover:border-gray-300 transition-all flex-1 flex flex-col justify-center">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded bg-purple-50 flex items-center justify-center border border-purple-100"><IconScale className="w-4 h-4 text-purple-600" /></div>
                                        <span className="font-mono text-[10px] text-purple-600 uppercase">Legal_Compliance</span>
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight mb-2">Valeur Probante</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Originaux en coffre-fort physique. Scans certifiés conformes.</p>
                                </div>
                                {/* Stamp visual */}
                                <div className="absolute right-6 bottom-6 rotate-[-15deg] border-2 border-purple-200 text-purple-200 px-2 py-1 rounded font-black text-xl opacity-50">
                                    CERTIFIÉ
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 - Security (Full Width) */}
                        <div className="md:col-span-3 bg-[#0A0A0A] rounded-2xl p-8 border border-gray-800 shadow-xl relative overflow-hidden group flex flex-col md:flex-row items-center gap-12">
                            {/* Cyber Grid Background */}
                            <div className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, .1) 25%, rgba(34, 197, 94, .1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .1) 75%, rgba(34, 197, 94, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, .1) 25%, rgba(34, 197, 94, .1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .1) 75%, rgba(34, 197, 94, .1) 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}>
                            </div>

                            <div className="relative z-10 flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center border border-gray-700"><IconShield className="w-4 h-4 text-green-500" /></div>
                                    <span className="font-mono text-[10px] text-green-500 uppercase">Vault_Security</span>
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Chiffrement Militaire & Souveraineté</h3>
                                <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                                    Vos données sont protégées par un chiffrement AES-256 bits de bout en bout.
                                    Hébergement certifié SecNumCloud en France. Conformité RGPD totale.
                                    Personne ne lit votre courrier à part vous.
                                </p>
                            </div>

                            {/* Visual Shield Animation */}
                            <div className="relative shrink-0">
                                <div className="relative w-40 h-40 flex items-center justify-center">
                                    <div className="absolute inset-0 border border-green-900/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute inset-4 border border-dashed border-green-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                    <IconShield className="w-16 h-16 text-green-500 relative z-10" />
                                    <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full animate-pulse"></div>
                                </div>
                                {/* Floating Lock Status */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 border border-green-500/30 px-3 py-1 rounded text-[10px] font-mono text-green-400 whitespace-nowrap">
                                    STATUS: LOCKED
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* NEW CUSTOMER REVIEWS SECTION (Infinite Marquee) */}
            <ReviewsSection />

            {/* Pricing Section (Clean & Sharp) */}
            <section id="pricing" className="py-32 px-6 bg-white border-t border-gray-100 relative overflow-hidden">
                {/* BRAND WATERMARK FOR PRICING */}
                <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03] transform translate-x-1/3 translate-y-1/3">
                    <IconNexus className="w-[600px] h-[600px] text-black" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold tracking-tighter mb-4">Un tarif simple. Sans engagement.</h2>
                        <p className="text-gray-500 text-lg">Investissez dans votre tranquillité d'esprit.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">Freelance</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold tracking-tighter">29€</span>
                                <span className="text-gray-400 text-sm">/mois</span>
                            </div>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">Pour les indépendants qui veulent séparer vie pro et vie perso.</p>
                            <ul className="space-y-4 mb-8">
                                {['Domiciliation Paris 8ème', 'Réception & Scan Illimité', 'Application mobile', 'Support chat'].map(feat => (
                                    <li key={feat} className="flex items-center gap-3 text-sm text-gray-600">
                                        <IconCheck className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" /> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 text-sm font-bold hover:bg-gray-100 hover:border-gray-300 transition-all">Commencer</button>
                        </div>

                        {/* Card 2 - Featured (Black) */}
                        <div className="bg-[#0A0A0A] text-white p-8 rounded-2xl border border-gray-800 shadow-2xl relative transform md:-translate-y-4 z-10 overflow-hidden">
                            {/* SUBTLE BRANDING IN CARD */}
                            <div className="absolute -right-10 -top-10 opacity-10">
                                <IconNexus className="w-40 h-40 text-white" />
                            </div>

                            <div className="absolute top-6 right-6 bg-white text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Populaire</div>
                            <h3 className="font-bold text-white mb-2 text-lg">Business</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold tracking-tighter">79€</span>
                                <span className="text-gray-400 text-sm">/mois</span>
                            </div>
                            <p className="text-xs text-gray-400 mb-8 leading-relaxed">Pour les sociétés qui veulent automatiser tout leur administratif.</p>
                            <div className="w-full h-px bg-gray-800 mb-8"></div>
                            <ul className="space-y-4 mb-8 relative z-10">
                                {['Tout inclus Freelance', 'IA Nexus (OCR & Actions)', 'Intégrations (Slack, Drive)', 'Multi-utilisateurs'].map(feat => (
                                    <li key={feat} className="flex items-center gap-3 text-sm text-gray-200 font-medium">
                                        <IconCheck className="w-4 h-4 text-green-500" /> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-10">Essayer gratuitement</button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 group">
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">Enterprise</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold tracking-tighter">Sur mesure</span>
                            </div>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">Pour les cabinets et structures à haut volume de courrier.</p>
                            <ul className="space-y-4 mb-8">
                                {['Comptes Multi-Sociétés', 'API dédiée', 'Onboarding personnalisé', 'SLA Garanti'].map(feat => (
                                    <li key={feat} className="flex items-center gap-3 text-sm text-gray-600">
                                        <IconCheck className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" /> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 text-sm font-bold hover:bg-gray-100 hover:border-gray-300 transition-all">Contacter les ventes</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA with subtle tech background */}
            <section className="py-32 px-6 text-center bg-[#FAFAFA] border-t border-gray-100 relative overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}>
                </div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 tracking-tighter leading-[0.9]">Prêt à oublier<br />le papier ?</h2>
                    <p className="text-xl text-gray-500 mb-12 font-light">Rejoignez les 500+ entreprises qui ont déjà digitalisé leur siège social.</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
                            Créer mon compte
                        </button>
                    </div>
                </div>
            </section>

        </Layout>
    );
}

export default App;
