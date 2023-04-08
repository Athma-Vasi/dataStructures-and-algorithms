# shoulda used a set instead of an array... 乁{°〰°}ㄏ

function integerDepth(num::Int)
  zeroToNineDigArr::Array{Int64,1} = []
  lengthArr = length(zeroToNineDigArr)
  depth = 1

  while lengthArr < 10
    value = num * depth
    valueStr = string(value)
    valueNums = map(x -> parse(Int64, x), split(valueStr, ""))

    for (_, v) in pairs(valueNums)
      if !(v in zeroToNineDigArr)
        push!(zeroToNineDigArr, v)
      end
    end

    lengthArr = length(zeroToNineDigArr)
    depth += 1
  end

  return depth - 1
end


println(integerDepth(42))