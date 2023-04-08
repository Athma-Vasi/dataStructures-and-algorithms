using BenchmarkTools

function divisors(num::Int)

  # unmemoized recursive solution that overflows stack
  # function helper(num::Int, count::Int)
  #   if count > num
  #     return 0
  #   end

  #   if num % count == 0
  #     return 1 + helper(num, count + 1)
  #   end

  #   return helper(num, count + 1)
  # end

  # return helper(num, 1)

  # memoized recursive solution that somehow also overflows stack in codewars

  # function helper(num::Int, count::Int, memo::Dict{Tuple{Int,Int},Int})
  #   if count > num
  #     return 0
  #   end

  #   if haskey(memo, (num, count))
  #     return memo[(num, count)]
  #   end

  #   if num % count == 0
  #     memo[(num, count)] = 1 + helper(num, count + 1, memo)
  #     return memo[(num, count)]
  #   end

  #   memo[(num, count)] = helper(num, count + 1, memo)
  #   return memo[(num, count)]
  # end

  # return helper(num, 1, Dict{Tuple{Int,Int},Int}())

  # iterative solution

  count = 1
  divisors = 0

  while count <= num
    if num % count == 0
      divisors += 1
    end

    count += 1
  end

  return divisors
end

println(divisors(4)) # 3




