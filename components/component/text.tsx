import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <span
      className={`text-lg font-medium text-gray-800 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;