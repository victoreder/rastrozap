import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from '../ui/Sidebar';

describe('Sidebar Component', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(<Sidebar isOpen={false} onClose={jest.fn()}>Content</Sidebar>);
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('-translate-x-full');
  });

  it('renders when isOpen is true', () => {
    render(<Sidebar isOpen={true} onClose={jest.fn()}>Content</Sidebar>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = jest.fn();
    render(<Sidebar isOpen={true} onClose={handleClose}>Content</Sidebar>);

    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });
});
