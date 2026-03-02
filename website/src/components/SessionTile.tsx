import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, User, Tag } from 'lucide-react';
import type { Session } from '../data/sessions';

interface SessionTileProps {
  session: Session;
}

const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'Keynote':
      return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800';
    case 'Breakout':
      return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800';
    case 'Learning Lab':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800';
    case 'Customer Story':
      return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800';
    case 'Expo':
      return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/30 dark:text-slate-300 dark:border-slate-800';
  }
};

export const SessionTile = ({ session }: SessionTileProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
    >
      <div className="flex flex-wrap gap-2 items-start mb-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryStyles(session.category)} border`}>
          {session.category}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          {session.day}
        </span>
        {session.details?.level && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
            {session.details.level}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {session.title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 flex-grow">
        {session.description}
      </p>
      
      <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <User className="h-4 w-4 mr-2 text-slate-400" />
          {session.speaker}
        </div>
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Clock className="h-4 w-4 mr-2 text-slate-400" />
          {session.time}
        </div>
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <MapPin className="h-4 w-4 mr-2 text-slate-400" />
          {session.location}
        </div>
        {session.details?.tracks && session.details.tracks.length > 0 && (
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap">
            <Tag className="h-4 w-4 mr-2 text-slate-400 flex-shrink-0" />
            <span className="truncate">{session.details.tracks.join(', ')}</span>
          </div>
        )}
      </div>

      <Link 
        to={`/catalog/${session.id}`}
        className="mt-6 inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
      >
        View Details <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  );
};
