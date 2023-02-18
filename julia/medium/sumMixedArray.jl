

function sumMix(array::Array{Any,1})
  return mapreduce(
    val -> isa(val, String) ? parse(Int, val) : val,
    +,
    array
  )
end

println(sumMix([9, 3, "7", "3"])) # 22
println(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])) # 42
println(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])) # 41

