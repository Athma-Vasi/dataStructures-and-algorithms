function countSheep(num::Int)
  count = 1
  resultArr::Array{String,1} = []

  while num > 0
    push!(resultArr, "$count sheep...")

    count += 1
    num -= 1
  end

  return join(resultArr)
end

println(countSheep(1) == "1 sheep...")
println(countSheep(2) == "1 sheep...2 sheep...")
println(countSheep(3) == "1 sheep...2 sheep...3 sheep...")