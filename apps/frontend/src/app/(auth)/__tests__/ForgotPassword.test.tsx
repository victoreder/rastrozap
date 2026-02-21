import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ForgotPasswordPage from '../esqueci-senha/page';

global.fetch = jest.fn();

describe('ForgotPasswordPage', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test('renders forgot password form', () => {
    render(<ForgotPasswordPage />);
    expect(screen.getByText('Recuperar Senha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar link/i })).toBeInTheDocument();
  });

  test('sends forgot password request with email', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        message: 'Link de recuperação enviado',
      }),
    });

    render(<ForgotPasswordPage />);
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: /enviar link/i });

    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'user@example.com' }),
      });
    });

    const successMessage = await screen.findByText(/link de recuperação enviado/i);
    expect(successMessage).toBeInTheDocument();
  });

  test('displays error message on failed request', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        error: 'Email não encontrado',
      }),
    });

    render(<ForgotPasswordPage />);
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: /enviar link/i });

    fireEvent.change(emailInput, { target: { value: 'nonexistent@example.com' } });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText('Email não encontrado');
    expect(errorMessage).toBeInTheDocument();
  });

  test('has link back to login', () => {
    render(<ForgotPasswordPage />);
    const loginLink = screen.getByRole('link', { name: /voltar para login/i });
    expect(loginLink).toHaveAttribute('href', '/login');
  });
});
