import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar, NavItem } from '../ui/Navbar';

describe('Navbar Component', () => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '/', isActive: true },
    { label: 'About', href: '/about', isActive: false },
    { label: 'Contact', href: '/contact', isActive: false },
  ];

  it('renders navigation items', () => {
    render(<Navbar items={navItems} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('highlights active navigation item', () => {
    render(<Navbar items={navItems} />);
    const homeButton = screen.getByText('Home').closest('button');
    expect(homeButton).toHaveClass('border-primary-500');
  });

  it('calls onNavigate when item is clicked', async () => {
    const handleNavigate = jest.fn();
    render(<Navbar items={navItems} onNavigate={handleNavigate} />);

    await userEvent.click(screen.getByText('About'));
    expect(handleNavigate).toHaveBeenCalledWith('/about');
  });
});
