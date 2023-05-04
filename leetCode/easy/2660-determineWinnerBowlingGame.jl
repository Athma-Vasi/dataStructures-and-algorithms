function determineWinnerBowlingGame(player1::Vector{Int64}, player2::Vector{Int64})

  hasPlayer1Hit10Pins = false
  player1Hit10PinsTurnCount = 0
  player1Score = 0
  for score in player1
    if player1Hit10PinsTurnCount == 2
      hasPlayer1Hit10Pins = false
      player1Hit10PinsTurnCount = 0
    end

    if hasPlayer1Hit10Pins
      player1Score += score * 2
      player1Hit10PinsTurnCount += 1
    else
      player1Score += score
    end

    if score === 10
      if hasPlayer1Hit10Pins
        player1Hit10PinsTurnCount = 0
      end
      hasPlayer1Hit10Pins = true
    end
  end

  hasPlayer2Hit10Pins = false
  player2Hit10PinsTurnCount = 0
  player2Score = 0
  for score in player2
    if player2Hit10PinsTurnCount == 2
      hasPlayer2Hit10Pins = false
      player2Hit10PinsTurnCount = 0
    end

    if hasPlayer2Hit10Pins
      player2Score += score * 2
      player2Hit10PinsTurnCount += 1
    else
      player2Score += score
    end

    if score === 10
      if hasPlayer2Hit10Pins
        player2Hit10PinsTurnCount = 0
      end
      hasPlayer2Hit10Pins = true
    end
  end

  return player1Score > player2Score ? 1 : player1Score < player2Score ? 2 : 0
end

export determineWinnerBowlingGame


using Test
Test.@testset "determineWinnerBowlingGame" begin
  Test.@test determineWinnerBowlingGame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == 0
  Test.@test determineWinnerBowlingGame([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == 1
  Test.@test determineWinnerBowlingGame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) == 2

  player1 = [7, 6, 6, 3, 9, 7, 5, 9, 5, 9, 1, 0, 0, 4, 3, 1, 2]
  player2 = [5, 0, 7, 10, 4, 1, 4, 2, 4, 0, 1, 5, 0, 10, 9, 0, 4]
  Test.@test determineWinnerBowlingGame(player1, player2) == 2

  player1 = [
    7, 10, 2, 6, 8, 5, 4, 6, 10, 9, 1, 4, 3, 10, 0, 9, 6, 1, 0,
  ]
  player2 = [2, 1, 9, 4, 5, 0, 6, 5, 6, 10, 10, 4, 8, 8, 6, 9, 2, 9, 5]
  Test.@test determineWinnerBowlingGame(player1, player2) == 2
end
