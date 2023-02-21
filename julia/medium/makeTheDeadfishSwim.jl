# wow this is a really bad solution
# there is a much simpler solution by dockingWars

function deadfish(data::String)
  dataArr = split(data, "")
  dataArr = filter(val -> val == "i" || val == "d" || val == "s" || val == "o", dataArr)
  result::Array{Int64,1} = []
  dataStack::Array{Int64,1} = []

  for (_, val) in pairs(dataArr)
    if val == "i"
      push!(dataStack, 1)
    elseif val == "d"
      push!(dataStack, -1)
    elseif val == "s"
      if length(dataStack) > 0
        total = sum(dataStack)
        dataStack = []
        push!(dataStack, total * total)
      else
        push!(dataStack, 0)
      end
    elseif val == "o"
      if length(dataStack) > 0
        total = sum(dataStack)
        dataStack = []
        push!(dataStack, total)
        push!(result, dataStack[end])
      else
        push!(dataStack, 0)
        push!(result, 0)
      end
    end
  end

  return result
end

println(deadfish("odissosiioiodo")) # [0, 0, 2, 3, 2]

