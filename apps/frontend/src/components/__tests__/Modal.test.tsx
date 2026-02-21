import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../ui/Modal';

describe('Modal Component', () => {
  it('does not render when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={jest.fn()} title="Test Modal">Content</Modal>);
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('renders when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={jest.fn()} title="Test Modal">Content</Modal>);
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose}>Content</Modal>);

    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when backdrop is clicked', async () => {
    const handleClose = jest.fn();
    const { container } = render(
      <Modal isOpen={true} onClose={handleClose}>
        Content
      </Modal>
    );

    const backdrop = container.querySelector('[class*="bg-black"]');
    if (backdrop) {
      await userEvent.click(backdrop);
      expect(handleClose).toHaveBeenCalled();
    }
  });
});
