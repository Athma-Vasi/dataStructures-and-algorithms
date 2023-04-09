function widestVerticalAreaBetweenTwoPoints(points)
  xCoordsSorted = map(point -> point[1], points) |> sort

  left = 1
  right = 2
  coordsLen = length(xCoordsSorted)
  distanceArr = []

  while right <= coordsLen && left < right
    leftXCoord = xCoordsSorted[left]
    rightXCoord = xCoordsSorted[right]
    push!(distanceArr, rightXCoord - leftXCoord)

    left += 1
    right += 1
  end

  return maximum(distanceArr)
end

export widestVerticalAreaBetweenTwoPoints

using Test

Test.@testset "Example 1" begin
  points = [[8, 7], [9, 9], [7, 4], [9, 7]]
  Test.@test widestVerticalAreaBetweenTwoPoints(points) == 1

  points = [[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]
  Test.@test widestVerticalAreaBetweenTwoPoints(points) == 3
end