function grow(x::Vector{Int})::Int
  return reduce(*,x)
end