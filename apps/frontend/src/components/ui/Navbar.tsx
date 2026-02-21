import React from 'react';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavbarProps {
  items: NavItem[];
  onNavigate?: (href: string) => void;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  items,
  onNavigate,
  className = '',
}) => {
  return (
    <nav className={`bg-white border-b border-gray-200 px-6 font-inter ${className}`}>
      <div className="flex gap-6">
        {items.map((item) => (
          <button
            key={item.href}
            onClick={() => onNavigate?.(item.href)}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
              item.isActive
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export { Navbar, type NavbarProps, type NavItem };
