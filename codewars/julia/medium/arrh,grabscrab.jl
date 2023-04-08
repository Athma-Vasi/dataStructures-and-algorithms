function grabscrab(anagram::String, dictionary::Array{String,1})
  resultArr::Array{String,1} = []

  for words in dictionary
    tempArr::Vector{Bool} = []
    oldWord = words
    for char in anagram
      if char in words
        push!(tempArr, true)
        idxOfChar = findfirst(isequal(char), words)
        words = words[1:idxOfChar-1] * words[idxOfChar+1:end]
      else
        push!(tempArr, false)
      end
    end


    falseCount = length(filter(x -> x == false, tempArr))
    if falseCount == 0 && length(anagram) == length(oldWord)
      push!(resultArr, oldWord)
    end
  end

  return resultArr
end

println(grabscrab("cwn", ["gkntq", "cnw", "gotfenwwrc", "cwordbudj", "ncw", "nwc", "ltrnmr", "wcn"]))
# Expected: ["cnw", "ncw", "nwc", "wcn"]
#	Occurred: ["cnw", "gotfenwwrc", "ncw", "nwc", "wcn"]

println(grabscrab("rsofxmgcz", ["kmpyeok", "xagx", "rgcoxmfzs", "levxggtnzs", "yft", "mbgbrvroy", "gzcsmfoxr", "ohrxek", "msrogcxfz", "grzfxcosm", "lmytogpijk", "pcktrvdyro", "rmoxgszcf", "ofrmgcszx", "rgzscmfox", "cosgxmzfr", "cfszgxrmo", "fzc", "mgofxcszr"]))

# expected: ["rgcoxmfzs", "gzcsmfoxr", "msrogcxfz", "grzfxcosm", "rmoxgszcf", "ofrmgcszx", "rgzscmfox", "cosgxmzfr", "cfszgxrmo", "mgofxcszr"]

# occured: ["rgcoxmfzs", "gzcsmfoxr", "msrogcxfz", "grzfxcosm", "rmoxgszcf", "ofrmgcszx", "rgzscmfox", "cosgxmzfr", "cfszgxrmo", "fzc", "mgofxcszr"]


# println(grabscrab("oob", ["bob", "baobab"]))
# println(grabscrab("ainstuomn", ["mountains", "hills", "mesa"]))
# println(grabscrab("oolp", ["donkey", "pool", "horse", "loop"]))
# println(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]))
