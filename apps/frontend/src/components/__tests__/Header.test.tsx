import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../ui/Header';

describe('Header Component', () => {
  it('renders header element', () => {
    render(<Header>Header content</Header>);
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('renders logo when withLogo is true', () => {
    render(<Header withLogo={true} />);
    expect(screen.getByText('RastroZap')).toBeInTheDocument();
  });

  it('does not render logo when withLogo is false', () => {
    render(<Header withLogo={false} />);
    expect(screen.queryByText('RastroZap')).not.toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Header>
        <span>Navigation</span>
      </Header>
    );
    expect(screen.getByText('Navigation')).toBeInTheDocument();
  });
});
