import styles from './input.module.scss';

import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react/dist/ssr';
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from 'react';

export default function Input(
  {
    id,
    label,
    placeholder,
    className,
    inputClassName,
    defaultValue,
    autoFocus,
    required,
    disabled,
    error,
    errorMsg,
    maxLength,
    type = 'text',
    onChange,
  }: {
    id?: string,
    label?: string,
    placeholder?: string,
    className?: string,
    inputClassName?: string,
    defaultValue?: string
    autoFocus?: boolean,
    required?: boolean,
    disabled?: boolean,
    error?: boolean,
    errorMsg?: string,
    maxLength?: number,
    type?: HTMLInputTypeAttribute,
    onChange?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>,
  }
) {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute | undefined>(type)

  return (
    <div className={`${styles['input-wrapper']}  ${className}`}>
      {label &&
        <label className={styles['label']}>{label}</label>
      }

      <div className={styles['wrapper']}>
        <input
          id={id}
          className={`
            ${styles['input']}
            ${styles[type]}
            ${inputClassName}
            ${error && styles['input-error']}
          `}
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
          disabled={disabled}
          defaultValue={defaultValue}
          type={inputType}
          onChange={onChange}
          maxLength={maxLength}
        />

        {type === 'password' &&
          <button
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

