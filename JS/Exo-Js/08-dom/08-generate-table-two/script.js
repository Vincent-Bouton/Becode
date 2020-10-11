/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const table = document.getElementById('target').appendChild(document.createElement('table'))
    for (let i = 0;i < 10;i++){
        document.querySelector('table').appendChild(document.createElement('tr'))
    }
    document.querySelectorAll('tr').forEach(element =>{
        for(let i =0;i<10;i++){
            element.appendChild(document.createElement('td')).setAttribute('class',`td${i+1}`)
        }
    })
    for(let i = 1; i <=10;i++){
        document.querySelectorAll(`td.td${i}`).forEach((element, index)=>{
        element.innerHTML = `${index+1}x${i}=${(index+1)*i}`
    })
    }
    
    
})();
