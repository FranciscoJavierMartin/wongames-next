import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
}>;

export default function Button({ children, size = 'medium' }: ButtonProps) {
  return (
    <button
      className={clsx([
        'rounded border-0 py-xxsmall text-white',
        {
          'h-[3rem] px-xxsmall text-xsmall': size === 'small',
          'h-large px-medium text-small': size === 'medium',
          'h-[5rem] px-xlarge text-medium': size === 'large',
        },
      ])}
      style={{
        background: 'linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%)',
      }}
    >
      {!!children && <span>{children}</span>}
    </button>
  );
}
