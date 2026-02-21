import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown, DropdownOption } from '../ui/Dropdown';

describe('Dropdown Component', () => {
  const options: DropdownOption[] = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ];

  it('renders dropdown with placeholder', () => {
    render(<Dropdown options={options} placeholder="Select..." />);
    expect(screen.getByText('Select...')).toBeInTheDocument();
  });

  it('renders dropdown with label', () => {
    render(<Dropdown options={options} label="Choose option" />);
    expect(screen.getByText('Choose option')).toBeInTheDocument();
  });

  it('opens dropdown when button is clicked', async () => {
    render(<Dropdown options={options} />);
    const button = screen.getByRole('button');

    await userEvent.click(button);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('calls onChange when option is selected', async () => {
    const handleChange = jest.fn();
    render(<Dropdown options={options} onChange={handleChange} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);
    await userEvent.click(screen.getByText('Option 2'));

    expect(handleChange).toHaveBeenCalledWith('opt2');
  });

  it('displays selected value', async () => {
    render(<Dropdown options={options} value="opt2" />);
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
