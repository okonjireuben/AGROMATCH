import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function NotificationToast() {
  const { notification } = useApp();

  if (!notification) return null;

  const isSuccess = notification.type === 'success';
  const isError = notification.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-bounce-in">
      <div className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-elevated border backdrop-blur-md text-sm font-medium ${
        isSuccess 
          ? 'bg-emerald-950/90 border-emerald-500/30 text-emerald-100' 
          : isError 
            ? 'bg-rose-950/90 border-rose-500/30 text-rose-100'
            : 'bg-slate-900/90 border-slate-700 text-slate-100'
      }`}>
        {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
        {isError && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
        {!isSuccess && !isError && <Info className="w-5 h-5 text-sky-400 shrink-0" />}
        <span>{notification.message}</span>
      </div>
    </div>
  );
}
