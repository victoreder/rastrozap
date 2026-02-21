'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== passwordConfirm) {
      setError('Senhas não correspondem');
      return;
    }

    if (password.length < 6) {
      setError('Senha deve ter no mínimo 6 caracteres');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError('Falha ao criar conta');
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
      <div><h2 className="text-2xl font-bold text-slate-900">Criar Conta</h2></div>
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
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirmar Senha"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
          required
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isLoading ? 'Criando...' : 'Criar Conta'}
        </button>
      </form>
      <div className="border-t pt-4 text-center">
        <p className="text-sm">
          Já tem conta?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-700">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
