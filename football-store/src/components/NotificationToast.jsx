import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function NotificationToast({ message, type }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-sm">
      <div className={`p-4 rounded-2xl border shadow-2xl backdrop-blur-md flex items-center gap-3 ${
        type === 'error'
          ? 'bg-rose-950/90 border-rose-500 text-white'
          : type === 'info'
          ? 'bg-slate-900/90 border-slate-700 text-white'
          : 'bg-[#0B3B24]/95 border-rf-neon text-white shadow-neon'
      }`}>
        {type === 'error' ? (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
        ) : type === 'info' ? (
          <Info className="w-5 h-5 text-cyan-400 shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-rf-neon shrink-0" />
        )}
        <p className="text-xs font-bold leading-snug">{message}</p>
      </div>
    </div>
  );
}
