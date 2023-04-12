function countItemsMatchingARule(items::Vector{Vector{String}}, ruleKey::String, ruleValue::String)
  ruleMap = Dict{String,Int}([
    ("type", 1),
    ("color", 2),
    ("name", 3)
  ])

  idxOfRule = get(ruleMap, ruleKey, nothing)

  return map(item -> idxOfRule !== nothing && item[idxOfRule] === ruleValue, items) |> count
end

export countItemsMatchingARule

using Test

Test.@testset "countItemsMatchingARule" begin
  Test.@test countItemsMatchingARule([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver") == 1

  Test.@test countItemsMatchingARule([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone") == 2
end