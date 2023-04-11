function fibClassic(n)
  if n <= 1
    return n
  else
    return fibClassic(n - 1) + fibClassic(n - 2)
  end
end

function fibonacci(n)
  return fibIter(0, 1, n)
end

function fibIter(a, b, count)
  return count == 0 ? a : fibIter(b, a + b, count - 1)
end

using BenchmarkTools

@btime fibClassic(40)
@btime fibonacci(40)