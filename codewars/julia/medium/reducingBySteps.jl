function gcdi(a::Int, b::Int)::Int
  return gcd(a, b)
end

function lcmu(a::Int, b::Int)::Int
  return lcm(a, b)
end

function sum(a::Int, b::Int)::Int
  return a + b
end

function maxi(a::Int, b::Int)::Int
  return a > b ? a : b
end

function mini(a::Int, b::Int)::Int
  return a < b ? a : b
end

function operArray(fct::Function, arr::Array{Int64,1}, init::Int)::Array{Int64,1}
  newArr = []

  for (idx, val) in pairs(arr)
    if idx == 1
      push!(newArr, fct(init, val))
    end

    if idx > 1
      push!(newArr, fct(newArr[idx-1], val))
    end
  end

  return newArr
end


println(operArray(gcdi, [18, 69, -90, -78, 65, 40], 18))
println(operArray(lcmu, [18, 69, -90, -78, 65, 40], 18))
println(operArray(sum, [18, 69, -90, -78, 65, 40], 18))
println(operArray(maxi, [18, 69, -90, -78, 65, 40], 18))
println(operArray(mini, [18, 69, -90, -78, 65, 40], 18))

println(operArray(sum, [18, 69, -90, -78, 65, 40], 0))
# [18, 87, -3, -81, -16, 24]