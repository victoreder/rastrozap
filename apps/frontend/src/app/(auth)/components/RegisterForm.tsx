'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (!formData.passwordConfirm) {
      newErrors.passwordConfirm = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = 'As senhas não correspondem';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Você deve aceitar os termos de serviço';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ form: data.message || 'Falha ao criar conta' });
        return;
      }

      router.push('/app/dashboard');
    } catch (err) {
      setErrors({ form: 'Erro de conexão. Tente novamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Criar Conta</h2>
        <p className="text-slate-600 mt-1">Comece a rastrear seus leads agora</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
            Senha
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="••••••"
          />
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Password Confirm */}
        <div>
          <label htmlFor="passwordConfirm" className="block text-sm font-medium text-slate-700 mb-2">
            Confirmar Senha
          </label>
          <input
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="••••••"
          />
          {errors.passwordConfirm && <p className="text-red-600 text-sm mt-1">{errors.passwordConfirm}</p>}
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3">
          <input
            id="acceptTerms"
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600"
          />
          <label htmlFor="acceptTerms" className="text-sm text-slate-600">
            Concordo com os{' '}
            <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              termos de serviço
            </Link>{' '}
            e{' '}
            <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              política de privacidade
            </Link>
          </label>
        </div>
        {errors.acceptTerms && <p className="text-red-600 text-sm">{errors.acceptTerms}</p>}

        {/* Form Error */}
        {errors.form && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">{errors.form}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
        >
          {isLoading ? 'Criando conta...' : 'Criar Conta'}
        </button>
      </form>

      {/* Links */}
      <div className="border-t border-slate-200 pt-4 text-center">
        <p className="text-slate-600 text-sm">
          Já tem conta?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Entrar aqui
          </Link>
        </p>
      </div>
    </div>
  );
}
