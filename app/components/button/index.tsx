import React, { forwardRef } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      responsive = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
