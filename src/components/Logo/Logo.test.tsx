import { render, screen } from '@testing-library/react';
import Logo from '.';

describe('<Logo/>', () => {
  it('should render a white label by default', () => {
    render(<Logo />);

    expect(screen.getByLabelText(/Won Games/i)).toHaveClass('text-white');
    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      color: 'rgb(250 250 250/1)',
    });
  });
});
