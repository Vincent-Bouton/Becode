/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let gateau = prompt("Veux-tu du gateau")
    if (gateau == "oui"){
        alert("Bravo le gateau c'est trop bon")
    }else{
        alert("Tu es sur de ça ? ")
    }
})();