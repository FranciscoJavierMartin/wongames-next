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
});
