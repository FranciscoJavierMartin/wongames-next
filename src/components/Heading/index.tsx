import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export type HeadingProps = {
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export default function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
}: PropsWithChildren<HeadingProps>) {
  return (
    <h2
      className={clsx('text-xlarge md:text-xxlarge', {
        'text-white': color === 'white',
        'text-black': color === 'black',
        'border-l-[0.7rem] border-solid border-l-secondary pl-xxsmall':
          lineLeft,
        'relative mb-medium after:absolute after:bottom-[-1rem] after:left-[0px] after:w-[5rem] after:border-[0.4rem] after:border-solid after:border-primary':
          lineBottom,
      })}
    >
      {children}
    </h2>
  );
}
