'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qu&apos;est-ce qu&apos;un datacenter ?",
    options: [
      "Un simple serveur informatique",
      "Une infrastructure immobilière et technique pour héberger des équipements informatiques",
      "Un logiciel de gestion de données",
      "Un réseau de télécommunication"
    ],
    correct: 1,
    explanation: "Un datacenter est une infrastructure immobilière et technique destinée à l&apos;hébergement d&apos;une concentration importante d&apos;équipements informatiques."
  },
  {
    id: 2,
    question: "Combien y a-t-il de niveaux Tier dans la classification des datacenters ?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "Il existe 4 niveaux Tier (Tier 1 à Tier 4) qui classifient les datacenters selon leur niveau d&apos;équipement et de disponibilité."
  },
  {
    id: 3,
    question: "Que signifie l&apos;acronyme SaaS ?",
    options: [
      "Server as a Service",
      "Software as a Service",
      "Security as a Service",
      "Storage as a Service"
    ],
    correct: 1,
    explanation: "SaaS signifie Software as a Service, c&apos;est-à-dire une application prête à l&apos;emploi fournie par le prestataire."
  },
  {
    id: 4,
    question: "Quel est le taux de disponibilité d'un datacenter Tier 4 ?",
    options: ["99,67%", "99,75%", "99,98%", "99,99%"],
    correct: 3,
    explanation: "Un datacenter Tier 4 offre un taux de disponibilité de plus de 99,99%, soit moins de 24 minutes d&apos;arrêt cumulé par an."
  },
  {
    id: 5,
    question: "Quels sont les quatre enjeux critiques d'un datacenter ? (DICE)",
    options: [
      "Distribution, Infrastructure, Concurrence, Économies",
      "Données, Internet, Cloud, Énergie",
      "Alimentation électrique, Refroidissement, Accès réseaux, Sécurisation",
      "Serveurs, Stockage, Sécurité, Support"
    ],
    correct: 2,
    explanation: "Les quatre enjeux critiques sont : la continuité de l&apos;alimentation électrique, la maîtrise du refroidissement, la maîtrise des accès aux réseaux, et la sécurisation du site."
  },
  {
    id: 6,
    question: "Dans quel ordre les services cloud offrent-ils le plus de responsabilités au client ?",
    options: [
      "SaaS > PaaS > IaaS",
      "IaaS > PaaS > SaaS",
      "PaaS > IaaS > SaaS",
      "IaaS > SaaS > PaaS"
    ],
    correct: 1,
    explanation: "IaaS donne le plus de responsabilités au client (infrastructure), puis PaaS (plateforme), et enfin SaaS où le prestataire gère tout."
  },
  {
    id: 7,
    question: "Quels sont les principaux acteurs européens des datacenters ?",
    options: [
      "Amazon, Google, Microsoft",
      "InterXion, TeleHouse, TeleCity, Equinix",
      "IBM, Oracle, SAP",
      "OVH, Scaleway, Outscale"
    ],
    correct: 1,
    explanation: "Les principaux acteurs européens historiques sont InterXion, TeleHouse, TeleCity et Equinix, qui dominent le marché de la colocation en Europe."
  },
  {
    id: 8,
    question: "Que signifie le mnémotechnique DICE pour les enjeux des datacenters ?",
    options: [
      "Data, Infrastructure, Cloud, Énergie",
      "Distribution, Internet, Connectivité, Électricité",
      "Densification, Informatisation, Centralisation, Économies",
      "Densification, Informatisation, Centralisation, Économies (causes d'émergence)"
    ],
    correct: 3,
    explanation: "DICE représente les causes d'émergence des datacenters : Densification urbaine, Informatisation des entreprises, Centralisation des traitements, Économies d'échelle."
  },
  {
    id: 9,
    question: "Quelle est la différence principale entre cloud public et cloud privé ?",
    options: [
      "Le coût uniquement",
      "La localisation géographique",
      "Le partage des ressources et le niveau de contrôle",
      "Le type de services proposés"
    ],
    correct: 2,
    explanation: "Le cloud public partage les ressources entre plusieurs clients avec moins de contrôle, tandis que le cloud privé offre des ressources dédiées avec un contrôle total."
  },
  {
    id: 10,
    question: "Que signifie le mnémotechnique AASP pour la migration cloud ?",
    options: [
      "Analyse, Architecture, Sécurité, Performance",
      "Audit, Analyse, Stratégie, Pilotage",
      "Application, API, Stockage, Plateforme",
      "Automatisation, Adaptation, Supervision, Production"
    ],
    correct: 1,
    explanation: "AASP représente les étapes de migration : Audit de l'existant, Analyse des besoins, Stratégie de migration, Pilotage du projet."
  },
  {
    id: 11,
    question: "Quel est l'avantage principal de l'externalisation selon le cours ?",
    options: [
      "Réduction des coûts uniquement",
      "Recentrage sur le cœur de métier",
      "Élimination des risques",
      "Augmentation du contrôle"
    ],
    correct: 1,
    explanation: "L'avantage principal de l'externalisation est de permettre à l'entreprise de se recentrer sur son cœur de métier en confiant les activités support à des spécialistes."
  },
  {
    id: 12,
    question: "Dans l'écosystème cloud, qui sont les 'Primary Resource Providers' ?",
    options: [
      "Les développeurs d'applications",
      "Les fournisseurs d'électricité, de terrains, de connectivité",
      "Les constructeurs de serveurs",
      "Les éditeurs de logiciels"
    ],
    correct: 1,
    explanation: "Les Primary Resource Providers fournissent les ressources de base : électricité, terrains, connectivité réseau, nécessaires au fonctionnement des datacenters."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez bien le sujet.';
    if (percentage >= 60) return 'Bien ! Quelques révisions seraient bénéfiques.';
    return 'Il serait bon de revoir le cours avant l&apos;examen.';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="h-12 w-12 text-yellow-500" />
              <h1 className="text-3xl font-bold text-gray-900">Quiz Terminé !</h1>
            </div>

            <div className="mb-8">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-2xl font-semibold mb-2 ${getScoreColor()}`}>
                {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-lg text-gray-600">{getScoreMessage()}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                Recommencer le quiz
              </button>
              <Link
                href="/questions-dscg"
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Cas pratiques
                <span>→</span>
              </Link>
            </div>

            <div className="text-left bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Récapitulatif de vos réponses :</h3>
              <div className="space-y-3">
                {questions.map((q, index) => (
                  <div key={q.id} className="flex items-center gap-3">
                    {answers[index] === q.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className="text-gray-700">Question {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-full">
              <Brain className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Quiz Interactif</h1>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} sur {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => {
                  let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ";
                  
                  if (selectedAnswer === null) {
                    buttonClass += "border-gray-200 hover:border-orange-300 hover:bg-orange-50";
                  } else {
                    if (index === questions[currentQuestion].correct) {
                      buttonClass += "border-green-500 bg-green-50 text-green-800";
                    } else if (index === selectedAnswer) {
                      buttonClass += "border-red-500 bg-red-50 text-red-800";
                    } else {
                      buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                    }
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                      whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswerSelect(index)}
                      className={buttonClass}
                      disabled={selectedAnswer !== null}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                        <span>{option}</span>
                        {selectedAnswer !== null && index === questions[currentQuestion].correct && (
                          <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                        )}
                        {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                          <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Explanation */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Explication :</h3>
                  <p className="text-blue-800">{questions[currentQuestion].explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {showResult && (
            <div className="flex justify-end">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={nextQuestion}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}