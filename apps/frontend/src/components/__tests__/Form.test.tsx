import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../ui/Form';

describe('Form Component', () => {
  it('renders form element', () => {
    const { container } = render(
      <Form onSubmit={jest.fn()}>
        <input type="text" />
      </Form>
    );
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', async () => {
    const handleSubmit = jest.fn();
    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
