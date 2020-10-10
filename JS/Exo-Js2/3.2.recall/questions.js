const selectElementsStartingWithA = (array) => {
    const array2 = []
    array.forEach(element => {
      if(element.charAt(0)==='a'){
        array2.push(element)
      }
    });
    return array2 ;
}

const selectElementsStartingWithVowel = (array) => {
  const array2 = []
  const vowels = 'aeiouy'
    array.forEach((element,index) => {
        elements = element.charAt(0)
      if(elements.match(/[aeiou]/ig)){
        array2.push(element)
      }
    });
    return array2;
}

const removeNullElements = (array) => {
    const array2 = []
    array.forEach(element => {
        if(element !== null){
            array2.push(element)
        }
    });
    return array2
}

const removeNullAndFalseElements = (array) => {
    const array2 = []
    array.forEach(element => {
        if(element !== null && element !== false){
            array2.push(element)
        }
    });
    return array2
}

const reverseWordsInArray = (array) => {
    const array2 = []
    array.forEach(element => {
        let splitedElement = element.split('').reverse().join('')
        array2.push(splitedElement)
    });
    return array2
}

const everyPossiblePair = (array) => {
    const array2 = []
    array.sort()
    array.forEach(element => {
        array2.push([])
    });
    console.log(array2)
}

const allElementsExceptFirstThree = (array) => {
    return 'Write your method here';
}

const addElementToBeginning = (array, element) => {
    return 'Write your method here';
}

const sortByLastconstter = (array) => {
    return 'Write your method here';
}

const getFirstHalf = (string) => {
    return 'Write your method here';
}

const makeNegative = (number) => {
    return 'Write your method here';
}

const numberOfPalindromes = (array) => {
    return 'Write your method here';
}

const shortestWord = (array) => {
    return 'Write your method here';
}

const longestWord = (array) => {
    return 'Write your method here';
}

const sumNumbers = (array) => {
    return 'Write your method here';
}

const repeatElements = (array) => {
    return 'Write your method here';
}

const stringToNumber = (string) => {
    return 'Write your method here';
}

const calculateAverage = (array) => {
    return 'Write your method here';
}

const getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

const convertArrayToObject = (array) => {
    return 'Write your method here';
}

const getAllconstters = (array) => {
    return 'Write your method here';
}

const swapKeysAndValues = (object) => {
    return 'Write your method here';
}

const sumKeysAndValues = (object) => {
    return 'Write your method here';
}

const removeCapitals = (string) => {
    return 'Write your method here';
}

const roundUp = (number) => {
    return 'Write your method here';
}

const formatDateNicely = (date) => {
    return 'Write your method here';
}

const getDomainName = (string) => {
    return 'Write your method here';
}

const titleize = (string) => {
    return 'Write your method here';
}

const checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

const squareRoot = (number) => {
    return 'Write your method here';
}

const factorial = (number) => {
    return 'Write your method here';
}

const findAnagrams = (string) => {
    return 'Write your method here';
}

const convertToCelsius = (number) => {
    return 'Write your method here';
}

const constterPosition = (array) => {
    return 'Write your method here';
}
