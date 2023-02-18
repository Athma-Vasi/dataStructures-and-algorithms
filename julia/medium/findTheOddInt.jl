function findOddInt(nums::Vector{Int64})
  countMap = Dict{Int64,Int64}()

  for num in nums
    haskey(countMap, num) ? countMap[num] += 1 : countMap[num] = 1
  end

  for (key, value) in countMap
    if value % 2 != 0
      return key
    end
  end
end