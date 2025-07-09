'use client';

import { motion } from 'framer-motion';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';

export default function QuestionsDSCGOriginales() {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (year: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [year]: !prev[year]
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
            <h1 className="text-3xl font-bold text-gray-900">Questions DSCG</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Voici les questions du DSCG et leurs corrections qui ont un lien avec le contenu du chapitre 17 sur l&apos;externalisation, les datacenters et le cloud computing, présentées par année avec un bref contexte.
            </p>

            <hr className="my-8 border-gray-300" />

            <div className="space-y-12">
              {/* Session 2016 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Session 2016</h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">📋 Contexte</h3>
                  <p className="text-blue-700">
                    La société SOVANI, une PME, se lance dans les objets connectés et doit moderniser son système d&apos;information (SI) vieillissant. Elle a des ressources SI internes limitées et doit remplacer son ERP actuel.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 2 – Projet de SI de SOVANI</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q5 :</strong> Dans le contexte du projet de modernisation de l&apos;ERP de SOVANI, proposer des éléments de comparaison entre les 3 alternatives cloud existantes.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2016')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2016'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2016'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2016'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <p>
                        La société SOVANI envisage une solution cloud pour faire face à ses besoins en termes de sauvegarde, d&apos;accès à des ressources logicielles et à des échanges. Il s&apos;agit ainsi d&apos;un système transactionnel quasi instantané. Cette solution doit ainsi permettre de concilier les problématiques de sauvegarde, de sécurité, d&apos;accessibilité et de coût. Trois solutions en cloud sont actuellement disponibles sur le marché, dont les caractéristiques sont présentées ci-dessous:
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-green-900">Cloud privé :</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><strong>Description :</strong> Accès sur serveur distant, accessible via internet, pour stocker en externe données et/ou applications, mis à disposition d&apos;une seule entreprise. Les ressources peuvent être situées dans les locaux de SOVANI ou chez l&apos;ESN qui gère le cloud. La gestion peut être interne ou confiée à un prestataire ESN.</li>
                            <li><strong>Avantage :</strong> Garantie l&apos;étanchéité et la sécurité des traitements et des données de l&apos;entreprise. Permet une consommation du SI via le SaaS.</li>
                            <li><strong>Inconvénient :</strong> Coûts plus élevés, car plus sécurisé et adapté aux besoins spécifiques de l&apos;entreprise.</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900">Cloud public :</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><strong>Description :</strong> Matériel et services à distance fournis et mis à disposition par un prestataire pour plusieurs entreprises.</li>
                            <li><strong>Avantage :</strong> Permet à l&apos;entreprise un accès aux mêmes ressources et services applicatifs. Le coût est moindre.</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900">Cloud hybride :</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><strong>Description :</strong> Combine le meilleur du cloud privé et du cloud public. Met à disposition un certain nombre de ressources sur une partie publique du cloud, accessible par plusieurs entreprises, et restreint l&apos;accès pour des ressources plus sensibles et risquées.</li>
                            <li><strong>Avantage :</strong> Coût intermédiaire entre un cloud public et un cloud privé.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <hr className="my-8 border-gray-300" />

              {/* Session 2017 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
                <h2 className="text-2xl font-bold text-green-900 mb-4">Session 2017</h2>
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">📋 Contexte</h3>
                  <p className="text-green-700">
                    AIDADOM est un réseau national d&apos;associations de services à domicile. Son plan d&apos;actions 2016-2020 inclut la modernisation de son SI, avec un portage en mode Web de plusieurs applications et un hébergement centralisé dans un Datacenter.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 2 – Projet de déploiement de l&apos;application métier</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q4 :</strong> Apprécier le choix d&apos;AIDADOM de recourir à un site central d&apos;hébergement.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2017')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2017'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2017'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2017'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <div>
                        <h4 className="font-semibold text-green-900">Avantages du recours à un site central d&apos;hébergement (Datacenter) pour AIDADOM :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Mutualisation et rationalisation</strong> de l&apos;utilisation des ressources matérielles en regroupant sur un même lieu l&apos;hébergement des services fournis par le SI d&apos;AIDADOM.</li>
                          <li><strong>Niveau de sécurité élevé</strong> grâce à la sécurité d&apos;accès, la surveillance du site, la redondance des équipements informatiques, de l&apos;alimentation électrique et du système de climatisation, le système anti-incendie.</li>
                          <li><strong>Sécurisation des échanges</strong> entre les applications hébergées au niveau du site central.</li>
                          <li><strong>Réduction des coûts</strong> liés à l&apos;exploitation et à l&apos;administration des matériels (serveurs) grâce à la mutualisation des ressources et à la simple utilisation d&apos;un logiciel client (navigateur).</li>
                          <li><strong>Renforcement de la professionnalisation</strong> des solutions en confiant l&apos;exploitation et l&apos;administration à des prestataires spécialisés.</li>
                          <li><strong>Scalabilité du système d&apos;information facilitée</strong> grâce aux ressources disponibles au niveau du Datacenter.</li>
                          <li><strong>Disponibilité accrue</strong> des ressources grâce à des équipements performants et des connexions Internet à très haut débit.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Limites/Risques du recours à un site central d&apos;hébergement :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Temps d&apos;accès aux données</strong> peut être plus important.</li>
                          <li><strong>Vieillissement des Datacenters traditionnels</strong> qui sont mal équipés pour gérer les applications actuelles et futures (matériel vieillissant, efficience énergétique et du matériel de refroidissement faibles, etc.).</li>
                          <li><strong>Coût du Giga élevé</strong> et manque de gains potentiels.</li>
                          <li><strong>Multiples risques :</strong>
                            <ul className="list-disc list-inside space-y-1 ml-8">
                              <li>De dépendance envers le prestataire.</li>
                              <li>De sécurité liée à la confidentialité des données si les serveurs sont mutualisés et non dédiés.</li>
                              <li>De perte de productivité liée à une panne réseau.</li>
                              <li>De sécurité liée à l&apos;interception de données par piratage (nécessite cryptage).</li>
                              <li>De sécurité liée à la perte de données (nécessite sauvegarde).</li>
                              <li>De réversibilité si AIDADOM souhaite revenir à un hébergement non centralisé.</li>
                            </ul>
                          </li>
                          <li><strong>Contraintes juridiques</strong> liées à la localisation des centres de données.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <hr className="my-8 border-gray-300" />

              {/* Session 2018 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Session 2018</h2>
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">📋 Contexte</h3>
                  <p className="text-purple-700">
                    Le groupe Mirlac, un fabricant de produits dérivés du bois, est en pleine croissance et envisage une acquisition en Suède. Il doit remplacer son PGI vieillissant par un nouveau PGI &quot;full web&quot; et sécuriser ses échanges face aux cyberattaques.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 1 – Remplacement du PGI</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q3 :</strong> Lors du choix d&apos;un PGI, quels sont les points auxquels l&apos;entreprise doit être attentive ? Citer et expliciter quatre points clés.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2018')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2018'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2018'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2018'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <p>
                        Lors du choix d&apos;un PGI, l&apos;entreprise doit être attentive à plusieurs points clés :
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-green-900">1. Adéquation fonctionnelle :</h4>
                          <p>Le PGI doit couvrir l&apos;ensemble des besoins métier de l&apos;entreprise et s&apos;adapter à ses processus spécifiques. Il faut vérifier que les modules proposés correspondent aux activités de l&apos;entreprise.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900">2. Évolutivité et scalabilité :</h4>
                          <p>Le système doit pouvoir évoluer avec la croissance de l&apos;entreprise, supporter l&apos;augmentation du volume de données et des utilisateurs, et permettre l&apos;ajout de nouvelles fonctionnalités.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900">3. Coût total de possession (TCO) :</h4>
                          <p>Au-delà du coût d&apos;acquisition, il faut considérer les coûts de mise en œuvre, de formation, de maintenance, d&apos;hébergement et de support sur toute la durée de vie du système.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900">4. Sécurité et conformité :</h4>
                          <p>Le PGI doit garantir la sécurité des données, respecter les réglementations en vigueur (RGPD, normes comptables) et offrir des fonctionnalités de traçabilité et d&apos;audit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <hr className="my-8 border-gray-300" />

              {/* Session 2019 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-600">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">Session 2019</h2>
                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">📋 Contexte</h3>
                  <p className="text-orange-700">
                    AIDADOM poursuit sa modernisation avec le déploiement d&apos;une nouvelle application métier. L&apos;association doit choisir entre différentes stratégies d&apos;externalisation pour optimiser son système d&apos;information.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 2 – Stratégie d&apos;externalisation</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q5 :</strong> Analyser les avantages et inconvénients de l&apos;externalisation pour AIDADOM.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2019')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2019'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2019'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2019'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <div>
                        <h4 className="font-semibold text-green-900">Avantages de l&apos;externalisation pour AIDADOM :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Réduction des coûts :</strong> Diminution des investissements en infrastructure et en personnel IT spécialisé.</li>
                          <li><strong>Accès à l&apos;expertise :</strong> Bénéfice du savoir-faire et de l&apos;expérience de prestataires spécialisés.</li>
                          <li><strong>Flexibilité :</strong> Adaptation rapide aux évolutions technologiques et aux besoins métier.</li>
                          <li><strong>Concentration sur le cœur de métier :</strong> Libération des ressources pour se concentrer sur les activités principales.</li>
                          <li><strong>Amélioration de la qualité de service :</strong> SLA garantis et niveau de service professionnel.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Inconvénients de l&apos;externalisation pour AIDADOM :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Perte de contrôle :</strong> Dépendance vis-à-vis du prestataire pour les décisions techniques.</li>
                          <li><strong>Risques de sécurité :</strong> Exposition des données sensibles à des tiers.</li>
                          <li><strong>Coûts cachés :</strong> Frais additionnels non prévus initialement (évolutions, support).</li>
                          <li><strong>Difficultés de réversibilité :</strong> Complexité pour reprendre en interne ou changer de prestataire.</li>
                          <li><strong>Perte de compétences internes :</strong> Risque de déperdition du savoir-faire technique en interne.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <hr className="my-8 border-gray-300" />

              {/* Session 2020 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
                <h2 className="text-2xl font-bold text-red-900 mb-4">Session 2020</h2>
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">📋 Contexte</h3>
                  <p className="text-red-700">
                    La société GESTFORM, spécialisée dans la formation professionnelle, doit adapter son SI face à la digitalisation accélérée par la crise sanitaire. Elle évalue différentes solutions SaaS pour remplacer ses outils actuels.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 3 – Choix d&apos;une solution SaaS</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q7 :</strong> Comparer les avantages et inconvénients d&apos;une solution SaaS par rapport à une solution on-premise pour GESTFORM.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2020')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2020'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2020'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2020'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <div>
                        <h4 className="font-semibold text-green-900">Avantages du SaaS pour GESTFORM :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Déploiement rapide :</strong> Mise en service immédiate sans installation complexe.</li>
                          <li><strong>Coûts prévisibles :</strong> Modèle d&apos;abonnement avec coûts récurrents maîtrisés.</li>
                          <li><strong>Maintenance automatique :</strong> Mises à jour et correctifs gérés par le fournisseur.</li>
                          <li><strong>Accessibilité :</strong> Accès depuis n&apos;importe où avec une connexion internet.</li>
                          <li><strong>Scalabilité :</strong> Adaptation facile du nombre d&apos;utilisateurs selon les besoins.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Inconvénients du SaaS :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Dépendance internet :</strong> Nécessité d&apos;une connexion stable et performante.</li>
                          <li><strong>Personnalisation limitée :</strong> Moins de possibilités d&apos;adaptation aux besoins spécifiques.</li>
                          <li><strong>Sécurité des données :</strong> Données hébergées chez un tiers avec risques associés.</li>
                          <li><strong>Coût à long terme :</strong> Abonnements récurrents pouvant être plus coûteux sur la durée.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Avantages de l&apos;on-premise :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Contrôle total :</strong> Maîtrise complète de l&apos;infrastructure et des données.</li>
                          <li><strong>Personnalisation :</strong> Adaptation maximale aux processus métier spécifiques.</li>
                          <li><strong>Sécurité :</strong> Données conservées en interne avec contrôle des accès.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Inconvénients de l&apos;on-premise :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Investissement initial élevé :</strong> Coûts d&apos;acquisition et d&apos;infrastructure importants.</li>
                          <li><strong>Maintenance complexe :</strong> Gestion interne des mises à jour et de la maintenance.</li>
                          <li><strong>Temps de déploiement :</strong> Mise en œuvre plus longue et complexe.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <hr className="my-8 border-gray-300" />

              {/* Session 2021 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-indigo-600">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">Session 2021</h2>
                <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">📋 Contexte</h3>
                  <p className="text-indigo-700">
                    L&apos;entreprise TECHNO-SERVICES, spécialisée dans les services informatiques, doit restructurer son organisation SI pour accompagner sa croissance. Elle évalue différents types d&apos;organisation pour optimiser ses processus.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 1 – Organisation du SI</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q3 :</strong> Présenter les différents types d&apos;organisation du SI et leurs caractéristiques principales.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2021')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2021'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2021'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2021'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <div>
                        <h4 className="font-semibold text-green-900">1. Organisation centralisée :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Caractéristiques :</strong> Direction SI unique, ressources concentrées, décisions centralisées.</li>
                          <li><strong>Avantages :</strong> Cohérence globale, économies d&apos;échelle, contrôle unifié.</li>
                          <li><strong>Inconvénients :</strong> Rigidité, éloignement des besoins métier, délais de réaction.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">2. Organisation décentralisée :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Caractéristiques :</strong> Autonomie des entités, ressources réparties, décisions locales.</li>
                          <li><strong>Avantages :</strong> Proximité métier, réactivité, adaptation aux spécificités locales.</li>
                          <li><strong>Inconvénients :</strong> Risque d&apos;incohérence, coûts élevés, difficultés d&apos;intégration.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">3. Organisation fédérée :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Caractéristiques :</strong> Équilibre entre centralisation et décentralisation, gouvernance partagée.</li>
                          <li><strong>Avantages :</strong> Flexibilité, cohérence globale préservée, responsabilisation des entités.</li>
                          <li><strong>Inconvénients :</strong> Complexité de coordination, négociations permanentes.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">4. Organisation externalisée :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Caractéristiques :</strong> Recours à des prestataires externes, transfert de responsabilités.</li>
                          <li><strong>Avantages :</strong> Accès à l&apos;expertise, réduction des coûts, concentration sur le métier.</li>
                          <li><strong>Inconvénients :</strong> Dépendance, perte de contrôle, risques de sécurité.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <hr className="my-8 border-gray-300" />

              {/* Session 2022 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-teal-600">
                <h2 className="text-2xl font-bold text-teal-900 mb-4">Session 2022</h2>
                <div className="bg-teal-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">📋 Contexte</h3>
                  <p className="text-teal-700">
                    La société INNOVTECH, en pleine transformation digitale, doit choisir entre maintenir ses applications en interne ou migrer vers le cloud. Elle analyse les implications de chaque option sur sa stratégie SI.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 2 – Migration vers le cloud</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q6 :</strong> Analyser les enjeux de la migration vers le cloud pour INNOVTECH en termes de gouvernance SI.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2022')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2022'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2022'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2022'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <div>
                        <h4 className="font-semibold text-green-900">Enjeux stratégiques :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Alignement stratégique :</strong> Adaptation de la gouvernance SI aux objectifs business de transformation digitale.</li>
                          <li><strong>Agilité organisationnelle :</strong> Capacité à réagir rapidement aux évolutions du marché grâce à la flexibilité du cloud.</li>
                          <li><strong>Innovation :</strong> Accès facilité aux nouvelles technologies et services innovants.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Enjeux opérationnels :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Gestion des risques :</strong> Nouveaux risques liés à l&apos;externalisation et à la dépendance aux fournisseurs cloud.</li>
                          <li><strong>Contrôle des coûts :</strong> Passage d&apos;un modèle CAPEX à OPEX avec nécessité de nouveaux outils de pilotage.</li>
                          <li><strong>Compétences :</strong> Évolution des compétences internes vers la gestion de services cloud.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Enjeux de conformité :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Sécurité :</strong> Redéfinition des politiques de sécurité pour l&apos;environnement cloud.</li>
                          <li><strong>Conformité réglementaire :</strong> Respect des exigences légales (RGPD, localisation des données).</li>
                          <li><strong>Audit et contrôle :</strong> Adaptation des processus d&apos;audit aux environnements externalisés.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <hr className="my-8 border-gray-300" />

              {/* Session 2023 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-pink-600">
                <h2 className="text-2xl font-bold text-pink-900 mb-4">Session 2023</h2>
                <div className="bg-pink-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">📋 Contexte</h3>
                  <p className="text-pink-700">
                    L&apos;entreprise DATAFLOW, spécialisée dans l&apos;analyse de données, doit moderniser son infrastructure pour supporter la croissance de ses activités. Elle évalue l&apos;impact des nouvelles technologies sur son organisation SI.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 3 – Évolution de l&apos;organisation SI</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q8 :</strong> Expliquer le rôle des PDP (Plateformes de Développement et de Production) dans l&apos;organisation moderne du SI.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2023')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2023'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2023'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2023'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <div>
                        <h4 className="font-semibold text-green-900">Définition des PDP :</h4>
                        <p>Les Plateformes de Développement et de Production (PDP) sont des environnements intégrés qui fournissent l&apos;ensemble des outils, services et infrastructures nécessaires au développement, au déploiement et à l&apos;exploitation des applications.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Rôles principaux :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Standardisation :</strong> Uniformisation des environnements de développement et de production.</li>
                          <li><strong>Automatisation :</strong> Déploiement automatisé des applications et gestion des cycles de vie.</li>
                          <li><strong>Collaboration :</strong> Facilitation du travail en équipe et du partage de ressources.</li>
                          <li><strong>Gouvernance :</strong> Contrôle centralisé des processus de développement et de déploiement.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Avantages pour l&apos;organisation SI :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Productivité :</strong> Réduction du time-to-market grâce à l&apos;automatisation.</li>
                          <li><strong>Qualité :</strong> Amélioration de la qualité du code grâce aux outils intégrés de test.</li>
                          <li><strong>Sécurité :</strong> Intégration de la sécurité dès la phase de développement (DevSecOps).</li>
                          <li><strong>Évolutivité :</strong> Adaptation rapide aux nouvelles technologies et méthodologies.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <hr className="my-8 border-gray-300" />

              {/* Session 2024 */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-cyan-600">
                <h2 className="text-2xl font-bold text-cyan-900 mb-4">Session 2024</h2>
                <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-cyan-800 mb-3">📋 Contexte</h3>
                  <p className="text-cyan-700">
                    La société FUTURTECH, leader dans les technologies émergentes, doit adapter sa gouvernance SI pour intégrer l&apos;intelligence artificielle et les nouvelles approches de développement. Elle questionne l&apos;évolution de ses pratiques organisationnelles.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❓ Question pertinente</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Dossier 1 – Gouvernance SI et nouvelles technologies</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Q4 :</strong> Analyser l&apos;impact des nouvelles technologies (IA, cloud natif) sur la gouvernance du système d&apos;information.
                  </p>
                </div>
                
                <div className="mb-4">
                  <button
                    onClick={() => toggleCorrection('2024')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {visibleCorrections['2024'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {visibleCorrections['2024'] ? 'Masquer la correction' : 'Afficher la correction'}
                  </button>
                </div>
                
                {visibleCorrections['2024'] && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Correction</h3>
                    <div className="space-y-4 text-green-700">
                      <div>
                        <h4 className="font-semibold text-green-900">Impact de l&apos;Intelligence Artificielle :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Gouvernance des données :</strong> Nécessité de politiques strictes de qualité et d&apos;éthique des données.</li>
                          <li><strong>Nouveaux risques :</strong> Biais algorithmiques, explicabilité des décisions automatisées.</li>
                          <li><strong>Compétences :</strong> Évolution vers des profils data scientists et AI engineers.</li>
                          <li><strong>Réglementation :</strong> Conformité aux nouvelles réglementations sur l&apos;IA (AI Act européen).</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Impact du Cloud Natif :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Architecture :</strong> Passage aux microservices et conteneurisation.</li>
                          <li><strong>DevOps :</strong> Intégration continue et déploiement automatisé.</li>
                          <li><strong>Observabilité :</strong> Nouveaux outils de monitoring et de gestion des performances.</li>
                          <li><strong>Sécurité :</strong> Sécurité intégrée dès la conception (Security by Design).</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">Évolution de la gouvernance :</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li><strong>Agilité :</strong> Gouvernance adaptative et itérative.</li>
                          <li><strong>Automatisation :</strong> Gouvernance assistée par l&apos;IA pour la prise de décision.</li>
                          <li><strong>Collaboration :</strong> Approches cross-fonctionnelles et équipes pluridisciplinaires.</li>
                          <li><strong>Mesure :</strong> KPIs en temps réel et tableaux de bord prédictifs.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}