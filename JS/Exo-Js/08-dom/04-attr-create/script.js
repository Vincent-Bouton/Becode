//import { get } from "https";

/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const getImage = document.getElementById('source').getAttribute('data-image')
    document.getElementById('target').appendChild(document.createElement('img').setAttribute('src',getImage))
    console.log()
    
})();
