function isSquare(n::Int)
  return n < 0 ? false : sqrt(n) % 1 == 0
end

println(isSquare(4))
println(isSquare(25))
println(isSquare(26))

