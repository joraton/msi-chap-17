import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  buttonColor: string;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor,
  buttonColor
}: SectionBlockProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          {/* Icon */}
          <div className={`${bgColor} p-2.5 sm:p-3 rounded-full flex-shrink-0`}>
            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-tight">{title}</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={href}
          className={`${buttonColor} hover:opacity-90 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base w-full sm:w-auto text-center flex-shrink-0`}
        >
          Commencer
        </Link>
      </div>
    </div>
  );
}