import { AppBar } from './AppBar'
import { render, screen } from '@testing-library/react'

describe('AppBar', () => {
  test('should show "Rick y Morty" with upper case text', () => {
    render(<AppBar />);
    const header = screen.getByText(/rick y morty/i);
    expect(header.textContent).toBe('RICK Y MORTY');
  })
})