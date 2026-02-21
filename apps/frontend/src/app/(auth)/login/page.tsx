import { LoginForm } from '../components/LoginForm';

export const metadata = {
  title: 'Login - RastroZap',
  description: 'Entre na sua conta RastroZap para acessar seu dashboard de rastreamento de leads.',
};

export default function LoginPage() {
  return <LoginForm />;
}
