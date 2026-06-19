'use client';

import styles from './input.module.scss';
import { clsx } from 'clsx';

import React, { useState, forwardRef } from 'react';
import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react/dist/ssr';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  error?: boolean;
  errorMsg?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      className,
      inputClassName,
      error,
      errorMsg,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [revealPassword, setRevealPassword] = useState(false);

    const computedType = type === 'password' && revealPassword ? 'text' : type;

    return (
      <div className={clsx(className, styles['input-wrapper'])}>
        {label && <label className={styles['label']}>{label}</label>}

        <div className={styles['wrapper']}>
          <input
            {...props}
            ref={ref}
            type={computedType}
            className={clsx(
              inputClassName,
              styles[type],
              styles['input'],
              { [styles['error']]: error }
            )}
          />

          {type === 'password' && (
            <button
              type="button" // Important: explicitly type="button" to prevent accidental form submits!
              className={styles['reveal-password']}
              onClick={() => setRevealPassword((prev) => !prev)}
              aria-label={revealPassword ? "Hide password" : "Show password"}
            >
              {revealPassword ? (
                <EyeIcon className={styles['icon']} size={22.5} />
              ) : (
                <EyeSlashIcon className={styles['icon']} size={22.5} />
              )}
            </button>
          )}
        </div>

        {error && errorMsg && (
          <p className={styles['error-message']}>{errorMsg}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
