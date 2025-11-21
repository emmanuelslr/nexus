import React from 'react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all">
    <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
        <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center text-white text-xs font-serif">N</div>
        Nexus
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">
        <a href="#product" className="hover:text-black transition-colors">Produit</a>
        <a href="#infrastructure-assets" className="hover:text-black transition-colors">Domiciliation</a>
        <a href="#pricing" className="hover:text-black transition-colors">Tarifs</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="#" className="hidden md:block text-sm text-gray-600 hover:text-black font-medium transition-colors">Connexion</a>
        <a href="#" className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-all shadow-sm">
          Essai Gratuit
        </a>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t border-gray-100 bg-white py-20">
    <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="max-w-xs">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-6 text-gray-900">
          <div className="w-6 h-6 bg-black rounded-md text-white flex items-center justify-center text-xs font-serif">N</div>
          Nexus
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          L'infrastructure administrative nouvelle génération pour les entrepreneurs ambitieux.
        </p>
      </div>

      <div className="flex gap-20">
        <div>
          <h4 className="text-gray-900 font-bold mb-6 text-sm">Produit</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-black transition-colors">Domiciliation</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Gestion du courrier</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Automatisation IA</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Intégrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-bold mb-6 text-sm">Société</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-black transition-colors">À propos</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Carrières</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-bold mb-6 text-sm">Légal</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-black transition-colors">CGV</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Confidentialité</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Mentions légales</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
      <p>© 2024 Nexus Inc. Tous droits réservés.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-900">Twitter</a>
        <a href="#" className="hover:text-gray-900">LinkedIn</a>
        <a href="#" className="hover:text-gray-900">Instagram</a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased selection:bg-black selection:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
