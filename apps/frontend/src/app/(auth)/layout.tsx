import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">RastroZap</h1>
          <p className="text-slate-600 mt-2">Rastreie seus leads com precisão</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
}
