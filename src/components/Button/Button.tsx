import React from 'react';
import './Button.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: VoidFunction;
};

export function Button({ children, className, onClick }: Props) {
    return <button className={`button ${className}`} onClick={onClick}>
        {children}
    </button>;
}

