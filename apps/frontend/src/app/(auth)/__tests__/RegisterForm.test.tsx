import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from '../components/RegisterForm';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

global.fetch = jest.fn();

describe('RegisterForm', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  test('renders register form with email, password, confirm password fields', () => {
    render(<RegisterForm />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirmar Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /criar conta/i })).toBeInTheDocument();
  });

  test('shows error when passwords do not match', () => {
    render(<RegisterForm />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const confirmInput = screen.getByPlaceholderText('Confirmar Senha');
    const submitButton = screen.getByRole('button', { name: /criar conta/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmInput, { target: { value: 'different' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Senhas não correspondem')).toBeInTheDocument();
  });

  test('shows error when terms not accepted', () => {
    render(<RegisterForm />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const confirmInput = screen.getByPlaceholderText('Confirmar Senha');
    const submitButton = screen.getByRole('button', { name: /criar conta/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Você deve aceitar os termos de serviço')).toBeInTheDocument();
  });

  test('redirects to dashboard on successful registration', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<RegisterForm />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const confirmInput = screen.getByPlaceholderText('Confirmar Senha');
    const termsCheckbox = screen.getByRole('checkbox');
    const submitButton = screen.getByRole('button', { name: /criar conta/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmInput, { target: { value: 'password123' } });
    fireEvent.click(termsCheckbox);
    fireEvent.click(submitButton);

    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(mockPush).toHaveBeenCalledWith('/app/dashboard');
  });
});
