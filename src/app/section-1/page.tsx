'use client';

import { motion } from 'framer-motion';
import { Server, Zap, Thermometer, Wifi, Shield, Building } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';

export default function Section1() {
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
            <div className="bg-green-100 p-3 rounded-full">
              <Server className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Section I : Les Datacenters</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Définition et composition</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 font-medium">
                Un <strong>datacenter</strong> est une infrastructure immobilière et technique destinée 
                à l&apos;hébergement d&apos;une concentration importante d&apos;équipements informatiques.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Composants d&apos;un datacenter</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Building className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-purple-900">Infrastructure physique</h4>
                </div>
                <ul className="text-purple-800 space-y-2">
                  <li>• Salles sécurisées</li>
                  <li>• Baies standardisées</li>
                  <li>• Bâtiment spécialisé</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">Équipements informatiques</h4>
                </div>
                <ul className="text-green-800 space-y-2">
                  <li>• Serveurs applicatifs</li>
                  <li>• Serveurs de données</li>
                  <li>• Équipements réseau</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-orange-600" />
                  <h4 className="font-semibold text-orange-900">Infrastructures techniques</h4>
                </div>
                <ul className="text-orange-800 space-y-2">
                  <li>• Alimentation électrique</li>
                  <li>• Systèmes de refroidissement</li>
                  <li>• Accès réseau très haut débit</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Wifi className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-red-900">Connectivité</h4>
                </div>
                <ul className="text-red-800 space-y-2">
                  <li>• Routeurs et commutateurs</li>
                  <li>• Pare-feu et répartiteurs</li>
                  <li>• Points d&apos;échange Internet</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Causes d&apos;émergence des datacenters</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💡 Moyen mnémotechnique : DICE</h3>
              <div className="space-y-3 text-yellow-800">
                <div><strong>D</strong>istribution : Fin des mainframes coûteux</div>
                <div><strong>I</strong>nfrastructure : Développement des activités de services</div>
                <div><strong>C</strong>oncurrence : Baisse des coûts réseaux</div>
                <div><strong>E</strong>conomies : Optimisation des ressources</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acteurs majeurs en Europe</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <strong>InterXion</strong><br/>
                <span className="text-gray-600">Pays-Bas</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <strong>TeleHouse</strong><br/>
                <span className="text-gray-600">Japon</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <strong>TeleCity</strong><br/>
                <span className="text-gray-600">Grande-Bretagne</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <strong>Equinix</strong><br/>
                <span className="text-gray-600">États-Unis</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les quatre enjeux critiques</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-900">1. Continuité de l&apos;alimentation électrique</h3>
                </div>
                <p className="text-red-800">
                  Concentration d&apos;équipements = gros consommateur. La continuité et stabilité 
                  du courant sont critiques pour éviter la détérioration des serveurs.
                </p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-semibold text-orange-900">2. Maîtrise des systèmes de refroidissement</h3>
                </div>
                <p className="text-orange-800">
                  La densité des équipements génère beaucoup de chaleur. Un dispositif 
                  de refroidissement est nécessaire pour maintenir les seuils recommandés.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Wifi className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">3. Maîtrise des accès aux réseaux</h3>
                </div>
                <p className="text-blue-800">
                  Bande passante importante nécessaire. Proximité d&apos;un point d&apos;échange 
                  Internet privilégiée pour l&apos;interconnexion avec un maximum d&apos;opérateurs.
                </p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-900">4. Sécurisation du site</h3>
                </div>
                <p className="text-purple-800">
                  Sécurité d&apos;accès (badges, digicodes, biométrie), gardiennage, 
                  surveillance continue et systèmes d&apos;alerte en cas d&apos;incident.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Classification Tier</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">Tier 1</div>
                    <div>
                      <div className="font-semibold">Équipements non redondés</div>
                      <div className="text-gray-600">99,67% de disponibilité</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Tier 2</div>
                    <div>
                      <div className="font-semibold">Redondance partielle</div>
                      <div className="text-gray-600">99,75% de disponibilité</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Tier 3</div>
                    <div>
                      <div className="font-semibold">Maintenance sans arrêt</div>
                      <div className="text-gray-600">99,98% de disponibilité</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Tier 4</div>
                    <div>
                      <div className="font-semibold">Infrastructure redondée</div>
                      <div className="text-gray-600">99,99% (24min/an max)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercices pratiques</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">📝 Exercice 1 : Calcul de disponibilité</h3>
                <p className="text-orange-800 mb-3">
                  Un datacenter Tier 3 garantit 99,98% de disponibilité. Calculez le temps d&apos;arrêt maximum autorisé :
                </p>
                <ul className="text-orange-800 space-y-1">
                  <li>• Par an (en heures et minutes)</li>
                  <li>• Par mois (en minutes)</li>
                  <li>• Par semaine (en minutes)</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-100 rounded">
                  <strong>Solution :</strong> 1,6 heure/an (1h36min), 8 min/mois, 2 min/semaine
                </div>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">📝 Exercice 2 : Analyse comparative</h3>
                <p className="text-purple-800 mb-3">
                  Comparez les coûts et bénéfices d&apos;un datacenter Tier 2 vs Tier 4 pour :
                </p>
                <ul className="text-purple-800 space-y-1">
                  <li>• Une application e-commerce (Black Friday)</li>
                  <li>• Un système de trading financier</li>
                  <li>• Un site web vitrine d&apos;entreprise</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                  <strong>Réflexion :</strong> Adapter le niveau Tier aux enjeux métier et au coût des interruptions
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 Points clés à retenir</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Un datacenter = infrastructure + équipements + services</li>
                <li>• Classification Tier 1 à 4 selon la disponibilité</li>
                <li>• Quatre enjeux critiques : DICE (Distribution, Infrastructure, Concurrence, Économies)</li>
                <li>• Écosystème complexe avec de nombreux acteurs spécialisés</li>
                <li>• Le choix du Tier doit correspondre aux enjeux métier</li>
                <li>• Calcul du temps d&apos;arrêt = (100 - % disponibilité) × 8760 heures</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              href="/introduction"
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Introduction
            </Link>
            <Link
              href="/section-2"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section II : Services Cloud
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}