import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

global.fetch = jest.fn();

describe('LoginForm', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  test('renders login form with email and password fields', () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  test('displays error message on login failure', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Email ou senha incorretos' }),
    });

    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrong' } });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText('Email ou senha incorretos');
    expect(errorMessage).toBeInTheDocument();
  });

  test('redirects to dashboard on successful login', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(mockPush).toHaveBeenCalledWith('/app/dashboard');
  });
});
