'use client';

import { motion } from 'framer-motion';
import { Cloud, Layers, Database, Code, Monitor, Smartphone } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';

export default function Section2() {
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
            <div className="bg-purple-100 p-3 rounded-full">
              <Cloud className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Section II : Services Cloud</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nature du service proposé</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800">
                Ce qui différencie fondamentalement les notions d&apos;<strong>hébergement</strong>, 
                <strong>datacenter</strong> et <strong>cloud</strong>, c&apos;est la <strong>complétude du service fourni</strong> 
                et les éléments que le client doit gérer par lui-même.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Échelle de services</h3>
            
            <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-lg mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-red-700 font-semibold">Service minimaliste</span>
                <span className="text-green-700 font-semibold">Service complet</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-red-600">Client gère tout</span>
                <span className="text-green-600">Prestataire gère tout</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de prestations</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-5 w-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">1. Simple accès au réseau</h3>
                </div>
                <p className="text-gray-700">
                  Service de base : connectivité réseau uniquement.
                </p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-semibold text-orange-900">2. Colocation de baies</h3>
                </div>
                <p className="text-orange-800">
                  Le client installe ses propres serveurs dans les armoires du datacenter.
                </p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="h-5 w-5 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-yellow-900">3. Hébergement</h3>
                </div>
                <p className="text-yellow-800">
                  Utilisation des serveurs du datacenter, mais le client gère les caractéristiques.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les modèles Cloud</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">IaaS - Infrastructure as a Service</h3>
                </div>
                <p className="text-blue-800 mb-3">
                  Le client dispose des serveurs et capacités de stockage en état de marche, 
                  sans se soucier des paramètres système (ex: système d&apos;exploitation).
                </p>
                <div className="bg-blue-100 p-3 rounded">
                  <strong>Exemples :</strong> Amazon EC2, Microsoft Azure VMs, Google Compute Engine
                </div>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-900">PaaS - Platform as a Service</h3>
                </div>
                <p className="text-purple-800 mb-3">
                  Plateforme complète avec bases de données, serveurs d&apos;applications, 
                  serveur Web. Le client développe et déploie ses applications.
                </p>
                <div className="bg-purple-100 p-3 rounded">
                  <strong>Exemples :</strong> Heroku, Google App Engine, Microsoft Azure App Service
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">SaaS - Software as a Service</h3>
                </div>
                <p className="text-green-800 mb-3">
                  Application prête à l&apos;emploi. Le prestataire assure un service complet, 
                  l&apos;intervention du client est minimale.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <strong>Exemples :</strong> Office 365, Salesforce, Google Workspace
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Chaîne de valeur de l&apos;écosystème</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Acteurs de l&apos;écosystème</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="bg-red-100 p-3 rounded text-red-800">
                    <strong>Fournisseurs de ressources primaires</strong><br/>
                    Électricité et réseau
                  </div>
                  <div className="bg-orange-100 p-3 rounded text-orange-800">
                    <strong>Constructeur du datacenter</strong><br/>
                    Infrastructure physique
                  </div>
                  <div className="bg-yellow-100 p-3 rounded text-yellow-800">
                    <strong>Prestataire exploitant</strong><br/>
                    Gestion du datacenter
                  </div>
                  <div className="bg-green-100 p-3 rounded text-green-800">
                    <strong>Fournisseur des serveurs</strong><br/>
                    Matériel informatique
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-blue-100 p-3 rounded text-blue-800">
                    <strong>Fournisseur des logiciels</strong><br/>
                    Systèmes d&apos;exploitation, outils
                  </div>
                  <div className="bg-indigo-100 p-3 rounded text-indigo-800">
                    <strong>Fournisseur des plateformes</strong><br/>
                    Bases de données, serveurs Web
                  </div>
                  <div className="bg-purple-100 p-3 rounded text-purple-800">
                    <strong>Fournisseurs des applications</strong><br/>
                    Logiciels métiers
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💡 Moyen mnémotechnique : SIP</h3>
              <p className="text-yellow-800 mb-2">
                Pour retenir l&apos;ordre des services cloud :
              </p>
              <div className="space-y-1 text-yellow-800">
                <div><strong>S</strong>aaS : Software (Application complète)</div>
                <div><strong>I</strong>aaS : Infrastructure (Serveurs et stockage)</div>
                <div><strong>P</strong>aaS : Platform (Plateforme de développement)</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercices pratiques</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">📝 Exercice 1 : Choix du modèle cloud</h3>
                <p className="text-blue-800 mb-3">
                  Une startup développe une application mobile. Quel modèle cloud recommanderiez-vous pour :
                </p>
                <ul className="text-blue-800 space-y-1">
                  <li>• Le développement et les tests ?</li>
                  <li>• La base de données de production ?</li>
                  <li>• Les outils de gestion (CRM, comptabilité) ?</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <strong>Solution :</strong> PaaS pour le développement, IaaS pour la production, SaaS pour les outils métier
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">📝 Exercice 2 : Analyse de coûts</h3>
                <p className="text-green-800 mb-3">
                  Comparez les coûts sur 3 ans entre :
                </p>
                <ul className="text-green-800 space-y-1">
                  <li>• Serveur physique : 15 000€ + 3 000€/an maintenance</li>
                  <li>• IaaS équivalent : 500€/mois</li>
                  <li>• Incluez : électricité, espace, administration</li>
                </ul>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <strong>Réflexion :</strong> IaaS souvent plus économique avec flexibilité en bonus
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Détails techniques supplémentaires</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsabilités par modèle</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Composant</th>
                      <th className="border border-gray-300 p-2 text-center">IaaS</th>
                      <th className="border border-gray-300 p-2 text-center">PaaS</th>
                      <th className="border border-gray-300 p-2 text-center">SaaS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Applications</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100">Client</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100">Client</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Données</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100">Client</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100">Client</td>
                      <td className="border border-gray-300 p-2 text-center bg-yellow-100">Partagé</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Runtime/Middleware</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100">Client</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">OS</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-100">Client</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Virtualisation</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Serveurs/Stockage</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Réseau</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-100">Fournisseur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 Points clés à retenir</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Plus le service est complet, moins le client a de responsabilités</li>
                <li>• IaaS = Infrastructure, PaaS = Plateforme, SaaS = Application</li>
                <li>• L&apos;écosystème implique de nombreux acteurs spécialisés</li>
                <li>• La chaîne de valeur va des ressources primaires aux applications</li>
                <li>• Le choix dépend du niveau de contrôle souhaité et des compétences internes</li>
                <li>• Modèle de responsabilité partagée : sécurité = responsabilité commune</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              href="/section-1"
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Section I : Datacenters
            </Link>
            <Link
              href="/section-3"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section III : Stratégies
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}