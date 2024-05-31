import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('<Heading/>', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Most popular</Heading>);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveClass(
      'text-white',
    );
  });

  it('should render a black heading when color is passed', () => {
    render(<Heading color='black'>Most popular</Heading>);
    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveClass(
      'text-black',
    );
  });

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Most popular</Heading>);
    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveClass(
      'text-black',
    );
  });
});
