function minAmountOfTimeToCollectGarbage(garbage::Vector{String}, travel::Array{Int64,1})
  # trucksSet is a set of all the trucks that are in the garbage array and lastTruckStopMap is a map of the last stop of each truck
  truckSet = Set{String}()
  lastTruckStopMap = Dict{String,Int64}()

  for (idx, str) in enumerate(garbage)
    strArr = split(str, "")
    foreach(char -> (
        begin
          push!(truckSet, char)
          lastTruckStopMap[char] = idx
        end
      ), strArr)
  end

  trucksArr = collect(values(truckSet))
  totalTime = 0

  # loop through the trucksArr and for each truck, loop through the garbage array and add the travel time and the time it takes to collect the garbage
  foreach(truck -> (
      begin
        lastTruckStopIdx = get(lastTruckStopMap, truck, 0)

        for (idx, str) in enumerate(garbage)
          # only add the travel time if the truck has not reached the last stop
          if idx <= lastTruckStopIdx
            if idx !== 1
              totalTime += travel[idx-1]
            end

            # loop through the current string and add the time it takes to collect the garbage
            foreach(char -> (
                begin
                  # because the map key is String and splitting a string returns an SubString{String}
                  char_ = string(char)

                  if char_ === truck
                    totalTime += 1
                  end
                end
              ), split(str, ""))
          end
        end
      end
    ), trucksArr)

  return totalTime
end

export minAmountOfTimeToCollectGarbage

using Test

Test.@testset "minAmountOfTimeToCollectGarbage" begin
  garbage = ["G", "P", "GP", "GG"]
  travel = [2, 4, 3]
  result = 21
  Test.@test minAmountOfTimeToCollectGarbage(garbage, travel) == result

  garbage = ["MMM", "PGM", "GP"]
  travel = [3, 10]
  result = 37
  Test.@test minAmountOfTimeToCollectGarbage(garbage, travel) == result
end


