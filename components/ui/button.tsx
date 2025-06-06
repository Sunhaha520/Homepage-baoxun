import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function Button({ children, className, variant = 'solid', size = 'md', onClick }: ButtonProps) {
  const baseStyles = 'rounded px-4 py-2 font-medium focus:outline-none';
  const variantStyles =
    variant === 'outline'
      ? 'border border-blue-600 text-blue-600 hover:bg-blue-50'
      : 'bg-blue-600 text-white hover:bg-blue-700';
  const sizeStyles =
    size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}