import {
  DrawDataRequest,
  DrawResults,
  Games,
  WinCheckResult,
  DividendResult,
  DrawType,
  WinningCombo,
} from '@/types';

import gameRules from '@/config/gameRules.json';

const requestBody: DrawDataRequest = {
  CompanyId: 'Tattersalls',
  MaxDrawCountPerProduct: 10,
  OptionalProductFilter: ['MonWedLotto'],
};

export const analyseDraw = (
  drawType: DrawType,
  data: DrawResults,
  myGames: Games
): void => {
  for (const draw of data.DrawResults) {
    const primaryNumbers = draw.PrimaryNumbers;
    const secondaryNumbers = draw.SecondaryNumbers;
    const dividends = draw.Dividends;

    const winningGames: WinCheckResult[] = [];
    for (const [, gameNumbers] of Object.entries(myGames)) {
      const primaryNumberCount = gameNumbers.filter((el: number) =>
        primaryNumbers.includes(el)
      ).length;
      const secondaryNumberCount = gameNumbers.filter((el: number) =>
        secondaryNumbers.includes(el)
      ).length;

      const result = checkForWin(
        drawType,
        primaryNumberCount,
        secondaryNumberCount,
        gameNumbers,
        dividends
      );
      if (result.Win) {
        winningGames.push(result);
      }
    }
    winningGames.length > 0
      ? console.log(winningGames)
      : console.log('No Wins better luck next time :(');
  }
};

export const checkForWin = (
  drawType: DrawType,
  primary: number,
  secondary: number,
  game: number[],
  dividends: DividendResult[]
): WinCheckResult => {
  const response: WinCheckResult = {
    Win: false,
    Division: 0,
    Prize: '$0.0',
    Game: game,
    PrimaryNumberCount: primary,
    SecondaryNumberCount: secondary,
  };

  const winCombos: WinningCombo[] = gameRules?.[drawType]?.winningCombinations;

  for (const combo of Object.values(winCombos)) {
    if (
      primary >= combo.primaryNumberCount &&
      secondary >= combo.secondaryNumberCount
    ) {
      response.Win = true;
      response.Division = combo.division;
      response.Prize = `$${dividends.find(
        (div) => div.Division === combo.division
      )?.BlocDividend}`;
      return response;
    }
  }
  return response;
};
