let word = 'bonjour';
const wordArray = word.split('');
const result = [];
wordArray.forEach(() => result.push("_"))
const test = [];

const array1 = ['sport'];
const array2 = ['sport'];
// console.log(array1 === array2)

let countOfError = 0;
console.log(countOfError)
let i = 0;

document.getElementById('buttonPlay').addEventListener("click",()=>{
  const letter = document.getElementById('letter').value
  const findInArray = test.includes(letter) 
  if(!findInArray){
    wordArray.forEach((item, index)=>{
      if(item === letter){
        console.log(item + '=>' + index)
        result.splice(index,1,item)
        document.querySelector(`.word${index+1}`).textContent = `${item}`
      }
    })
  test.push(letter)
  }else if(findInArray){
    alert('tu as déjà entré la lettre')
  }

  if(result.length === wordArray.length){
    const resultToString = result.join("")
    if(resultToString === word && countOfError === 0){
      alert(`Bravo tu as gagner et tu n'as jamais rater`)
    }else if(resultToString === word){
      alert(`Bravo tu as gagner et tu n'as rater que ${countOfError} fois`)
    }
  }
  console.log(!wordArray.includes(letter))
  if(!wordArray.includes(letter)){
    countOfError++
  }

  document.getElementById('letter').value = ""
  console.log('result : ',result)
})

