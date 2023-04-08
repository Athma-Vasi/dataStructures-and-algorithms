function balance(book::String)
  book = join(split(book, r"\n\n\n"), "\n\n")
  book = join(split(book, r"\n\n"), "\n")
  totalPlusEntries = split(book, r"\n")

  for (idx, val) in pairs(totalPlusEntries)
    val = replace(val, "!" => "",
      "#" => "",
      r"\n" => "",
      r"\t" => "",
      r"\r" => "",
      "  " => "",
      "=" => "",
      ":" => "",
      ";" => "",
      "?" => "",
      "{" => "",
      "}" => "",
      "[" => "",
      "]" => "",
      "," => "",
      "!" => "",
    )

    totalPlusEntries[idx] = val
  end

  totalPlusEntries = filter(val -> val != "", totalPlusEntries)

  originalBalance = parse(Float64, totalPlusEntries[1])
  newBalance = originalBalance
  result = ["Original Balance: $(originalBalance)0"]
  totalExpense = 0

  for (_, val) in pairs(totalPlusEntries[2:end])
    valArr = split(val, " ")
    checkNumber = parse(Int64, valArr[1])
    checkCategory::String = valArr[2]
    checkAmount = parse(Float64, valArr[3])

    tempArr::Array{String,1} = []
    push!(tempArr, string(checkNumber))
    push!(tempArr, checkCategory)

    newBalance = round(newBalance - checkAmount, digits=2)
    newBalanceStrBeforeDecimal = split(string(newBalance), ".")[1]
    newBalanceStrAfterDecimal = split(string(newBalance), ".")[2]
    if length(newBalanceStrAfterDecimal) == 1
      newBalanceStrAfterDecimal = "$newBalanceStrAfterDecimal" * "0"
    end
    newBalanceStr = string(newBalanceStrBeforeDecimal) * "." * string(newBalanceStrAfterDecimal)

    push!(tempArr, newBalanceStr)
    push!(result, join(tempArr, " "))

    totalExpense += checkAmount
  end

  averageExpense = round(totalExpense / (length(totalPlusEntries) - 1), digits=2)
  averageExpenseStrBeforeDecimal = split(string(averageExpense), ".")[1]
  averageExpenseStrAfterDecimal = split(string(averageExpense), ".")[2]
  if length(averageExpenseStrAfterDecimal) == 1
    averageExpenseStrAfterDecimal = "$averageExpenseStrAfterDecimal" * "0"
  end
  averageExpenseStr = string(averageExpenseStrBeforeDecimal) * "." * string(averageExpenseStrAfterDecimal)

  totalExpense = round(totalExpense, digits=2)
  totalExpenseStrBeforeDecimal = split(string(totalExpense), ".")[1]
  totalExpenseStrAfterDecimal = split(string(totalExpense), ".")[2]
  if length(totalExpenseStrAfterDecimal) == 1
    totalExpenseStrAfterDecimal = "$totalExpenseStrAfterDecimal" * "0"
  end
  totalExpenseStr = string(totalExpenseStrBeforeDecimal) * "." * string(totalExpenseStrAfterDecimal)


  push!(result, "Total expense  $totalExpenseStr")
  push!(result, "Average expense  $averageExpenseStr")

  return join(result, "\n")
end

println(balance("1000.00 
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"))

b1 = "1000.00!=

  125 Market !=:125.45
  126 Hardware =34.95
  127 Video! 7.45
  128 Book :14.32
  129 Gasoline ::16.10
  "

b1sol = "Original Balance: 1000.00\n125 Market 125.45 Balance 874.55\n126 Hardware 34.95 Balance 839.60\n127 Video 7.45 Balance 832.15\n128 Book 14.32 Balance 817.83\n129 Gasoline 16.10 Balance 801.73\nTotal expense  198.27\nAverage expense  39.65"

println(balance(b1) == b1sol)

b2 = "1233.00
  125 Hardware;! 24.8?;
  123 Flowers 93.5
  127 Meat 120.90
  120 Picture 34.00
  124 Gasoline 11.00
  123 Photos;! 71.4?;
  122 Picture 93.5
  132 Tyres;! 19.00,?;
  129 Stamps 13.6
  129 Fruits{} 17.6
  129 Market;! 128.00?;
  121 Gasoline;! 13.6?;"

b2sol = "Original Balance: 1233.00\n125 Hardware 24.80 Balance 1208.20\n123 Flowers 93.50 Balance 1114.70\n127 Meat 120.90 Balance 993.80\n120 Picture 34.00 Balance 959.80\n124 Gasoline 11.00 Balance 948.80\n123 Photos 71.40 Balance 877.40\n122 Picture 93.50 Balance 783.90\n132 Tyres 19.00 Balance 764.90\n129 Stamps 13.60 Balance 751.30\n129 Fruits 17.60 Balance 733.70\n129 Market 128.00 Balance 605.70\n121 Gasoline 13.60 Balance 592.10\nTotal expense  640.90\nAverage expense  53.41"

println(balance(b2) == b2sol)
