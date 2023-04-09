function maxIncreaseToKeepCitySkyline(grid::Vector{Vector{Int64}})
  numOfCols = grid |> first |> length
  numOfRows = length(grid)
  # each gridCols array is a column inside [[(0,0), (0,1), (0,2), (0,3)], [...etc]]
  gridCols::Vector{Vector{Int64}} = []
  colIdx = 1

  while colIdx <= numOfCols
    col::Vector{Int64} = map(row -> row[colIdx], grid)
    push!(gridCols, col)
    colIdx += 1
  end

  newGridDiff::Vector{Vector{Int64}} = []

  y = 1
  x = 1

  while y <= numOfRows
    oldRow = grid[y]
    rowMax = maximum(oldRow)
    newDiffRow::Vector{Int64} = []

    while x <= numOfCols
      oldCol = gridCols[x]
      colMax = maximum(oldCol)
      newHeight = min(rowMax, colMax)

      oldHeight = grid[y][x]
      diffBetweenHeights = abs(oldHeight - newHeight)
      push!(newDiffRow, diffBetweenHeights)
      x += 1
    end

    push!(newGridDiff, newDiffRow)
    y += 1
    x = 1
  end

  return mapreduce(rowDiffs -> reduce(+, rowDiffs), +, newGridDiff)
end

using Test

Test.@testset "maxIncreaseToKeepCitySkyline" begin
  Test.@test maxIncreaseToKeepCitySkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]) == 35
  Test.@test maxIncreaseToKeepCitySkyline([[0, 0, 0], [0, 0, 0], [0, 0, 0]]) == 0
end

