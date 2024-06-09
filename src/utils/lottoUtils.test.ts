import { describe, expect, it } from 'vitest';
import { checkForWin } from './lottoUtils';
import { DividendResult } from '@/types';

describe('should return a WinCheckResult object with the correct values', () => {
  const game: number[] = [1, 2, 3, 4, 5, 6];
  const dividends: DividendResult[] = [
    {
      Division: 1,
      BlocDividend: 1000000,
      BlocNumberOfWinners: 1,
      CompanyId: 'comp',
      CompanyNumberOfWinners: 1,
      CompanyDividend: 1,
      PoolTransferType: 'ptt',
      PoolTransferredTo: 1,
      PrizeBoostValue: 0,
    },
    {
      Division: 2,
      BlocDividend: 100000,
      BlocNumberOfWinners: 1,
      CompanyId: 'comp',
      CompanyNumberOfWinners: 1,
      CompanyDividend: 1,
      PoolTransferType: 'ptt',
      PoolTransferredTo: 1,
      PrizeBoostValue: 0,
    },
    {
      Division: 3,
      BlocDividend: 10000,
      BlocNumberOfWinners: 1,
      CompanyId: 'comp',
      CompanyNumberOfWinners: 1,
      CompanyDividend: 1,
      PoolTransferType: 'ptt',
      PoolTransferredTo: 1,
      PrizeBoostValue: 0,
    },
    {
      Division: 4,
      BlocDividend: 1000,
      BlocNumberOfWinners: 1,
      CompanyId: 'comp',
      CompanyNumberOfWinners: 1,
      CompanyDividend: 1,
      PoolTransferType: 'ptt',
      PoolTransferredTo: 1,
      PrizeBoostValue: 0,
    },
    {
      Division: 5,
      BlocDividend: 100,
      BlocNumberOfWinners: 1,
      CompanyId: 'comp',
      CompanyNumberOfWinners: 1,
      CompanyDividend: 1,
      PoolTransferType: 'ptt',
      PoolTransferredTo: 1,
      PrizeBoostValue: 0,
    },
    {
      Division: 6,
      BlocDividend: 10,
      BlocNumberOfWinners: 1,
      CompanyId: 'comp',
      CompanyNumberOfWinners: 1,
      CompanyDividend: 1,
      PoolTransferType: 'ptt',
      PoolTransferredTo: 1,
      PrizeBoostValue: 0,
    },
  ];
  it('When primary is 6', () => {
    // Arrange
    const primary = 6;
    const secondary = 0;

    // Act
    const result = checkForWin(
      'MondayWednesdayFridayLotto',
      primary,
      secondary,
      game,
      dividends
    );

    // Assert
    expect(result.Win).toBe(true);
    expect(result.Division).toBe(1);
    expect(result.Prize).toBe('$1000000');
    expect(result.Game).toEqual(game);
    expect(result.PrimaryNumberCount).toBe(primary);
    expect(result.SecondaryNumberCount).toBe(secondary);
  });
  it('When primary is 5 and secondary is 1', () => {
    // Arrange
    const primary = 5;
    const secondary = 1;

    // Act
    const result = checkForWin(
      'MondayWednesdayFridayLotto',
      primary,
      secondary,
      game,
      dividends
    );

    // Assert
    expect(result.Win).toBe(true);
    expect(result.Division).toBe(2);
    expect(result.Prize).toBe('$100000');
    expect(result.Game).toEqual(game);
    expect(result.PrimaryNumberCount).toBe(primary);
    expect(result.SecondaryNumberCount).toBe(secondary);
  });
  it('When primary is 5', () => {
    // Arrange
    const primary = 5;
    const secondary = 0;

    // Act
    const result = checkForWin(
      'MondayWednesdayFridayLotto',
      primary,
      secondary,
      game,
      dividends
    );

    // Assert
    expect(result.Win).toBe(true);
    expect(result.Division).toBe(3);
    expect(result.Prize).toBe('$10000');
    expect(result.Game).toEqual(game);
    expect(result.PrimaryNumberCount).toBe(primary);
    expect(result.SecondaryNumberCount).toBe(secondary);
  });
  it('When primary is 4', () => {
    // Arrange
    const primary = 4;
    const secondary = 0;

    // Act
    const result = checkForWin(
      'MondayWednesdayFridayLotto',
      primary,
      secondary,
      game,
      dividends
    );

    // Assert
    expect(result.Win).toBe(true);
    expect(result.Division).toBe(4);
    expect(result.Prize).toBe('$1000');
    expect(result.Game).toEqual(game);
    expect(result.PrimaryNumberCount).toBe(primary);
    expect(result.SecondaryNumberCount).toBe(secondary);
  });
  it('When primary is 3 and secondary is 1', () => {
    // Arrange
    const primary = 3;
    const secondary = 1;

    // Act
    const result = checkForWin(
      'MondayWednesdayFridayLotto',
      primary,
      secondary,
      game,
      dividends
    );

    // Assert
    expect(result.Win).toBe(true);
    expect(result.Division).toBe(5);
    expect(result.Prize).toBe('$100');
    expect(result.Game).toEqual(game);
    expect(result.PrimaryNumberCount).toBe(primary);
    expect(result.SecondaryNumberCount).toBe(secondary);
  });
  it('When primary is 0 and secondary is 2', () => {
    // Arrange
    const primary = 0;
    const secondary = 2;

    // Act
    const result = checkForWin(
      'MondayWednesdayFridayLotto',
      primary,
      secondary,
      game,
      dividends
    );

    // Assert
    expect(result.Win).toBe(false);
    expect(result.Division).toBe(0);
    expect(result.Prize).toBe('$0.0');
    expect(result.Game).toEqual(game);
    expect(result.PrimaryNumberCount).toBe(primary);
    expect(result.SecondaryNumberCount).toBe(secondary);
  });
});
