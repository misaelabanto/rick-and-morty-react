const API_URL = 'https://rickandmortyapi.com/api/character/';

export class CharacterService {
  /** @param {number} page */
  static getCharacters(page) {
    const url = `${API_URL}?page=${page}`;
    return fetch(url).then(res => res.json());
  }
  
  /** @param {string} query */
  static searchCharacter(query) {
    const url = `${API_URL}?name=${query}`;
    return fetch(url).then(res => res.json());
  }
}