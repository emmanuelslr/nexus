
import React, { useState, useEffect } from 'react';
import { MailItem, MailAnalysis, UrgencyLevel } from '../types';
import { analyzeMailWithGemini } from '../services/geminiService';
import { IconMail, IconZap, IconBot, IconCheck, IconSlack, IconDrive, IconArrowRight, IconScan } from './Icons';

const MOCK_MAIL: MailItem = {
  id: 'mail-001',
  title: 'DGFIP - Avis de Mise en Recouvrement',
  previewText: 'Direction Générale des Finances Publiques. Avis de mise en recouvrement n° 243...',
  date: 'Aujourd\'hui',
  status: 'unread',
  imageUrl: 'https://picsum.photos/600/800?grayscale',
  content: `RÉPUBLIQUE FRANÇAISE
DIRECTION GÉNÉRALE DES FINANCES PUBLIQUES

SERVICE DES IMPÔTS DES ENTREPRISES
75000 PARIS

Objet : Avis de mise en recouvrement - Rappel
Référence : 2023-TVA-Q4-99283

Madame, Monsieur,

Sauf erreur ou omission de notre part, le paiement de la TVA pour le 4ème trimestre 2023, dont la date limite était fixée au 15 Janvier 2024, ne nous est pas parvenu à ce jour.

Le montant principal est de 4 500,00 €.
Des majorations de retard de 10% (450,00 €) sont désormais applicables.

Montant total dû : 4 950,00 €.

Nous vous mettons en demeure de régulariser cette situation sous 8 jours. À défaut, nous procéderons aux mesures d'exécution forcée prévues par la loi.

Veuillez agréer, Madame, Monsieur, l'expression de nos salutations distinguées.`
};

const HighlightedContent = ({ text }: { text: string }) => {
    const parts = text.split(/(\d{1,2}\s[A-Z][a-z]+\s\d{4}|4\s?500,00\s?€|4\s?950,00\s?€|sous 8 jours)/g);
    
    return (
        <div className="whitespace-pre-line font-serif text-[13px] md:text-[14px] text-gray-800 leading-relaxed">
            {parts.map((part, i) => {
                if (part.match(/4\s?500,00\s?€|4\s?950,00\s?€/)) {
                    return <span key={i} className="bg-red-50 text-red-700 px-1 rounded-sm font-medium border-b border-red-200">{part}</span>;
                }
                if (part.match(/\d{1,2}\s[A-Z][a-z]+\s\d{4}|sous 8 jours/)) {
                    return <span key={i} className="bg-yellow-50 text-yellow-700 px-1 rounded-sm font-medium border-b border-yellow-200">{part}</span>;
                }
                return <span key={i}>{part}</span>;
            })}
        </div>
    );
};

export const DemoDashboard: React.FC = () => {
  const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);
  const [analysis, setAnalysis] = useState<MailAnalysis | null>(null);
  const [isDigital, setIsDigital] = useState(false); // New state for Physical vs Digital view
  const [loading, setLoading] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);

  // Auto-analyze when switching to digital
  useEffect(() => {
    if (isDigital && !analysis && !loading) {
        handleAnalyze();
    }
  }, [isDigital]);

  const handleAnalyze = async () => {
    setLoading(true);
    setProcessingStep(1);
    
    try {
      // Accelerated timings for snappier feel
      await new Promise(r => setTimeout(r, 300));
      setProcessingStep(2);
      await new Promise(r => setTimeout(r, 300));
      setProcessingStep(3);
      await new Promise(r => setTimeout(r, 300));

      const result = await analyzeMailWithGemini(selectedMail?.content || '');
      setAnalysis(result);
    } catch (e) {
      setAnalysis({
        summary: "Notification de retard de paiement de TVA T4 2023.",
        sender: "DGFIP",
        category: "Fiscal",
        urgency: UrgencyLevel.CRITICAL,
        suggestedAction: "Payer 4 950,00 € immédiatement.",
        draftReply: "Paiement effectué ce jour.",
        extractedDates: ["15 Janvier 2024"],
        sentiment: "Critique"
      });
    } finally {
      setLoading(false);
      setProcessingStep(0);
    }
  };

  const startTransition = () => {
      setIsDigital(true);
  };

  useEffect(() => {
    setSelectedMail(MOCK_MAIL);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto transition-all duration-500">
        <div className="h-[550px] rounded-xl border border-gray-200 bg-white shadow-2xl flex overflow-hidden relative">
        
        {/* STATE 1: PHYSICAL MAIL (The "Nightmare") */}
        <div className={`absolute inset-0 z-50 bg-gray-100 flex flex-col items-center justify-center transition-all duration-700 ${isDigital ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100'}`}>
             {/* The Envelope Graphic */}
             <div className="relative group cursor-pointer" onClick={startTransition}>
                {/* Shadow/Stack effect */}
                <div className="absolute top-2 left-2 w-full h-full bg-white border border-gray-200 rounded shadow-sm rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="absolute top-1 left-1 w-full h-full bg-white border border-gray-200 rounded shadow-sm -rotate-2 transition-transform group-hover:-rotate-4"></div>
                
                {/* Main Envelope */}
                <div className="relative w-[400px] h-[260px] bg-[#fdfbf7] border border-gray-300 rounded shadow-xl flex flex-col p-6 rotate-0 transition-transform group-hover:scale-[1.02] duration-500">
                     {/* Stamps */}
                     <div className="absolute top-4 right-4 w-20 h-20 border-4 border-red-800/20 rounded-full flex items-center justify-center transform rotate-12 opacity-80">
                        <span className="text-red-800/40 font-black text-xs uppercase tracking-widest">Urgent</span>
                     </div>
                     <div className="absolute top-4 right-4 w-16 h-16 border-2 border-red-800/20 rounded-full"></div>
                     
                     {/* Sender Info */}
                     <div className="mt-8 ml-4 blur-[0.5px]">
                        <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center font-bold text-xs rounded mb-2">RF</div>
                        <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">DGFIP - Service des Impôts</div>
                        <div className="text-[10px] text-gray-500">75000 PARIS</div>
                     </div>

                     {/* Window Address */}
                     <div className="mt-auto self-end bg-gray-900/5 w-48 h-16 rounded border border-gray-900/10 flex items-center pl-4 mb-4 mr-8 backdrop-blur-sm">
                        <div className="text-xs font-mono text-gray-600">
                            Nexus Corp<br/>
                            75008 Paris
                        </div>
                     </div>
                </div>

                {/* Action Button Overlay - ALWAYS VISIBLE AND ENHANCED */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-center">
                    {/* Pulsing Aura */}
                    <div className="absolute inset-0 rounded-full bg-green-500/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>

                    <button 
                        onClick={(e) => { e.stopPropagation(); startTransition(); }}
                        className="relative overflow-hidden bg-[#0A0A0A] text-white px-8 py-5 rounded-full font-bold text-sm shadow-[0_0_50px_-10px_rgba(34,197,94,0.6)] flex items-center gap-4 hover:scale-105 transition-all duration-300 border border-green-500/50 group/btn ring-4 ring-green-500/10 backdrop-blur-md"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                        
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 relative z-10 shadow-lg animate-[pulse_2s_infinite]">
                            <IconScan className="w-5 h-5 text-black" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="tracking-wide relative z-10 leading-none text-base">Laisser l'IA s'occuper de votre courrier</span>
                            <span className="text-[10px] text-green-400 font-mono mt-1.5 uppercase tracking-widest">Numérisation Instantanée</span>
                        </div>
                    </button>

                    {/* Fake Cursor Hint */}
                    <div className="absolute -bottom-12 right-0 pointer-events-none animate-[bounce_2s_infinite]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4 20L3 3L18.6 10.6L11.6 12.8L16.8 18L14 20.8L8.8 15.6L8.4 20Z" fill="black" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
             </div>
        </div>

        {/* STATE 2: DIGITAL DASHBOARD (The "Dream") */}
        <div className={`w-full h-full flex transition-all duration-1000 delay-200 ${isDigital ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
            
            {/* COL 1: INBOX LIST */}
            <div className="w-60 flex flex-col border-r border-gray-100 bg-gray-50/50 flex-shrink-0">
                <div className="p-4 border-b border-gray-100 flex items-center gap-2 h-14">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-semibold text-gray-700 tracking-tight">Boîte de réception (1)</span>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-sm cursor-pointer ring-1 ring-black/5">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-gray-900">DGFIP</span>
                            <span className="text-[10px] text-gray-400">10:23</span>
                        </div>
                        <div className="text-[11px] text-gray-500 font-medium truncate">Avis de Mise en Recouvrement</div>
                        <div className="mt-2 flex gap-1">
                            <span className="text-[9px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-medium">Fiscal</span>
                        </div>
                    </div>
                    
                    {[1,2,3].map((i) => (
                        <div key={i} className="p-3 rounded-lg opacity-30 border border-transparent">
                            <div className="flex justify-between items-start mb-2">
                                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                <div className="h-2 w-8 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-2 w-24 bg-gray-100 rounded mt-1"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* COL 2: DOCUMENT VIEW */}
            <div className="flex-1 flex flex-col bg-white relative z-0 min-w-0">
                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white sticky top-0 z-10 shrink-0">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-6 h-6 shrink-0 bg-black text-white rounded flex items-center justify-center text-[10px] font-bold">RF</div>
                        <h3 className="font-semibold text-gray-900 text-sm truncate">Avis de Mise en Recouvrement - DGFIP</h3>
                    </div>
                    <div className="flex gap-2 shrink-0">
                        <div className="px-2 py-1 rounded bg-gray-100 text-[10px] font-medium text-gray-600">PDF</div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB] flex justify-center relative">
                    {/* Loading Overlay - SCANNER EFFECT */}
                    {loading && (
                         <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center overflow-hidden">
                             {/* Scanning Line */}
                             <div className="absolute top-0 w-full h-2 bg-green-500/50 shadow-[0_0_30px_#22c55e] animate-[scanDown_1.5s_ease-in-out_infinite]"></div>
                             
                             <div className="flex items-center gap-3 mb-4 relative z-10">
                                 <IconScan className="w-8 h-8 text-green-600 animate-pulse" />
                             </div>
                             <div className="font-mono text-sm text-gray-900 uppercase tracking-widest font-bold relative z-10">
                                {processingStep === 1 && "Numérisation OCR..."}
                                {processingStep === 2 && "Analyse Sémantique..."}
                                {processingStep === 3 && "Extraction des entités..."}
                             </div>
                             <div className="font-mono text-[10px] text-green-600 mt-2 relative z-10">
                                 AI_CONFIDENCE: 99.9%
                             </div>
                         </div>
                    )}

                    <div className="bg-white shadow-sm border border-gray-200 w-full max-w-lg min-h-[600px] p-8 relative transition-all duration-700">
                        {analysis ? (
                            <HighlightedContent text={selectedMail?.content || ''} />
                        ) : (
                            <div className="whitespace-pre-line font-serif text-[13px] text-gray-800 leading-relaxed blur-[1px] select-none opacity-50">
                                {selectedMail?.content}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* COL 3: AI ACTION CENTER */}
            <div className={`w-[280px] bg-white border-l border-gray-100 flex flex-col transition-all duration-700 shrink-0 ${analysis ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="p-4 border-b border-gray-100 bg-white h-14 flex items-center">
                    <div className="flex items-center gap-2 text-gray-900 font-bold tracking-tight text-xs uppercase">
                        <IconBot className="w-4 h-4 text-green-600" />
                        Analyse Nexus
                    </div>
                </div>

                {analysis && (
                    <div className="flex-1 overflow-y-auto p-4 space-y-5">
                        {/* Summary Block */}
                        <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Résumé</span>
                            <p className="text-xs text-gray-600 leading-relaxed border-l-2 border-black pl-3 py-0.5">
                                {analysis.summary}
                            </p>
                        </div>

                        {/* Meta Data */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="p-2 rounded border border-gray-100 bg-gray-50">
                                <div className="text-[9px] text-gray-400 uppercase">Type</div>
                                <div className="text-[11px] font-semibold text-gray-900">{analysis.category}</div>
                            </div>
                            <div className="p-2 rounded border border-red-100 bg-red-50/50">
                                <div className="text-[9px] text-red-400 uppercase">Priorité</div>
                                <div className="text-[11px] font-bold text-red-600">{analysis.urgency}</div>
                            </div>
                        </div>

                        {/* Workflow Visualization */}
                        <div className="space-y-2">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Actions proposées</span>
                            
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors group cursor-pointer hover:shadow-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded flex items-center justify-center bg-[#E01E5A]/10 text-[#E01E5A]">
                                            <IconSlack className="w-3 h-3" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-bold text-gray-900">Notifier Finance</span>
                                            <span className="text-[9px] text-gray-400">#compta</span>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all">
                                        <IconCheck className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors group cursor-pointer hover:shadow-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded flex items-center justify-center bg-blue-500/10 text-blue-600">
                                            <IconDrive className="w-3 h-3" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-bold text-gray-900">Archiver</span>
                                            <span className="text-[9px] text-gray-400">/Fiscalité_2024</span>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all">
                                        <IconCheck className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button className="w-full bg-black text-white rounded-lg px-4 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                                Exécuter les actions
                                <IconArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};
