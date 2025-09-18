import { render, screen } from '@testing-library/react';
import InputLabelBox from '.';

test('renders InputLabel Element', () => {
  render(
    <InputLabelBox
      id="username"
      placeHolder="username"
      label="USERNAME"
      type="text"
    />
  );
  expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
});
