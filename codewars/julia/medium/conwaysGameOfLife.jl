# having issues with the CartesianIndex type
# can't seem to incr the indices of the array

function gameOfLife(cells::Array{Int64,2})
  # create a new array same size as input
  newCells = zeros(Int64, size(cells))
  # loop through each cell
  for (rowIdx, row) in pairs(cells)
    for (colIdx, cell) in pairs(row)
      # count the number of neighbours
      neighbours = 0
      # loop through each neighbour
      for i in 0:2
        for j in 0:2
          # skip the current cell
          if i == 1 && j == 1
            continue
          end
          # check if the neighbour is alive
          if cells[rowIdx[1][i+1], rowIdx[2][j+1]] == 1
            neighbours += 1
          end
        end
      end

      # apply the rules
      if cell == 1
        if neighbours < 2 || neighbours > 3
          newCells[rowIdx][colIdx] = 0
        else
          newCells[rowIdx][colIdx] = 1
        end
      else
        if neighbours == 3
          newCells[rowIdx][colIdx] = 1
        else
          newCells[rowIdx][colIdx] = 0
        end
      end

      # println(rowIdx[1][1]) col by col
      # println(rowIdx[2][1]) row by row
    end
  end
  return newCells

end



blinker = [
  0 1 0
  0 1 0
  0 1 0
]
println(gameOfLife(blinker))
