import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowRight, IconSearch, IconCheck, IconLock, IconMapPin, IconBuilding, IconWifi, IconScan } from './Icons';

const FeatureCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay }}
        className={`relative overflow-hidden rounded-[2.5rem] border border-gray-200/60 shadow-sm hover:shadow-2xl hover:border-gray-300/80 transition-all duration-500 group ${className}`}
    >
        {children}
    </motion.div>
);

// --- Animation Components ---

const PhoneSearchDemo = () => {
    const [searchText, setSearchText] = useState("");
    const [scanning, setScanning] = useState(true);
    const [filteredItems, setFilteredItems] = useState([
        { id: 1, title: "Facture EDF", date: "12 oct.", type: "Facture" },
        { id: 2, title: "Avis d'impôt 2024", date: "06 oct.", type: "Fiscal", highlight: true },
        { id: 3, title: "URSSAF Trimestre 3", date: "23 sept.", type: "Social" },
        { id: 4, title: "Kbis Extrait", date: "10 sept.", type: "Juridique" },
    ]);

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                setSearchText("");
                setScanning(true);
                await new Promise(r => setTimeout(r, 2000));

                // Start Typing
                const text = "Impôt";
                for (let i = 0; i <= text.length; i++) {
                    setSearchText(text.slice(0, i));
                    await new Promise(r => setTimeout(r, 150));
                }

                // Search Complete - Stop Scan, Lock Target
                setScanning(false);
                await new Promise(r => setTimeout(r, 3000));
            }
        };
        sequence();
    }, []);

    return (
        <div className="relative w-[280px] h-[450px] bg-[#0a0a0a] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden mx-auto transform translate-y-12">
            {/* Screen Reflection/Gloss */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-30 rounded-[2.3rem]"></div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0a] rounded-b-xl z-20 flex justify-center items-end pb-1">
                <div className="w-10 h-1 bg-[#1a1a1a] rounded-full"></div>
            </div>

            {/* HUD Overlay (Tech Layer) */}
            <div className="absolute inset-0 pointer-events-none z-20 p-4 flex flex-col justify-between">
                {/* Top Corners */}
                <div className="flex justify-between">
                    <div className="w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg"></div>
                    <div className="w-4 h-4 border-t-2 border-r-2 border-blue-500/50 rounded-tr-lg"></div>
                </div>

                {/* Scanning Line */}
                {scanning && (
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                        className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-30"
                    >
                        <div className="absolute right-2 -top-2 text-[8px] text-cyan-400 font-mono">SCANNING...</div>
                    </motion.div>
                )}

                {/* Bottom Corners + Data */}
                <div className="flex justify-between items-end">
                    <div className="w-4 h-4 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg"></div>
                    <div className="text-[8px] text-blue-400/60 font-mono leading-tight">
                        OCR: ACTIVE<br />
                        DB: CONNECTED<br />
                        SECURE: YES
                    </div>
                    <div className="w-4 h-4 border-b-2 border-r-2 border-blue-500/50 rounded-br-lg"></div>
                </div>
            </div>

            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black pt-12 px-4 flex flex-col relative">
                {/* Ambient Light inside phone */}
                <div className="absolute top-0 left-0 w-full h-64 bg-blue-500/10 blur-[50px] pointer-events-none"></div>

                {/* Search Bar */}
                <div className="relative z-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center px-3 gap-2 mb-6 border border-white/5">
                    <IconSearch className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-white font-medium font-mono">
                        {searchText}
                        <span className="animate-pulse text-cyan-400">_</span>
                    </span>
                </div>

                {/* List */}
                <div className="space-y-3 relative z-10">
                    <AnimatePresence>
                        {filteredItems.map((item) => {
                            const isMatch = searchText.length > 2 && item.title.toLowerCase().includes(searchText.toLowerCase());
                            const isDimmed = searchText.length > 2 && !isMatch;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: isDimmed ? 0.1 : 1,
                                        scale: isMatch ? 1.02 : 1,
                                        x: isMatch ? 5 : 0,
                                        y: 0
                                    }}
                                    className={`relative p-3 rounded-xl border transition-colors duration-300 ${isMatch ? 'bg-cyan-900/20 border-cyan-500/50' : 'bg-white/5 border-white/5'}`}
                                >
                                    {/* Target Lock Effect */}
                                    {isMatch && (
                                        <motion.div
                                            layoutId="targetBox"
                                            className="absolute -inset-[2px] border-2 border-cyan-400 rounded-xl z-20"
                                            initial={{ opacity: 0, scale: 1.2 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400"></div>
                                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400"></div>
                                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400"></div>
                                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400"></div>
                                        </motion.div>
                                    )}

                                    <div className="flex justify-between items-start mb-1">
                                        <div className={`text-xs font-medium ${isMatch ? 'text-cyan-100' : 'text-gray-200'}`}>{item.title}</div>
                                        <div className="text-[10px] text-gray-500">{item.date}</div>
                                    </div>
                                    <div className="text-[10px] text-gray-400">{item.type}</div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Floating Result Count */}
                <motion.div
                    animate={{ opacity: searchText.length > 2 ? 1 : 0, y: searchText.length > 2 ? 0 : 10 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-cyan-500 text-black rounded-full text-xs font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2 z-20 font-mono tracking-tight"
                >
                    <IconScan className="w-3 h-3" />
                    MATCH FOUND
                </motion.div>
            </div>
        </div>
    );
};

const PrivacyShield = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Background: Public Internet - Animated Grid */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-20 transform scale-150">
                {[...Array(64)].map((_, i) => (
                    <div key={i} className="bg-gray-200 rounded-[1px] animate-pulse" style={{ animationDelay: `${Math.random() * 3}s`, animationDuration: '2s' }}></div>
                ))}
            </div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-white"></div>

            {/* Card Container */}
            <div className="relative w-64 h-32">
                {/* Personal Address (Blurring out) */}
                <motion.div
                    animate={{ opacity: [1, 0, 0, 1], filter: ["blur(0px)", "blur(20px)", "blur(20px)", "blur(0px)"] }}
                    transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 flex flex-col justify-center items-center shadow-sm z-0"
                >
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mb-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                    <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-gray-100 rounded"></div>
                </motion.div>

                {/* Nexus Address (Sliding in) */}
                <motion.div
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                    transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0 bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 flex flex-col justify-center items-center shadow-2xl z-10"
                >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl pointer-events-none"></div>

                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-2 border border-white/10">
                        <IconLock className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-white text-xs font-bold mb-1">Nexus Privacy</div>
                    <div className="text-gray-400 text-[10px]">Adresse Sécurisée</div>
                </motion.div>
            </div>
        </div>
    );
};

const NomadAnimation = () => {
    const locations = [
        { x: 80, y: -60, label: "Lyon", status: "En déplacement" },
        { x: -80, y: 40, label: "Bordeaux", status: "Télétravail" },
        { x: 90, y: 50, label: "Marseille", status: "Réunion" },
        { x: -70, y: -50, label: "Lille", status: "Mission" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % locations.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentLoc = locations[currentIndex];

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Map Background */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
                backgroundSize: '30px 30px'
            }}></div>

            {/* Connection Line (The Tether) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <motion.line
                    x1="50%" y1="50%"
                    animate={{
                        x2: `calc(50% + ${currentLoc.x}px)`,
                        y2: `calc(50% + ${currentLoc.y}px)`
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    stroke="black"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-20"
                />
            </svg>

            {/* Paris HQ (Fixed Center) */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/50 relative">
                    <IconBuilding className="w-8 h-8 text-white" />
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-2xl border border-black/30 animate-ping"></div>
                </div>
                <div className="mt-3 px-3 py-1 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Siège Social
                </div>
            </div>

            {/* The Nomad (Orbiting User) */}
            <motion.div
                className="absolute z-20"
                animate={{ x: currentLoc.x, y: currentLoc.y }}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
            >
                <div className="relative group">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full p-1 bg-white shadow-xl">
                        <img
                            src="/assets/people/kinga-howard-5qNTJcCckmc-unsplash.jpg"
                            alt="Nomad User"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                    {/* Status Badge (Floating) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={currentIndex} // Re-animate on change
                        className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-black/90 text-white text-xs rounded-xl shadow-lg flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        {currentLoc.status} <span className="text-gray-400">|</span> {currentLoc.label}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export const Features = () => {
    return (
        <section className="relative bg-white py-32 px-6 text-gray-900 overflow-hidden">
            {/* Ambient Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-gray-100 rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-[blob_10s_infinite]"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-gray-200 rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-[blob_10s_infinite_reverse]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900"
                    >
                        Pourquoi se domicilier <br />
                        <span className="text-gray-500">
                            avec Nexus ?
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500"
                    >
                        Une technologie invisible pour une tranquillité visible.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Scan & Search (Large) */}
                    <FeatureCard className="md:col-span-2 h-[500px] flex flex-col md:flex-row p-0 bg-white shadow-lg">
                        <div className="p-10 md:w-1/2 flex flex-col justify-center z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-bold text-gray-900 mb-6 w-fit shadow-sm">
                                <IconSearch className="w-3 h-3" />
                                OCR INTELLIGENT
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ne perdez plus jamais un document</h3>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Notre moteur de recherche indexe chaque mot de votre courrier. Retrouvez une facture d'il y a 2 ans en 0.5 seconde.
                            </p>
                        </div>
                        <div className="md:w-1/2 h-full relative flex items-end justify-center bg-gradient-to-b from-gray-50/50 to-gray-100/50">
                            {/* Glow behind phone */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-blue-500/20 blur-[80px]"></div>
                            <PhoneSearchDemo />
                        </div>
                    </FeatureCard>

                    {/* Card 2: Privacy (Tall) */}
                    <FeatureCard className="md:col-span-1 h-[500px] p-8 flex flex-col bg-white/80 backdrop-blur-xl shadow-lg" delay={0.2}>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Anonymat total</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Votre adresse personnelle reste privée. Nexus agit comme un bouclier entre votre vie privée et le registre public.
                            </p>
                        </div>
                        <div className="flex-1 relative">
                            <PrivacyShield />
                        </div>
                    </FeatureCard>

                    {/* Card 3: Economy (Wide) */}
                    <FeatureCard className="md:col-span-1 h-[400px] p-8 flex flex-col justify-center items-center text-center bg-[#050505] text-white shadow-2xl relative overflow-hidden" delay={0.3}>
                        {/* Rich Dark Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#050505] to-black"></div>

                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 tracking-tighter"
                            >
                                500€
                            </motion.div>
                            <p className="text-xl font-medium text-gray-400 mb-4">d'économie / an</p>
                            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 backdrop-blur-md">
                                Sur la CFE à Paris 8ème
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 4: Flexibility (Large) */}
                    <FeatureCard className="md:col-span-2 h-[400px] p-10 flex flex-row items-center overflow-hidden bg-white shadow-lg" delay={0.4}>
                        <div className="w-1/2 relative z-10">
                            <h3 className="text-3xl font-bold mb-4 text-gray-900">Liberté géographique</h3>
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                Déménagez, voyagez, changez de bureaux : votre siège social reste stable. La continuité de votre entreprise est assurée.
                            </p>
                            <button className="text-gray-900 font-bold border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors flex items-center gap-2">
                                Voir les villes disponibles <IconArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-50 flex items-center justify-center overflow-hidden">
                            <NomadAnimation />
                        </div>
                    </FeatureCard>

                </div>
            </div>
            <style>{`
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
