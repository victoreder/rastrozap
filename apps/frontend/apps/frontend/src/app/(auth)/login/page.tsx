'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError('Email ou senha incorretos');
        setIsLoading(false);
        return;
      }

      router.push('/app/dashboard');
    } catch (err) {
      setError('Erro de conexão');
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-slate-900">Entrar</h2></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
          required
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <div className="border-t pt-4 text-center">
        <p className="text-sm">
          Não tem conta?{' '}
          <Link href="/registro" className="text-blue-600 hover:text-blue-700">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
