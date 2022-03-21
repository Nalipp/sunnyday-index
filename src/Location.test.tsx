import { render } from '@testing-library/react';
import Location from './Location';
import locations from './defaultData';

const location = locations[0];

test('renders Location component', () => {
  render(<Location location={location} />);
});

test('Location component matches snapshot', () => {
  const { container } = render(
      <Location location={location} />
    );

  expect(container).toMatchSnapshot();
})
