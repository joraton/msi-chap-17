import { Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-8 sm:mb-12">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 overflow-x-auto">
        <div className="flex items-center whitespace-nowrap">
          <span>Accueil</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span>Cours</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span className="text-blue-600">L&apos;Externalisation</span>
        </div>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 p-3 sm:p-4 rounded-xl mx-auto sm:mx-0">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
              Chapitre 17 : L&apos;Externalisation
            </h1>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
              Maîtrisez les concepts d&apos;externalisation, datacenters et cloud computing dans le cadre du DSCG UE5 - MSI
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}