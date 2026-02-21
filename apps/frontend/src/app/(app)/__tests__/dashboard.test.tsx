import { render, screen } from '@testing-library/react';
import DashboardPage from '../dashboard/page';
import { useAuth } from '@/lib/auth-context';

jest.mock('@/lib/auth-context');

describe('DashboardPage', () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      user: { email: 'test@example.com' },
    });
  });

  test('renders dashboard with welcome message', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Bem-vindo, test@example.com!')).toBeInTheDocument();
  });

  test('renders metrics cards', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Links Criados')).toBeInTheDocument();
    expect(screen.getByText('Leads Rastreados')).toBeInTheDocument();
    expect(screen.getByText('Leads Hoje')).toBeInTheDocument();
    expect(screen.getByText('Taxa de Conversão')).toBeInTheDocument();
  });

  test('renders quick actions', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Ações Rápidas')).toBeInTheDocument();
    expect(screen.getByText('Criar Novo Link')).toBeInTheDocument();
    expect(screen.getByText('Ver Relatórios')).toBeInTheDocument();
  });
});
