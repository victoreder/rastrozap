import RegisterForm from '../components/RegisterForm';
import Link from 'next/link';

export const metadata = {
  title: 'Registrar - RastroZap',
  description: 'Crie sua conta RastroZap',
};

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Criar Conta</h2>
      </div>
      <RegisterForm />
      <div className="border-t pt-4 text-center">
        <p className="text-sm">
          Já tem conta?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
