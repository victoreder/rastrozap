import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error';
  label: string;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      label,
      className = '',
      ...props
    },
    ref,
  ) => {
    const baseStyles = 'inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-inter';

    const variantStyles = {
      default: 'bg-gray-100 text-gray-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
    };

    const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    return (
      <span ref={ref} className={finalClassName} {...props}>
        {label}
      </span>
    );
  },
);

Badge.displayName = 'Badge';

export { Badge, type BadgeProps };
