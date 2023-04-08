using BenchmarkTools

function statistics(str::String)
  if length(str) == 0
    return ""
  end

  strArr = split(str, ", ")
  resultsInSecondsArr::Array{Float64,1} = []

  for (_, result) in pairs(strArr)
    splitResult = split(result, "|")
    hours = parse(Float64, splitResult[1])
    minutes = parse(Float64, splitResult[2])
    seconds = parse(Float64, splitResult[3])

    if hours < 0 || hours > 23
      return ""
    end
    if minutes < 0 || minutes > 59
      return ""
    end
    if seconds < 0 || seconds > 59
      return ""
    end

    resultsInSecondsArr = [resultsInSecondsArr; hours * 3600 + minutes * 60 + seconds]
  end

  resultsInSecondsArr = sort(resultsInSecondsArr)

  rangeInSeconds = resultsInSecondsArr[end] - resultsInSecondsArr[1]
  averageInSeconds = sum(resultsInSecondsArr) / length(resultsInSecondsArr)
  medianInSeconds = length(resultsInSecondsArr) % 2 == 0 ? (resultsInSecondsArr[div(length(resultsInSecondsArr), 2)] + resultsInSecondsArr[div(length(resultsInSecondsArr), 2)+1]) / 2 : resultsInSecondsArr[div(length(resultsInSecondsArr), 2)+1]

  rangeInHrs, rangeInMins, rangeInSeconds = returnRanges(rangeInSeconds)
  averageInHrs, averageInMins, averageInSeconds = returnAverages(averageInSeconds)
  medianInHrs, medianInMins, medianInSeconds = returnMedians(medianInSeconds)

  range = returnRangeStr(rangeInHrs, rangeInMins, rangeInSeconds)
  average = returnAverageStr(averageInHrs, averageInMins, averageInSeconds)
  median = returnMedianStr(medianInHrs, medianInMins, medianInSeconds)

  return "Range: $range Average: $average Median: $median"
end

function returnRanges(rangeInSecs::Float64)
  rangeInHrs = trunc(Int, div(rangeInSecs, 3600))
  rangeInMins = trunc(Int, div(rangeInSecs - rangeInHrs * 3600, 60))
  rangeInSeconds = trunc(Int, rangeInSecs - rangeInHrs * 3600 - rangeInMins * 60)

  return [rangeInHrs, rangeInMins, rangeInSeconds]
end

function returnRangeStr(rangeInHrs::Int, rangeInMins::Int, rangeInSeconds::Int)
  rangeHrStr = length(string(rangeInHrs)) == 1 ? "0" * string(rangeInHrs) : string(rangeInHrs)
  rangeMinStr = length(string(rangeInMins)) == 1 ? "0" * string(rangeInMins) : string(rangeInMins)
  rangeSecStr = length(string(rangeInSeconds)) == 1 ? "0" * string(rangeInSeconds) : string(rangeInSeconds)

  return string(rangeHrStr) * "|" * string(rangeMinStr) * "|" * string(rangeSecStr)
end

function returnAverages(averageInSecs::Float64)
  averageInHrs = trunc(Int, div(averageInSecs, 3600))
  averageInMins = trunc(Int, div(averageInSecs - averageInHrs * 3600, 60))
  averageInSeconds = trunc(Int, averageInSecs - averageInHrs * 3600 - averageInMins * 60)

  return [averageInHrs, averageInMins, averageInSeconds]
end

function returnAverageStr(averageInHrs::Int, averageInMins::Int, averageInSeconds::Int)
  averageHrStr = length(string(averageInHrs)) == 1 ? "0" * string(averageInHrs) : string(averageInHrs)
  averageMinStr = length(string(averageInMins)) == 1 ? "0" * string(averageInMins) : string(averageInMins)
  averageSecStr = length(string(averageInSeconds)) == 1 ? "0" * string(averageInSeconds) : string(averageInSeconds)

  return string(averageHrStr) * "|" * string(averageMinStr) * "|" * string(averageSecStr)
end

function returnMedians(medianInSecs::Float64)
  medianInHrs = trunc(Int, div(medianInSecs, 3600))
  medianInMins = trunc(Int, div(medianInSecs - medianInHrs * 3600, 60))
  medianInSeconds = trunc(Int, medianInSecs - medianInHrs * 3600 - medianInMins * 60)

  return [medianInHrs, medianInMins, medianInSeconds]
end

function returnMedianStr(medianInHrs::Int, medianInMins::Int, medianInSeconds::Int)
  medianHrStr = length(string(medianInHrs)) == 1 ? "0" * string(medianInHrs) : string(medianInHrs)
  medianMinStr = length(string(medianInMins)) == 1 ? "0" * string(medianInMins) : string(medianInMins)
  medianSecStr = length(string(medianInSeconds)) == 1 ? "0" * string(medianInSeconds) : string(medianInSeconds)

  return string(medianHrStr) * "|" * string(medianMinStr) * "|" * string(medianSecStr)
end


println(statistics("01|15|59, 01|47|6, 01|17|20, 01|32|34, 02|17|17"))
# @btime statistics("01|15|59, 01|47|6, 01|17|20, 01|32|34, 02|17|17")



