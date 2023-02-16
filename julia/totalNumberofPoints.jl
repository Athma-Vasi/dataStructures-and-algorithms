function points(games::Array{String,1})
  splitPointsArr::Array{Array{String,1}} = map(x -> split(x, ':'), games)

  return reduce(+, map(x -> x[1] > x[2] ? 3 : x[1] == x[2] ? 1 : 0, splitPointsArr))
end

println(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))