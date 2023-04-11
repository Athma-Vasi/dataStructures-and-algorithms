function factorial(n::Int)
  return factIter(1, 1, n)
end

function factIter(product::Int, counter::Int, maxCount::Int)
  return counter > maxCount ? product : factIter(counter * product, counter + 1, maxCount)
end

export factorial

function factorialRecursive(n::Int)
  return n == 1 ? 1 : n * factorialRecursive(n - 1)
end


using BenchmarkTools

@btime factorial(100000)

# because n decreases , the iter approach must increase
