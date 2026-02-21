import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, Column } from '../ui/Table';

describe('Table Component', () => {
  const columns: Column[] = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
  ];

  const data = [
    { name: 'John', age: '30' },
    { name: 'Jane', age: '25' },
  ];

  it('renders table with headers', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders table rows and data', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  it('renders striped rows when striped prop is true', () => {
    const { container } = render(<Table columns={columns} data={data} striped />);
    const rows = container.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
  });
});
