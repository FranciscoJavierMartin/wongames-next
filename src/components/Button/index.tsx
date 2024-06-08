import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
}>;

export default function Button({ children, size = 'medium' }: ButtonProps) {
  return <button>{!!children && <span>{children}</span>}</button>;
}
