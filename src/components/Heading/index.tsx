import { PropsWithChildren } from 'react';

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
  return <h2>{children}</h2>;
}
