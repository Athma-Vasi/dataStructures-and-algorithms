function isTriangle(a::Int, b::Int, c::Int)
  return (a + b > c) && (a + c > b) && (b + c > a)
end
  