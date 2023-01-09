function stringToNumber(str::String)
    if contains(str, ".")
        return parse(Float64, str)
    else
        return parse(Int64, str)
    end
end