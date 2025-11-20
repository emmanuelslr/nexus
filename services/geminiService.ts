import { GoogleGenAI, Type, Schema } from "@google/genai";

// Define the schema for the structured output we want from Gemini
const mailAnalysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "Un résumé concis du courrier en 2 phrases maximum.",
    },
    sender: {
      type: Type.STRING,
      description: "L'expéditeur identifié (entreprise ou personne).",
    },
    category: {
      type: Type.STRING,
      description: "La catégorie du courrier (ex: Juridique, Fiscal, Facture, Publicité).",
    },
    urgency: {
      type: Type.STRING,
      enum: ["Low", "Medium", "High", "Critical"],
      description: "Le niveau d'urgence estimé.",
    },
    suggestedAction: {
      type: Type.STRING,
      description: "L'action recommandée (ex: Payer avant le..., Archiver, Transférer au comptable).",
    },
    draftReply: {
      type: Type.STRING,
      description: "Un brouillon de réponse formel et professionnel si une réponse est nécessaire, sinon N/A.",
    },
    extractedDates: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Dates clés ou échéances trouvées dans le document.",
    },
    sentiment: {
      type: Type.STRING,
      description: "Le ton du courrier (Neutre, Menaçant, Informatif, Positif).",
    },
  },
  required: ["summary", "sender", "category", "urgency", "suggestedAction"],
};

export const analyzeMailWithGemini = async (mailText: string): Promise<any> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyse le courrier d'entreprise suivant. Agis comme un assistant administratif expert pour une entreprise française.
      
      Courrier:
      ${mailText}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: mailAnalysisSchema,
        systemInstruction: "Tu es NexusAI, un moteur d'intelligence artificielle spécialisé dans la gestion documentaire d'entreprise (Legal, Finance, RH). Sois précis, professionnel et synthétique.",
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error("Error analyzing mail:", error);
    throw error;
  }
};