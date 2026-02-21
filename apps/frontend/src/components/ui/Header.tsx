import React from 'react';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  withLogo?: boolean;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      withLogo = true,
      className = '',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={`bg-white border-b border-gray-200 px-6 py-4 font-inter ${className}`}
        {...props}
      >
        <div className="flex items-center justify-between">
          {withLogo && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="font-semibold text-gray-900">RastroZap</span>
            </div>
          )}
          <div className="flex items-center gap-4">{children}</div>
        </div>
      </header>
    );
  },
);

Header.displayName = 'Header';

export { Header, type HeaderProps };
