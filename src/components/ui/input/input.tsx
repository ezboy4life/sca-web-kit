'use client';

import styles from './input.module.scss';
import { clsx } from 'clsx';

import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react/dist/ssr';
import { ChangeEventHandler, HTMLInputTypeAttribute, KeyboardEventHandler, useState } from 'react';

export default function Input(
  {
    id,
    label,
    placeholder,
    className,
    inputClassName,
    value,
    defaultValue,
    autoFocus,
    required,
    disabled,
    error,
    errorMsg,
    maxLength,
    type = 'text',
    onChange,
    onKeyDown,
  }: {
    id?: string,
    label?: string,
    placeholder?: string,
    className?: string,
    inputClassName?: string,
    value?: string | number | readonly string[],
    defaultValue?: string
    autoFocus?: boolean,
    required?: boolean,
    disabled?: boolean,
    error?: boolean,
    errorMsg?: string,
    maxLength?: number,
    type?: HTMLInputTypeAttribute,
    onChange?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>,
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>,
  }
) {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute | undefined>(type)

  return (
    <div className={clsx(
      className,
      styles['input-wrapper'],
    )}>
      {label &&
        <label className={styles['label']}>{label}</label>
      }

      <div className={styles['wrapper']}>
        <input
          id={id}
          className={clsx(
            inputClassName,
            styles[type],
            styles['input'],
            { [styles['error']]: error },
          )}
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          type={inputType}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />

        {type === 'password' &&
          <button
            type='button'
            className={styles['reveal-password']}
            onClick={() => {
              if (inputType === 'text')
                setInputType('password');
              else
                setInputType('text');
            }}
          >
            {inputType === 'password' && <EyeSlashIcon className={styles['icon']} size={22.5} />}
            {inputType === 'text' && <EyeIcon className={styles['icon']} size={22.5} />}
          </button>
        }
      </div>

      {error && errorMsg &&
        <p className={styles['error-message']}>{errorMsg}</p>
      }
    </div>
  )
}

