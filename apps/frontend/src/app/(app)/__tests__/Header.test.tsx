import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { useAuth } from '@/lib/auth-context';

jest.mock('@/lib/auth-context');
jest.mock('@supabase/ssr', () => ({
  createBrowserClient: jest.fn(() => ({
    auth: {
      signOut: jest.fn().mockResolvedValue({}),
    },
  })),
}));
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('Header', () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      user: {
        id: 'user-1',
        email: 'test@example.com',
        user_metadata: { name: 'Test User' },
      },
    });
  });

  test('renders header component', () => {
    render(<Header />);
    expect(screen.getByText('RastroZap')).toBeInTheDocument();
  });

  test('renders user menu button with user initial', () => {
    render(<Header />);
    expect(screen.getByText('T')).toBeInTheDocument(); // User initial from "Test User"
  });

  test('displays user name in menu', () => {
    render(<Header />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });
});
