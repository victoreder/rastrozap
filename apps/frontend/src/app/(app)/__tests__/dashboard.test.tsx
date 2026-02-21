import { render, screen } from '@testing-library/react';
import DashboardPage from '../dashboard/page';
import { useAuth } from '@/lib/auth-context';

jest.mock('@/lib/auth-context');
jest.mock('@supabase/ssr');

describe('DashboardPage', () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      user: {
        id: 'user-1',
        email: 'test@example.com',
        user_metadata: { name: 'Test User' },
      },
    });
  });

  test('renders dashboard with welcome message using user name', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    // The welcome message uses user_metadata.name first
    expect(screen.getByText('Bem-vindo, Test User!')).toBeInTheDocument();
  });

  test('renders metrics cards with loading state initially', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Links Criados')).toBeInTheDocument();
    expect(screen.getByText('Leads Rastreados')).toBeInTheDocument();
    expect(screen.getByText('Leads Hoje')).toBeInTheDocument();
    expect(screen.getByText('Taxa de Conversão')).toBeInTheDocument();
  });
});
