'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, BookOpen } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';

export default function Introduction() {
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
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Introduction à l&apos;Externalisation</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900">Objectifs d&apos;apprentissage</h3>
              </div>
              <ul className="text-blue-800 space-y-2">
                <li>• Comprendre les concepts fondamentaux de l&apos;externalisation informatique</li>
                <li>• Identifier les différents acteurs de l&apos;écosystème</li>
                <li>• Maîtriser la terminologie technique (datacenter, cloud, hébergement)</li>
                <li>• Analyser les enjeux stratégiques et opérationnels</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce que l&apos;externalisation ?</h2>
            
            <p className="text-gray-700 mb-6">
              L&apos;externalisation informatique consiste à confier tout ou partie de son système d&apos;information 
              à un prestataire externe spécialisé. Cette démarche s&apos;inscrit dans une logique de 
              <strong> recentrage sur le cœur de métier</strong> et d&apos;optimisation des coûts.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900">Définition clé</h3>
              </div>
              <p className="text-green-800">
                <strong>Écosystème d&apos;externalisation :</strong> Ensemble d&apos;entreprises distinctes mais 
                interagissant au sein d&apos;une même filière ou dans le cadre d&apos;une offre commune.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les acteurs principaux</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Fournisseurs d&apos;infrastructure</h3>
                <ul className="text-purple-800 space-y-2">
                  <li>• Opérateurs de datacenters</li>
                  <li>• Fournisseurs d&apos;électricité</li>
                  <li>• Opérateurs télécoms</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">Prestataires de services</h3>
                <ul className="text-orange-800 space-y-2">
                  <li>• Hébergeurs</li>
                  <li>• Fournisseurs cloud (IaaS, PaaS, SaaS)</li>
                  <li>• Intégrateurs</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Évolution historique</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">1990s</div>
                  <span>Mainframes centralisés coûteux</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">2000s</div>
                  <span>Systèmes distribués et premiers datacenters</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">2010s</div>
                  <span>Explosion du cloud computing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Aujourd&apos;hui</div>
                  <span>Écosystème mature et spécialisé</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💡 Moyen mnémotechnique</h3>
              <p className="text-yellow-800">
                <strong>DICE</strong> pour retenir les causes de l&apos;émergence des datacenters :
              </p>
              <ul className="text-yellow-800 mt-2 space-y-1">
                <li><strong>D</strong>istribution (fin des mainframes)</li>
                <li><strong>I</strong>nfrastructure (développement des services)</li>
                <li><strong>C</strong>oncurrence (baisse des coûts réseaux)</li>
                <li><strong>E</strong>conomies d&apos;échelle</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <div></div>
            <Link
              href="/section-1"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Section I : Les Datacenters
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}