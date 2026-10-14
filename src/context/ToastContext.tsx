import React, { createContext, useContext, useState, useCallback } from 'react';
import gsap from 'gsap';

export interface ToastMessage {
  id: string;
  message: string;
  type?: 'ok' | 'er' | 'info';
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type?: 'ok' | 'er' | 'info', duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Global fallback if invoked outside React tree
let globalShowToast: ((message: string, type?: 'ok' | 'er' | 'info', duration?: number) => void) | null = null;

export const showToast = (message: string, type: 'ok' | 'er' | 'info' = 'ok', duration = 4000) => {
  if (globalShowToast) {
    globalShowToast(message, type, duration);
  }
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    const el = document.getElementById(`toast-${id}`);
    if (el) {
      gsap.to(el, {
        x: 60,
        opacity: 0,
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        },
      });
    } else {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }
  }, []);

  const addToast = useCallback((message: string, type: 'ok' | 'er' | 'info' = 'ok', duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  }, []);

  globalShowToast = addToast;

  return (
    <ToastContext.Provider value={{ showToast: addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const ToastContainer: React.FC<{
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}> = ({ toasts, onRemove }) => {
  return (
    <div
      id="ts"
      className="fixed top-24 right-5 z-[100] flex flex-col gap-3 w-[min(380px,calc(100vw-40px))] pointer-events-none"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={() => onRemove(toast.id)} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{
  toast: ToastMessage;
  onRemove: () => void;
}> = ({ toast, onRemove }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const pbRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (!itemRef.current) return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isReduced) {
      gsap.fromTo(
        itemRef.current,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );

      if (pbRef.current) {
        gsap.fromTo(
          pbRef.current,
          { scaleX: 1 },
          {
            scaleX: 0,
            duration: (toast.duration || 4000) / 1000,
            ease: 'none',
            transformOrigin: 'left',
            onComplete: onRemove,
          }
        );
      }
    } else {
      const timer = setTimeout(onRemove, toast.duration || 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, onRemove]);

  const typeConfig = {
    ok: {
      icon: '✓',
      bg: 'bg-emerald-600',
    },
    er: {
      icon: '!',
      bg: 'bg-rose-600',
    },
    info: {
      icon: 'i',
      bg: 'bg-primary',
    },
  }[toast.type || 'ok'];

  return (
    <div
      id={`toast-${toast.id}`}
      role="status"
      ref={itemRef}
      className="relative overflow-hidden bg-white border border-surface-border rounded-2xl py-3.5 pl-4 pr-10 shadow-2xl flex items-start gap-3 text-sm text-typography-main pointer-events-auto"
    >
      <i
        className={`size-6 rounded-full flex-none flex items-center justify-center text-white not-italic font-semibold text-xs ${typeConfig.bg}`}
      >
        {typeConfig.icon}
      </i>
      <div className="flex-1 font-medium leading-relaxed">{toast.message}</div>
      <button
        type="button"
        aria-label="Close"
        onClick={onRemove}
        className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700 text-lg leading-none cursor-pointer p-1"
      >
        &times;
      </button>
      <span
        ref={pbRef}
        className="absolute left-0 bottom-0 h-[3px] w-full bg-primary origin-left"
      />
    </div>
  );
};
