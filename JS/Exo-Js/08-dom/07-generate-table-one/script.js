/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const table = document.getElementById('target').appendChild(document.createElement('table'))
    const tr = document.querySelector('table').appendChild(document.createElement('tr'))
    for (let i = 0;i < 10;i++){
        tr.appendChild(document.createElement("td"))
    }
})();
