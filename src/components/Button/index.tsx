import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
}>;

export default function Button({ children, size = 'medium' }: ButtonProps) {
  return (
    <button
      className={clsx([
        'rounded border-0 bg-gradient-to-b from-[#ff5f5f] from-0% to-[#f062c0] to-50% py-xxsmall text-white',
        {
          'h-[3rem] px-xxsmall text-xsmall': size === 'small',
          'h-large px-medium text-small': size === 'medium',
          'h-[5rem] px-xlarge text-medium': size === 'large',
        },
      ])}
    >
      {!!children && <span>{children}</span>}
    </button>
  );
}
