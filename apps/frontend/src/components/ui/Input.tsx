import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'md' | 'lg';
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = 'md',
      error,
      label,
      className = '',
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'border rounded-lg font-inter transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500';

    const sizeStyles = {
      sm: 'px-2.5 py-1.5 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    };

    const borderStyles = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:border-primary-500';

    const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-50' : 'bg-white';

    const finalClassName = `${baseStyles} ${sizeStyles[inputSize]} ${borderStyles} ${disabledStyles} ${className}`;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={finalClassName}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input, type InputProps };
