import { Target, Rocket, BarChart3, Cloud, Server, Brain, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions de l&apos;externalisation',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    buttonColor: 'bg-blue-600'
  },
  {
    title: 'Section I : Les Datacenters',
    description: 'Infrastructure, classification et écosystème des datacenters',
    href: '/section-1',
    icon: Server,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    buttonColor: 'bg-green-600'
  },
  {
    title: 'Section II : Services Cloud',
    description: 'IaaS, PaaS, SaaS et modèles de service',
    href: '/section-2',
    icon: Cloud,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    buttonColor: 'bg-purple-600'
  },
  {
    title: 'Section III : Stratégies Externalisation',
    description: 'Choix stratégiques et mise en œuvre',
    href: '/section-3',
    icon: BarChart3,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    buttonColor: 'bg-indigo-600'
  },
  {
    title: 'Quiz Interactif',
    description: 'Évaluez vos connaissances avec des questions interactives',
    href: '/quiz',
    icon: Brain,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    buttonColor: 'bg-orange-600'
  },
  {
    title: 'Cas pratiques',
    description: 'Exercices pratiques et cas concrets d&apos;examen',
    href: '/questions-dscg',
    icon: Award,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    buttonColor: 'bg-red-600'
  },
  {
    title: 'Questions DSCG',
    description: 'Questions DSCG originales par année avec contexte et corrections complètes',
    href: '/questions-dscg-originales',
    icon: Award,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    buttonColor: 'bg-purple-600'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
          Suivez le parcours structuré pour maîtriser l&apos;externalisation informatique
        </p>
      </div>

      {/* Sections Grid */}
      <div className="space-y-3 sm:space-y-4">
        {sections.map((section) => (
          <SectionBlock
            key={section.href}
            {...section}
          />
        ))}
      </div>
    </div>
  );
}