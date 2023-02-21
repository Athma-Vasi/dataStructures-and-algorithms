function growthOfAPopulation(initialPop::Int, percentIncrease::Real, immigrantsPerYear::Int, futurePop::Int)

  yearsReq = 1
  yearlyPop = initialPop

  while yearlyPop < futurePop
    yearlyPop += yearlyPop * (percentIncrease / 100) + immigrantsPerYear


    yearsReq += 1
  end

  return yearlyPop - futurePop == 0.0 ? yearsReq - 1 : round(Int, yearlyPop - futurePop) != 0 ? yearsReq - 1 : yearsReq

end

