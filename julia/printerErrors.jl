function printerError(s::String)
  controlString = "abcdefghijklm"
  strLength = length(s)
  errorCount = mapreduce(i -> contains(controlString, i) ? 0 : 1, +, s)

  return "$errorCount/$strLength"
end


println(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))