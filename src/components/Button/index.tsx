import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
};

export default function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx([
        'rounded border-0 bg-gradient-to-b from-[#ff5f5f] from-0% to-[#f062c0] to-50% py-xxsmall text-white',
        {
          'h-[3rem] px-xxsmall text-xsmall': size === 'small',
          'h-large px-medium text-small': size === 'medium',
          'h-[5rem] px-xlarge text-medium': size === 'large',
          'w-full': fullWidth,
          'button-with-icon': !!icon,
        },
      ])}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </button>
  );
}
