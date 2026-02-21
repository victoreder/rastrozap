import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { useAuth } from '@/lib/auth-context';

jest.mock('@/lib/auth-context');

describe('Header', () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      user: { email: 'test@example.com' },
    });
  });

  test('renders header with user email', () => {
    render(<Header />);
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  test('renders logout button', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /sair/i })).toBeInTheDocument();
  });

  test('renders RastroZap title on mobile', () => {
    render(<Header />);
    expect(screen.getByText('RastroZap')).toBeInTheDocument();
  });
});
