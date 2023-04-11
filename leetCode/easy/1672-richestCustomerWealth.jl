function richestCustomerWealth(accounts::Vector{Vector{Int}})
  result = 0
  foreach(arr -> result = max(result, reduce(+, arr)), accounts)

  return result
end

export richestCustomerWealth

using Test

Test.@testset "richestCustomerWealth" begin
  Test.@test richestCustomerWealth([[1, 2, 3], [3, 2, 1]]) == 6
  Test.@test richestCustomerWealth([[1, 5], [7, 3], [3, 5]]) == 10
  Test.@test richestCustomerWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]) == 17
end