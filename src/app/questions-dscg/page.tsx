'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, EyeOff, Lightbulb } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';

interface DSCGQuestion {
  id: number;
  title: string;
  context: string;
  question: string;
  points: number;
  correction: string[];
  methodology: string[];
  keyPoints: string[];
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: 1,
    title: "Analyse comparative des modèles cloud",
    context: "L&apos;entreprise TECHNO SA, spécialisée dans le développement de logiciels, souhaite externaliser son infrastructure informatique. Elle hésite entre trois solutions : IaaS, PaaS et SaaS pour différents besoins.",
    question: "Analysez les avantages et inconvénients de chaque modèle cloud (IaaS, PaaS, SaaS) pour TECHNO SA. Proposez une recommandation argumentée en fonction des besoins spécifiques d&apos;une entreprise de développement logiciel.",
    points: 15,
    correction: [
      "**IaaS (Infrastructure as a Service) :**",
      "• Avantages : Contrôle total sur l&apos;OS et les applications, flexibilité maximale, adaptation aux besoins spécifiques",
      "• Inconvénients : Gestion technique complexe, nécessite des compétences internes, responsabilité de la maintenance",
      "",
      "**PaaS (Platform as a Service) :**",
      "• Avantages : Plateforme de développement prête, focus sur le code, outils intégrés, scalabilité automatique",
      "• Inconvénients : Moins de contrôle sur l&apos;infrastructure, dépendance au fournisseur, limitations techniques",
      "",
      "**SaaS (Software as a Service) :**",
      "• Avantages : Aucune maintenance, mise à jour automatique, coûts prévisibles",
      "• Inconvénients : Aucune personnalisation, dépendance totale, pas adapté au développement sur mesure",
      "",
      "**Recommandation pour TECHNO SA :**",
      "• PaaS pour le développement (focus sur le code, outils intégrés)",
      "• IaaS pour les environnements de production critiques (contrôle total)",
      "• SaaS pour les outils métier (CRM, comptabilité, RH)"
    ],
    methodology: [
      "1. Identifier les besoins spécifiques de l&apos;entreprise",
      "2. Analyser chaque modèle selon des critères définis",
      "3. Évaluer les avantages/inconvénients pour chaque usage",
      "4. Proposer une solution hybride adaptée",
      "5. Justifier les choix par des arguments techniques et économiques"
    ],
    keyPoints: [
      "Adapter le modèle cloud aux besoins métier",
      "Considérer le niveau de contrôle souhaité",
      "Évaluer les compétences internes disponibles",
      "Penser à une approche hybride"
    ]
  },
  {
    id: 2,
    title: "Choix d&apos;un datacenter et classification Tier",
    context: "La société FINANCE PLUS doit choisir un datacenter pour héberger ses applications critiques de trading. Elle compare trois offres : Tier 1 (99,67%), Tier 3 (99,98%) et Tier 4 (99,99%).",
    question: "Analysez les implications de chaque niveau Tier en termes de disponibilité, coûts et risques. Quelle recommandation feriez-vous pour une application de trading financier ? Justifiez votre réponse en calculant l&apos;impact des temps d&apos;arrêt.",
    points: 12,
    correction: [
      "**Analyse des niveaux Tier :**",
      "",
      "**Tier 1 (99,67% disponibilité) :**",
      "• Temps d&apos;arrêt annuel : ~29 heures",
      "• Coût : Le plus bas",
      "• Risque : Élevé pour applications critiques",
      "• Infrastructure : Non redondée",
      "",
      "**Tier 3 (99,98% disponibilité) :**",
      "• Temps d&apos;arrêt annuel : ~1,6 heure",
      "• Coût : Modéré",
      "• Risque : Acceptable pour la plupart des applications",
      "• Infrastructure : Maintenance sans arrêt",
      "",
      "**Tier 4 (99,99% disponibilité) :**",
      "• Temps d&apos;arrêt annuel : <24 minutes",
      "• Coût : Le plus élevé",
      "• Risque : Minimal",
      "• Infrastructure : Totalement redondée",
      "",
      "**Recommandation pour FINANCE PLUS :**",
      "• **Tier 4 obligatoire** pour le trading financier",
      "• Justification : Chaque minute d&apos;arrêt peut coûter des millions",
      "• Le surcoût est négligeable face aux pertes potentielles",
      "• Exigences réglementaires de continuité d&apos;activité"
    ],
    methodology: [
      "1. Calculer les temps d&apos;arrêt pour chaque Tier",
      "2. Évaluer l&apos;impact financier des interruptions",
      "3. Analyser les coûts de chaque solution",
      "4. Considérer les aspects réglementaires",
      "5. Faire un arbitrage coût/risque/bénéfice"
    ],
    keyPoints: [
      "Le trading nécessite une disponibilité maximale",
      "Calculer le coût des interruptions de service",
      "Considérer les obligations réglementaires",
      "Tier 4 = investissement, pas un coût"
    ]
  },
  {
    id: 3,
    title: "Stratégie d&apos;externalisation et gestion des risques",
    context: "L&apos;entreprise RETAIL CORP envisage d&apos;externaliser complètement son SI. Le directeur général souhaite réduire les coûts de 30% tout en améliorant la performance. Le DSI s&apos;inquiète des risques de sécurité et de dépendance.",
    question: "Élaborez une stratégie d'externalisation équilibrée qui répond aux objectifs du DG tout en tenant compte des préoccupations du DSI. Identifiez les risques majeurs et proposez des mesures de mitigation.",
    points: 18,
    correction: [
      "**Stratégie d&apos;externalisation recommandée :**",
      "",
      "**1. Approche progressive (3 phases) :**",
      "• Phase 1 : Applications non-critiques (CRM, RH) → SaaS",
      "• Phase 2 : Infrastructure de développement → PaaS",
      "• Phase 3 : Applications métier critiques → Cloud privé/hybride",
      "",
      "**2. Répartition des responsabilités :**",
      "• Externalisation : Infrastructure, maintenance, sécurité technique",
      "• Interne : Gouvernance, sécurité des données, stratégie",
      "",
      "**3. Risques identifiés et mitigation :**",
      "• **Dépendance fournisseur** → Contrats avec clauses de réversibilité",
      "• **Sécurité des données** → Chiffrement, audits réguliers, certifications",
      "• **Perte de contrôle** → SLA stricts, tableaux de bord, gouvernance renforcée",
      "• **Coûts cachés** → Analyse TCO détaillée, benchmark régulier",
      "",
      "**4. Mesures de gouvernance :**",
      "• Comité de pilotage mensuel",
      "• KPI de performance et de sécurité",
      "• Plan de continuité d&apos;activité",
      "• Stratégie de sortie documentée"
    ],
    methodology: [
      "1. Analyser les objectifs et contraintes",
      "2. Définir une approche progressive",
      "3. Identifier et évaluer tous les risques",
      "4. Proposer des mesures de mitigation",
      "5. Établir un plan de gouvernance",
      "6. Prévoir les mécanismes de contrôle"
    ],
    keyPoints: [
      "Équilibrer réduction des coûts et maîtrise des risques",
      "Approche progressive pour limiter l&apos;exposition",
      "Gouvernance renforcée indispensable",
      "Prévoir la réversibilité dès le départ"
    ]
  }
];

export default function QuestionsDSCG() {

  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});
  const [showMethodology, setShowMethodology] = useState<{ [key: number]: boolean }>({});

  const toggleCorrection = (questionId: number) => {
    setShowCorrection(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const toggleMethodology = (questionId: number) => {
    setShowMethodology(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <Award className="h-6 w-6 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Cas pratiques</h1>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">📋 Instructions</h2>
            <ul className="text-blue-800 space-y-2">
              <li>• Traitez chaque question comme un cas d&apos;examen DSCG</li>
              <li>• Structurez vos réponses avec une introduction, un développement et une conclusion</li>
              <li>• Utilisez le vocabulaire technique approprié</li>
              <li>• Justifiez vos recommandations par des arguments économiques et techniques</li>
              <li>• Consultez la méthodologie avant de commencer</li>
            </ul>
          </div>

          <div className="space-y-8">
            {dscgQuestions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Question {question.id}
                      </span>
                      <span className="text-gray-600 text-sm">{question.points} points</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{question.title}</h3>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Contexte :</h4>
                  <p className="text-gray-700">{question.context}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
                  <p className="text-blue-800">{question.question}</p>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <button
                    onClick={() => toggleMethodology(question.id)}
                    className="flex items-center gap-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Lightbulb className="h-4 w-4" />
                    {showMethodology[question.id] ? 'Masquer' : 'Voir'} la méthodologie
                  </button>
                  
                  <button
                    onClick={() => toggleCorrection(question.id)}
                    className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg transition-colors"
                  >
                    {showCorrection[question.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {showCorrection[question.id] ? 'Masquer' : 'Voir'} la correction
                  </button>
                </div>

                <AnimatePresence>
                  {showMethodology[question.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4"
                    >
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-3">💡 Méthodologie recommandée :</h4>
                        <ol className="text-yellow-800 space-y-1">
                          {question.methodology.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                        
                        <div className="mt-4 pt-4 border-t border-yellow-200">
                          <h5 className="font-semibold text-yellow-900 mb-2">🎯 Points clés à retenir :</h5>
                          <ul className="text-yellow-800 space-y-1">
                            {question.keyPoints.map((point, pointIndex) => (
                              <li key={pointIndex}>• {point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {showCorrection[question.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-3">✅ Correction détaillée :</h4>
                        <div className="text-green-800 space-y-2">
                          {question.correction.map((line, lineIndex) => (
                            <div key={lineIndex}>
                              {line.startsWith('**') && line.endsWith('**') ? (
                                <div className="font-semibold mt-3 mb-1">
                                  {line.replace(/\*\*/g, '')}
                                </div>
                              ) : line === '' ? (
                                <div className="h-2"></div>
                              ) : (
                                <div>{line}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">🎓 Conseils pour l&apos;examen DSCG</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• <strong>Gestion du temps :</strong> 20-25 minutes par question selon le barème</li>
                <li>• <strong>Structure :</strong> Introduction (contexte) → Analyse → Recommandations → Conclusion</li>
                <li>• <strong>Vocabulaire :</strong> Utilisez les termes techniques précis (SLA, Tier, IaaS, etc.)</li>
                <li>• <strong>Justification :</strong> Chaque recommandation doit être argumentée</li>
                <li>• <strong>Équilibre :</strong> Considérez toujours les aspects techniques ET économiques</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}