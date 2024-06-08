import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button/>', () => {
  it('should render the medium size by default', () => {
    render(<Button>Buy now</Button>);

    expect(
      screen.getByRole('button', { name: /buy now/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4.0rem',
      padding: '0.8rem 3.2rem 0.8rem 3.2rem',
      'font-size': '1.4rem',
    });
  });

  it('should render the small size', () => {
    render(<Button size='small'>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    render(<Button size='large'>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem 0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%',
    });
  });
});
