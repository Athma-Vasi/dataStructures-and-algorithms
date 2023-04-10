function cellsInARangeOnAnExcelSheet(s::String)
  alphabet = collect('A':'Z')

  alphabetIdxMap = Dict{String,Int64}()
  idxAlphabetMap = Dict{Int64,String}()

  for (idx, char) in enumerate(alphabet)
    str = string(char)
    alphabetIdxMap[str] = idx
    idxAlphabetMap[idx] = str
  end

  startCell, endCell = split(s, ":")
  startCell = string(startCell)
  endCell = string(endCell)

  startingCol, startingRow = split(startCell, "")
  startingCol = string(startingCol)
  startingRow = string(startingRow)

  endingCol, endingRow = split(endCell, "")
  endingCol = string(endingCol)
  endingRow = string(endingRow)

  colHeight = parse(Int, endingRow) - parse(Int, startingRow)
  startColNum = get(alphabetIdxMap, startingCol, "")
  endColNum = get(alphabetIdxMap, endingCol, "")
  rowDepth = endColNum - startColNum

  colHeightCounter = 0
  rowDepthCounter = 0
  colCharIdxStart = startColNum
  rowNumStart = parse(Int, startingRow)
  cellsResult::Array{String,1} = []

  while rowDepthCounter <= rowDepth
    while colHeightCounter <= colHeight
      cellStr = ""
      colChar = get(idxAlphabetMap, colCharIdxStart, "")
      cellStr *= colChar
      cellStr *= string(rowNumStart)
      push!(cellsResult, cellStr)
      rowNumStart += 1
      colHeightCounter += 1
    end

    colCharIdxStart += 1
    rowDepthCounter += 1
    colHeightCounter = 0
    rowNumStart = parse(Int, startingRow)
  end

  return cellsResult
end

export cellsInARangeOnAnExcelSheet

using Test

Test.@testset "cellsInARangeOnAnExcelSheet" begin
  Test.@test cellsInARangeOnAnExcelSheet("A1:B2") == ["A1", "A2", "B1", "B2"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:A1") == ["A1"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:B3") == ["A1", "A2", "A3", "B1", "B2", "B3"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:C3") == ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:A3") == ["A1", "A2", "A3"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:C1") == ["A1", "B1", "C1"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:C2") == ["A1", "A2", "B1", "B2", "C1", "C2"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:B4") == ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:C4") == ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:A4") == ["A1", "A2", "A3", "A4"]
  Test.@test cellsInARangeOnAnExcelSheet("A1:C3") == ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
end