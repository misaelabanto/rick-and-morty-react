import { CharacterCard } from './CharacterCard'
import { render, screen } from '@testing-library/react'

describe('CharacterCard', () => {
  test('should show Character Card with correct props', () => {
    /** @type import('./CharacterCard').Character */
    const character = {
      name: 'Rick Sanchez',
      status: 'Alive',
      origin: 'Earth',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      type: ''
    }
    render(<CharacterCard {... character} />);
    const characterCard = screen.getByTitle('Character Card');
    expect(characterCard).toHaveClass('flex');
  })
})