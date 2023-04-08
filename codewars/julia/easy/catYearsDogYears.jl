function humanYearsCatYearsDogYears(humanYears::Int64)
  catYears = humanYears == 1 ? 15 : humanYears == 2 ? 24 : 24 + (humanYears - 2) * 4
  dogYears = humanYears == 1 ? 15 : humanYears == 2 ? 24 : 24 + (humanYears - 2) * 5

  return [humanYears, catYears, dogYears]
end