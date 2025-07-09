'use client';

import { motion } from 'framer-motion';
import { BarChart3, Target, TrendingUp, DollarSign, Shield } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';

export default function Section3() {
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
            <div className="bg-indigo-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Section III : Stratégies d&apos;Externalisation</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enjeux stratégiques</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800">
                L&apos;externalisation informatique s&apos;inscrit dans une démarche de 
                <strong>recentrage sur le cœur de métier</strong> et d&apos;<strong>optimisation des coûts</strong>.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Facteurs de décision</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">Avantages économiques</h4>
                </div>
                <ul className="text-green-800 space-y-2">
                  <li>• Réduction des coûts d&apos;infrastructure</li>
                  <li>• Transformation des CAPEX en OPEX</li>
                  <li>• Économies d&apos;échelle</li>
                  <li>• Prévisibilité budgétaire</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-purple-900">Avantages stratégiques</h4>
                </div>
                <ul className="text-purple-800 space-y-2">
                  <li>• Focus sur le cœur de métier</li>
                  <li>• Accès à l&apos;expertise spécialisée</li>
                  <li>• Flexibilité et scalabilité</li>
                  <li>• Innovation technologique</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <h4 className="font-semibold text-orange-900">Avantages opérationnels</h4>
                </div>
                <ul className="text-orange-800 space-y-2">
                  <li>• Amélioration de la disponibilité</li>
                  <li>• Maintenance assurée 24/7</li>
                  <li>• Mise à jour automatique</li>
                  <li>• Sécurité renforcée</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-red-900">Risques à considérer</h4>
                </div>
                <ul className="text-red-800 space-y-2">
                  <li>• Dépendance au prestataire</li>
                  <li>• Perte de contrôle</li>
                  <li>• Sécurité des données</li>
                  <li>• Coûts cachés</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modèles de déploiement Cloud</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Cloud Public</h3>
                <p className="text-blue-800 mb-3">
                  Infrastructure partagée, accessible via Internet. Économique mais moins de contrôle.
                </p>
                <div className="bg-blue-100 p-3 rounded">
                  <strong>Cas d&apos;usage :</strong> Applications web, développement, tests
                </div>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Cloud Privé</h3>
                <p className="text-purple-800 mb-3">
                  Infrastructure dédiée à une seule organisation. Plus de contrôle et sécurité.
                </p>
                <div className="bg-purple-100 p-3 rounded">
                  <strong>Cas d&apos;usage :</strong> Données sensibles, conformité réglementaire
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Cloud Hybride</h3>
                <p className="text-green-800 mb-3">
                  Combinaison de cloud public et privé. Flexibilité optimale.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <strong>Cas d&apos;usage :</strong> Pics de charge, données mixtes
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Critères de choix d&apos;un prestataire</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Critères techniques</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Niveau de SLA (Service Level Agreement)</li>
                    <li>• Certifications (ISO 27001, SOC 2)</li>
                    <li>• Localisation des données</li>
                    <li>• Capacité de montée en charge</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Critères business</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Modèle tarifaire transparent</li>
                    <li>• Support technique qualifié</li>
                    <li>• Stabilité financière du prestataire</li>
                    <li>• Facilité de migration</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Processus de migration</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">1</div>
                <div>
                  <h4 className="font-semibold text-blue-900">Audit et analyse</h4>
                  <p className="text-blue-800">Évaluation de l&apos;existant et des besoins</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">2</div>
                <div>
                  <h4 className="font-semibold text-green-900">Stratégie de migration</h4>
                  <p className="text-green-800">Définition du plan et des priorités</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">3</div>
                <div>
                  <h4 className="font-semibold text-purple-900">Mise en œuvre</h4>
                  <p className="text-purple-800">Migration progressive et tests</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">4</div>
                <div>
                  <h4 className="font-semibold text-orange-900">Optimisation</h4>
                  <p className="text-orange-800">Ajustements et amélioration continue</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💡 Moyen mnémotechnique : AASP</h3>
              <p className="text-yellow-800 mb-2">
                Pour retenir les étapes de migration :
              </p>
              <div className="space-y-1 text-yellow-800">
                <div><strong>A</strong>udit : Analyser l&apos;existant</div>
                <div><strong>A</strong>rchitecture : Définir la stratégie</div>
                <div><strong>S</strong>witch : Migrer progressivement</div>
                <div><strong>P</strong>erfect : Optimiser en continu</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercices pratiques</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">📝 Exercice 1 : Analyse de risques</h3>
                <p className="text-red-800 mb-3">
                  Une banque envisage d&apos;externaliser ses serveurs de données clients. Identifiez :
                </p>
                <ul className="text-red-800 space-y-1">
                  <li>• 3 risques majeurs</li>
                  <li>• 2 mesures de mitigation par risque</li>
                  <li>• Les certifications requises du prestataire</li>
                </ul>
                <div className="mt-4 p-3 bg-red-100 rounded">
                  <strong>Réflexion :</strong> Secteur bancaire = exigences réglementaires strictes (RGPD, PCI-DSS)
                </div>
              </div>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">📝 Exercice 2 : Calcul de ROI</h3>
                <p className="text-indigo-800 mb-3">
                  Calculez le ROI sur 5 ans d&apos;une migration cloud :
                </p>
                <ul className="text-indigo-800 space-y-1">
                  <li>• Coût actuel : 200k€/an (serveurs + maintenance + personnel)</li>
                  <li>• Coût cloud : 120k€/an + 50k€ migration</li>
                  <li>• Gains : réduction 2 ETP IT (60k€/an chacun)</li>
                </ul>
                <div className="mt-4 p-3 bg-indigo-100 rounded">
                  <strong>Solution :</strong> Économies = 200k€ - 120k€ + 120k€ = 200k€/an. ROI = 950k€ sur 5 ans
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Méthodes d&apos;évaluation</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Grille d&apos;évaluation des prestataires</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Critère</th>
                      <th className="border border-gray-300 p-2 text-center">Poids</th>
                      <th className="border border-gray-300 p-2 text-center">Prestataire A</th>
                      <th className="border border-gray-300 p-2 text-center">Prestataire B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">SLA disponibilité</td>
                      <td className="border border-gray-300 p-2 text-center">25%</td>
                      <td className="border border-gray-300 p-2 text-center">99,9% (8/10)</td>
                      <td className="border border-gray-300 p-2 text-center">99,99% (10/10)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Sécurité/Certifications</td>
                      <td className="border border-gray-300 p-2 text-center">20%</td>
                      <td className="border border-gray-300 p-2 text-center">ISO 27001 (9/10)</td>
                      <td className="border border-gray-300 p-2 text-center">ISO 27001 + SOC2 (10/10)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Coût total (TCO)</td>
                      <td className="border border-gray-300 p-2 text-center">20%</td>
                      <td className="border border-gray-300 p-2 text-center">100k€/an (10/10)</td>
                      <td className="border border-gray-300 p-2 text-center">120k€/an (8/10)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Support technique</td>
                      <td className="border border-gray-300 p-2 text-center">15%</td>
                      <td className="border border-gray-300 p-2 text-center">24/7 FR (7/10)</td>
                      <td className="border border-gray-300 p-2 text-center">24/7 multilingue (9/10)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Localisation données</td>
                      <td className="border border-gray-300 p-2 text-center">10%</td>
                      <td className="border border-gray-300 p-2 text-center">UE (10/10)</td>
                      <td className="border border-gray-300 p-2 text-center">UE (10/10)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Facilité migration</td>
                      <td className="border border-gray-300 p-2 text-center">10%</td>
                      <td className="border border-gray-300 p-2 text-center">Outils standards (6/10)</td>
                      <td className="border border-gray-300 p-2 text-center">Accompagnement (9/10)</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 p-2 font-bold">Score pondéré</td>
                      <td className="border border-gray-300 p-2 text-center font-bold">100%</td>
                      <td className="border border-gray-300 p-2 text-center font-bold">8,35/10</td>
                      <td className="border border-gray-300 p-2 text-center font-bold">9,25/10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Pièges à éviter</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• <strong>Vendor lock-in :</strong> Dépendance technologique difficile à inverser</li>
                <li>• <strong>Coûts cachés :</strong> Bande passante, support premium, formations</li>
                <li>• <strong>Sous-estimation de la migration :</strong> Temps, complexité, risques</li>
                <li>• <strong>SLA insuffisants :</strong> Pénalités faibles, exclusions nombreuses</li>
                <li>• <strong>Gouvernance négligée :</strong> Pas de pilotage, pas de contrôle</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 Points clés pour l&apos;examen</h3>
              <ul className="text-green-800 space-y-2">
                <li>• L&apos;externalisation permet le recentrage sur le cœur de métier</li>
                <li>• Trois modèles de déploiement : public, privé, hybride</li>
                <li>• La migration nécessite une approche méthodique</li>
                <li>• Les SLA sont cruciaux dans le choix du prestataire</li>
                <li>• Équilibre entre coûts, contrôle et flexibilité</li>
                <li>• Grille d&apos;évaluation multicritères indispensable</li>
                <li>• Prévoir la réversibilité dès la conception</li>
                <li>• TCO &gt; prix affiché (inclure tous les coûts cachés)</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              href="/section-2"
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Section II : Services Cloud
            </Link>
            <Link
              href="/quiz"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Quiz Interactif
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}