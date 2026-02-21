import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      className = '',
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles = 'rounded-lg p-4 md:p-6 font-inter';

    const variantStyles = {
      default: 'bg-white border border-gray-200',
      elevated: 'bg-white shadow-lg',
      outlined: 'bg-transparent border-2 border-primary-500',
    };

    const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    return (
      <div ref={ref} className={finalClassName} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

export { Card, type CardProps };
