const lettersObject = {
    "o": [
      {
        value: [1, "one"],
        length: 3
      }
    ],
    "t": [
      {
        value: [2, "two"],
        length: 3
      },
      {
        value: [3, "three"],
        length: 5
      }
    ],
    "f": [
      {
        value: [4, "four"],
        length: 4
      },
      {
        value: [5,"five"],
        length: 4
      }
    ],
    "s": [
      {
        value: [6,"six"],
        length: 3
      },
      {
        value: [7, "seven"],
        length: 5
      }
    ],
    "e": [
      {
        value: [8, "eight"],
        length: 5
      }
    ],
    "n": [
      {
        value: [9, "nine"],
        length: 4
      }
    ]
  }
  
  function readData(longString) {
    const dataText = longString;
    const dataArray = dataText.split("\n")
    if(dataArray[dataArray.length - 1] === ""){
      const cleanDataArray = dataArray.slice(0, dataArray.length - 1)
      return cleanDataArray
    }
    return dataArray
  }
  
  function main() {
    const data = readData(text2)
    const matrixOfLetters = getMatrixOfLetters(data)
    const arrayOfDigits = []
    for(let lettersArray of matrixOfLetters) {
      const [firstDigit,secondDigit] = getDigitFromString(lettersArray)
      arrayOfDigits.push(Number(`${firstDigit}${secondDigit}`))
      }
    const sumArray = arrayOfDigits.reduce((prev, next) => prev + next, 0)
    console.log(sumArray)
  }
  
  function getDigitFromString(string) {
    let firstDigit = ""
    let secondDigit = ""
    
    for(let charIndex in string) {
      const char = string[charIndex]
      const charAsNumber = Number(char)
      const isCharAsNumberNaN = isNaN(charAsNumber)
      const isCharValidAsSpelledNumber = char in lettersObject
      
      if(!isCharAsNumberNaN) {
        if(firstDigit === "") firstDigit = charAsNumber
        secondDigit = charAsNumber
        continue;
      }
      if(isCharValidAsSpelledNumber) {
        const possibilities = lettersObject[char]
        
        for(let option of possibilities) {
          const [valueAsNumber, spelledValue] = option.value
          const spelledValueLength = option.length
          let counter = charIndex
          const possibleValueArray = []
          
          while(possibleValueArray.length != spelledValueLength) {
            possibleValueArray.push(string[counter])
            counter++
          }
          
          const spelledArray = possibleValueArray.join("")
          if(spelledArray === spelledValue) {
            if(firstDigit === "") firstDigit = valueAsNumber
            secondDigit = valueAsNumber
            break;
          }
        }
      }
    }
    return [firstDigit, secondDigit]
  }
  
  function getMatrixOfLetters(data) {
    const array = []
    for(let string of data) {
      array.push(string.split(""))
    }
    return array
  }
  
  main()