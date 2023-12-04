function readData(longString) {
    const dataText = longString;
    const dataArray = dataText.split("\n")
    if(dataArray[dataArray.length - 1] === ""){
      const cleanDataArray = dataArray.slice(0, dataArray.length - 1)
      return cleanDataArray
    }
    return dataArray
  }
  
  function getDigitsFromString(string) {
    let firstDigit;
    let secondDigit;
    for(let letter of string) {
      if(!isNaN(Number(letter))) {
        if(!firstDigit) {
          firstDigit = letter
        }
          secondDigit = letter 
      }
    }
    return Number(`${firstDigit}${secondDigit}`)
  }
  
  function sumDigits(data) {
    const arr = []
  
  for(let string of data) {
    arr.push(getDigitsFromString(string))
  }
    const sum = arr.reduce((prev, next) => prev + next, 0)
    return sum
  }
  
const data = readData(text2)
const answer = sumDigits(data) 