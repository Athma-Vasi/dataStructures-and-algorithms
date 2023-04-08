# algo did not pass test cases where amount of args passed is less than 3
# the proper algo takes the args as a collection into an array (args...) 
# and then uses the length of the array to determine the amount of args passed
# below algo is unoptimzed version

function thetaFormula(
  θ::Union{String,Int64,Float64},
  arcLength::Union{String,Int64,Float64},
  radiusLength::Union{String,Int64,Float64})

  if ismissing(θ) || ismissing(arcLength) || ismissing(radiusLength)
    return nothing
  end

  if typeof(θ) == String && typeof(arcLength) == String && typeof(radiusLength) == String
    return nothing
  end

  if typeof(θ) == String && typeof(arcLength) == String
    return nothing
  end

  if typeof(θ) == String && typeof(radiusLength) == String
    return nothing
  end

  if typeof(arcLength) == String && typeof(radiusLength) == String
    return nothing
  end

  if typeof(θ) == String
    if !occursin("?", θ)
      return nothing
    end
  end

  if typeof(arcLength) == String
    if !occursin("?", arcLength)
      return nothing
    end
  end

  if typeof(radiusLength) == String
    if !occursin("?", radiusLength)
      return nothing
    end
  end

  if typeof(θ) == String
    theta = arcLength / radiusLength
    return occursin(".", string(theta)) ? round(theta, digits=3) : theta
  end

  if typeof(arcLength) == String
    arcLength = θ * radiusLength
    return occursin(".", string(arcLength)) ? round(arcLength, digits=3) : arcLength
  end

  if typeof(radiusLength) == String
    radiusLength = arcLength / θ
    return occursin(".", string(radiusLength)) ? round(radiusLength, digits=3) : radiusLength
  end

  if typeof(θ) != String && typeof(arcLength) != String && typeof(radiusLength) != String
    arcLength_ = θ * radiusLength
    return arcLength_ == arcLength
  end

  return nothing
end

try
  println(thetaFormula(3, 1))
catch e
  if e isa MethodError
    return nothing
  end
end

println(thetaFormula("?", 12, 35))
println(thetaFormula(3, "?", 14))
println(thetaFormula(5, 16, "?"))

println(thetaFormula(2, 5, 7))
println(thetaFormula(2, 20, 10))
println(thetaFormula(-1, 1, -1))