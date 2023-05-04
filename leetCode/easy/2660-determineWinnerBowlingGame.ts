import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function determineWinnerBowlingGame(player1: number[], player2: number[]) {
  let hasPlayer1Hit10Pins = false;
  let player1Hit10PinsTurnCount = 0;
  let hasPlayer2Hit10Pins = false;
  let player2Hit10PinsTurnCount = 0;

  const player1Score = player1.reduce((total, pinsHit) => {
    if (player1Hit10PinsTurnCount === 2) {
      hasPlayer1Hit10Pins = false;
      player1Hit10PinsTurnCount = 0;
    }

    if (hasPlayer1Hit10Pins) {
      total += pinsHit * 2;
      player1Hit10PinsTurnCount += 1;
    } else total += pinsHit;

    if (pinsHit === 10) {
      if (hasPlayer1Hit10Pins) {
        player1Hit10PinsTurnCount = 0;
      }
      hasPlayer1Hit10Pins = true;
    }

    return total;
  }, 0);

  const player2Score = player2.reduce((total, pinsHit) => {
    if (player2Hit10PinsTurnCount === 2) {
      hasPlayer2Hit10Pins = false;
      player2Hit10PinsTurnCount = 0;
    }

    if (hasPlayer2Hit10Pins) {
      total += pinsHit * 2;
      player2Hit10PinsTurnCount += 1;
    } else total += pinsHit;

    if (pinsHit === 10) {
      if (hasPlayer2Hit10Pins) {
        player2Hit10PinsTurnCount = 0;
      }
      hasPlayer2Hit10Pins = true;
    }

    return total;
  }, 0);

  return player1Score > player2Score ? 1 : player1Score < player2Score ? 2 : 0;
}

export { determineWinnerBowlingGame };

const player1 = [7, 10, 2, 6, 8, 5, 4, 6, 10, 9, 1, 4, 3, 10, 0, 9, 6, 1, 0];
const player2 = [2, 1, 9, 4, 5, 0, 6, 5, 6, 10, 10, 4, 8, 8, 6, 9, 2, 9, 5];
console.log(determineWinnerBowlingGame(player1, player2));

describe("determineWinnerBowlingGame", () => {
  it("1. should return the winner of the game", () => {
    const player1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const player2 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    assertEquals(determineWinnerBowlingGame(player1, player2), 0);
  });

  it("2. should return the winner of the game", () => {
    const player1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const player2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    assertEquals(determineWinnerBowlingGame(player1, player2), 1);
  });

  it("3. should return the winner of the game", () => {
    const player1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const player2 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    assertEquals(determineWinnerBowlingGame(player1, player2), 2);
  });

  it("4. should return the winner of the game", () => {
    const player1 = [3, 6, 10, 8];
    const player2 = [9, 9, 9, 9];
    assertEquals(determineWinnerBowlingGame(player1, player2), 2);
  });

  it("5. should return the winner of the game", () => {
    const player1 = [7, 8, 8, 5, 2]; // 30
    const player2 = [10, 1, 4, 2, 6]; // 28
    assertEquals(determineWinnerBowlingGame(player1, player2), 1);
  });

  it("4. should return the winner of the game", () => {
    const player1 = [7, 6, 6, 3, 9, 7, 5, 9, 5, 9, 1, 0, 0, 4, 3, 1, 2]; // 87
    const player2 = [5, 0, 7, 10, 4, 1, 4, 2, 4, 0, 1, 5, 0, 10, 9, 0, 4]; // 80
    assertEquals(determineWinnerBowlingGame(player1, player2), 2);
  });

  it("4. should return the winner of the game", () => {
    const player1 = [
      7, 10, 2, 6, 8, 5, 4, 6, 10, 9, 1, 4, 3, 10, 0, 9, 6, 1, 0,
    ];
    const player2 = [2, 1, 9, 4, 5, 0, 6, 5, 6, 10, 10, 4, 8, 8, 6, 9, 2, 9, 5];
    assertEquals(determineWinnerBowlingGame(player1, player2), 2);
  });
});
