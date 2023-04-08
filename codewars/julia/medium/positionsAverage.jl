function positionsAverage(str::String)
  strArr = split(str, ", ")
  strArrLength = length(strArr)
  subStrLength = length(strArr[1])
  common = 0

  for i in 1:strArrLength
    for j in i+1:strArrLength
      for k in 1:subStrLength
        if strArr[i][k] == strArr[j][k]
          common += 1
        end
      end
    end
  end

  return common / (strArrLength * (strArrLength - 1) / 2) / subStrLength * 100
end
