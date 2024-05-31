import { render, screen } from '@testing-library/react';
import Heading from '.';

describe('<Heading/>', () => {
  it('should render the heading', () => {
    render(<Heading>Most popular</Heading>);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
  });
});
