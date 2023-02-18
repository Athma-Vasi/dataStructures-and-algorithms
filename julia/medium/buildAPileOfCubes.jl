function buildAPileOfCubes(m::Int64)::Int64
  n = 0

  while m > 0
    n += 1
    m -= n^3
  end

  return m < 0 ? -1 : n

end

println(buildAPileOfCubes(1071225)) #45
println(buildAPileOfCubes(91716553919377)) #-1
println(buildAPileOfCubes(4183059834009)) # 2022
println(buildAPileOfCubes(24723578342962)) # -1