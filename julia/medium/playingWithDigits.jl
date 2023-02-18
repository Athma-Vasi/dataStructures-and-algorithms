using BenchmarkTools

function digitsPower(num::Int, pow::Int)
  numStrArr = collect(string(num))

  power = pow
  sumOfPoweredDigits = 0

  while power < length(numStrArr) + pow
    for numStr in numStrArr
      sumOfPoweredDigits += parse(Int, numStr)^power
      power += 1
    end
  end

  k = sumOfPoweredDigits / num

  if sumOfPoweredDigits % num == 0
    return round(Int, k)
  end

  return -1
end


println(digitsPower(89, 1))
println(digitsPower(92, 1))
println(digitsPower(695, 2))
println(digitsPower(46288, 5))

@btime digitsPower(89, 1)
@btime digitsPower(92, 1)
@btime digitsPower(695, 2)
@btime digitsPower(46288, 5)
@btime digitsPower(6542131, 6)
@btime digitsPower(84545135153, 7)
@btime digitsPower(84545135153, 25)