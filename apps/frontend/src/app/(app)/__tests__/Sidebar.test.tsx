import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/app/dashboard'),
}));

describe('Sidebar', () => {
  test('renders sidebar with navigation links', () => {
    render(<Sidebar />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Meus Links')).toBeInTheDocument();
    expect(screen.getByText('Leads')).toBeInTheDocument();
    expect(screen.getByText('Jornada')).toBeInTheDocument();
    expect(screen.getByText('Configurações')).toBeInTheDocument();
  });

  test('renders RastroZap logo', () => {
    render(<Sidebar />);
    expect(screen.getByText('RastroZap')).toBeInTheDocument();
  });
});
