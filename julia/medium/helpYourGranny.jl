# function tour(friends::Vector{String}, friendsTowns::Vector{Tuple{String,String}}, homeToTownDistances::Dict{String,Float64})
#   distancesArr = homeToTownDistances |> values |> collect |> sort

#   a = 0
#   b = 0
#   c = 0
#   resultArr = [distancesArr[1]]

#   for (idx, distances) in pairs(distancesArr)
#     if idx == 1
#       a = distances
#       continue
#     end

#     # c becomes the distance from home to next city
#     c = distances
#     b = sqrt(c^2 - a^2)
#     push!(resultArr, b)
#     # a becomes the distance from home to prev city
#     a = c
#   end
#   # push distance from last city to home
#   push!(resultArr, distancesArr[end])

#   # return round(Int, floor(sum(resultArr)))
#   return resultArr |> sum |> floor |> Int
# end

# println(tour(["A1", "A2", "A3", "A4", "A5"], [("A1", "X1"), ("A2", "X2"), ("A3", "X3"), ("A4", "X4")], Dict("X1" => 100.0, "X2" => 200.0, "X3" => 250.0, "X4" => 300.0)))

function tour(friends::Vector{String}, friendsTowns::Vector{Tuple{String,String}}, homeToTownDistances::Dict{String,Float64})
end


