import { describe, expect, it } from 'vitest';
import { numericArraysHaveSameContent } from './arrayUtils';

describe('should return correct boolean value for numeric array comparison', () => {
  it('when arrays have same content and order, should return true', () => {
    // Arrange
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [1, 2, 3, 4, 5, 6];

    // Act
    const result = numericArraysHaveSameContent(arr1, arr2);

    // Assert
    expect(result).toBe(true);
  });
  it('when arrays have same content but different order, should return true', () => {
    // Arrange
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [6, 5, 3, 2, 1, 4];

    // Act
    const result = numericArraysHaveSameContent(arr1, arr2);

    // Assert
    expect(result).toBe(true);
  });
  it('when arrays have different content, should return false', () => {
    // Arrange
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [1, 2, 3, 9, 13, 12];

    // Act
    const result = numericArraysHaveSameContent(arr1, arr2);

    // Assert
    expect(result).toBe(false);
  });
  it('when arrays have different length, should return false', () => {
    // Arrange
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [1, 2, 3, 4, 5];

    // Act
    const result = numericArraysHaveSameContent(arr1, arr2);

    // Assert
    expect(result).toBe(false);
  });
});
