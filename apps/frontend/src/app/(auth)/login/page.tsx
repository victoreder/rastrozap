import LoginForm from '../components/LoginForm';
import Link from 'next/link';

export const metadata = {
  title: 'Entrar - RastroZap',
  description: 'Faça login na sua conta RastroZap',
};

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Entrar</h2>
      </div>
      <LoginForm />
      <div className="border-t pt-4 text-center space-y-4">
        <p className="text-sm">
          Não tem conta?{' '}
          <Link href="/registro" className="text-blue-600 hover:text-blue-700 font-semibold">
            Registre-se
          </Link>
        </p>
        <Link href="/esqueci-senha" className="text-sm text-slate-600 hover:text-slate-700 block">
          Esqueci minha senha
        </Link>
      </div>
    </div>
  );
}
