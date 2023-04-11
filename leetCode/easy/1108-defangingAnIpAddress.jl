function defangingAnIpAddress(address::String)
  return replace(address, "." => "[.]")
end

export defangingIpAddress

using Test

Test.@testset "defangingAnIpAddress" begin
  Test.@test defangingAnIpAddress("1.1.1.1") == "1[.]1[.]1[.]1"
end

