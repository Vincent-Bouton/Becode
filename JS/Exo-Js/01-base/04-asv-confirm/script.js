/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function confirmation(){
        let car = prompt("quel est ton sexe?")
        let prenom = prompt("quel est ton prénom ? ")
        let surnom = prompt("quelle est ta ville ?")
    
        if(confirm(`${car}, ${prenom}, ${surnom} sont bien les données entré ? `)){
        }else{
            confirmation()
        }
    }
    confirmation()
})();
