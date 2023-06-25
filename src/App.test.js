import { render, screen, prettyDOM} from '@testing-library/react';
import App from './App';

describe("Test for App", () => {
  it('renders input for getting user input', () => {
    const renderedData = render(<App />);
    expect(renderedData.container).toBeInTheDocument();
  });
});

