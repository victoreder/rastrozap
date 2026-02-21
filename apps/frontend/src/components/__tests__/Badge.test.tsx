import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from '../ui/Badge';

describe('Badge Component', () => {
  it('renders badge with label', () => {
    render(<Badge label="Success" />);
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Badge label="Default" variant="default" />);
    expect(screen.getByText('Default')).toHaveClass('bg-gray-100');

    rerender(<Badge label="Success" variant="success" />);
    expect(screen.getByText('Success')).toHaveClass('bg-green-100');

    rerender(<Badge label="Warning" variant="warning" />);
    expect(screen.getByText('Warning')).toHaveClass('bg-yellow-100');

    rerender(<Badge label="Error" variant="error" />);
    expect(screen.getByText('Error')).toHaveClass('bg-red-100');
  });

  it('applies custom className', () => {
    render(<Badge label="Custom" className="custom-class" />);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });
});
