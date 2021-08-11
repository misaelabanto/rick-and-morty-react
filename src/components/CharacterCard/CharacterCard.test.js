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
    const imgElement = characterCard.querySelector('img');
    expect(imgElement).toHaveProperty('src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
    expect(characterCard.textContent).toContain('Rick Sanchez');
    expect(characterCard.textContent).toContain('Alive');
    expect(characterCard.textContent).toContain('Earth');
    expect(characterCard.textContent).toContain('Male');
  })
})