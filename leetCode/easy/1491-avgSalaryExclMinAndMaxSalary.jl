function avgSalaryExclMinAndMaxSalary(salary::Vector{Int64})
  minSalary = minimum(salary)
  maxSalary = maximum(salary)

  filteredArr = filter((amt) -> !(amt ∈ minSalary) && !(amt ∈ maxSalary), salary)
  len = length(filteredArr)

  return reduce(+, filteredArr) / len
end

export avgSalaryExclMinAndMaxSalary


using Test

Test.@testset "avgSalaryExclMinAndMaxSalary" begin
  @test avgSalaryExclMinAndMaxSalary([4000, 3000, 1000, 2000]) == 2500.00000
  @test avgSalaryExclMinAndMaxSalary([1000, 2000, 3000]) == 2000.00000
  @test avgSalaryExclMinAndMaxSalary([6000, 5000, 4000, 3000, 2000, 1000]) == 3500.00000
  @test avgSalaryExclMinAndMaxSalary([8000, 9000, 2000, 3000, 6000, 1000]) == 4750.00000
end

