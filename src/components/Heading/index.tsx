import { PropsWithChildren } from 'react';
import * as S from './Heading.styles';

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
  return <S.Wrapper color={color}>{children}</S.Wrapper>;
}
