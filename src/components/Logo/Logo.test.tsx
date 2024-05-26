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

  it('should render a black label when black color is passed', async () => {
    render(<Logo color='black' />);

    expect(screen.getByLabelText(/Won Games/i)).toHaveClass('text-black');
    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      color: 'rgb(3 5 23/1)',
    });
  });

  it('should render a normal logo when size is default', async () => {
    render(<Logo />);

    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      width: '11rem',
      height: '3.3rem',
    });
  });

  it('should render a bigger logo when size is large', async () => {
    render(<Logo size='large' />);

    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      width: '20rem',
      height: '5.9rem',
    });
  });
});
