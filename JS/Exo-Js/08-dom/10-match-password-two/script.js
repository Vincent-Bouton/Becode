/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        let passOne = document.getElementById('pass-one')
        let passTwo = document.getElementById('pass-two')
        console.log(passTwo.value)
        if(passOne.value != passTwo.value){
            document.querySelectorAll('input').forEach(element=>element.setAttribute('class','error'))
        }else{
        }
    })
})();
