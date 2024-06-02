import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('<Heading/>', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Most popular</Heading>);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveStyle({
      color: 'rgb(250 250 250/1)',
    });
  });

  it('should render a black heading when color is passed', () => {
    render(<Heading color='black'>Most popular</Heading>);

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveStyle({
      color: 'rgb(3 5 23/1)',
    });
  });

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Most popular</Heading>);

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveStyle({
      'border-left': '0.7rem solid rgb(60 211 193/1)',
    });
  });

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Most popular</Heading>);

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveStyle({
      'border-bottom': '0.5rem solid rgb(242 49 165/1)',
    });
  });
});
