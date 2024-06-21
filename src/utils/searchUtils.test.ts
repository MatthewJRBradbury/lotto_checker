import { describe, expect, it } from 'vitest';
import { fuzzySearch } from './searchUtils';

describe('Should return correct search result', () => {
  it('when narrowing to single correct value', () => {
    // Arrange
    const data = ['Bob', 'Bobby', 'Natalie', 'John'];
    const searchInput = 'Bobby';

    // Act
    const searchResult = fuzzySearch(searchInput, data);

    // Assert
    expect(searchResult.result.length).toBeGreaterThan(0);
    expect(searchResult.matches).toBe(true);
    expect(searchResult.result.at(0)).toBe('Bobby');
  });

  it('when searching for many values', () => {
    // Arrange
    const data = ['Bob', 'Bobby', 'Natalie', 'John'];
    const searchInput = 'Bob';

    // Act
    const searchResult = fuzzySearch(searchInput, data);

    // Assert
    expect(searchResult.result.length).toBe(2);
    expect(searchResult.matches).toBe(true);
    expect(searchResult.result.at(0)).toBe('Bob');
    expect(searchResult.result.at(1)).toBe('Bobby');
  });

  it('when search finds no matching values', () => {
    // Arrange
    const data = ['Bob', 'Natalie', 'John'];
    const searchInput = 'Bobby';

    // Act
    const searchResult = fuzzySearch(searchInput, data);

    // Assert
    expect(searchResult.result.length).toBe(0);
    expect(searchResult.matches).toBe(false);
  });

  // items in list match lowerCaseInput when keys are provided
  it('should add items to results when keys are provided and match lowerCaseInput', () => {
    // Arrange
    const list = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
    ];
    const lowerCaseInput = 'alice';
    // Act
    const searchResult = fuzzySearch(lowerCaseInput, list, ['name']);
    // Assert
    expect(searchResult).toEqual({
      matches: true,
      result: [{ name: 'Alice', age: 30 }],
    });
  });
});
