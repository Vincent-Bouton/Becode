/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => {
                data.heroes.forEach((xMen, index) =>{
                    const template = document.getElementById('tpl-hero')
                    let clone = document.importNode(template.content, true)
                    
                    document.getElementById('target').appendChild(clone)
                    document.querySelectorAll('strong.name')[index].innerHTML = xMen.name
                    document.querySelectorAll('em.alter-ego')[index].innerHTML = xMen.alterEgo
                    let ability = xMen.abilities.join(', ')
                    document.querySelectorAll('p.powers')[index].innerHTML = ability
                    console.log(ability)
                })
                console.log(data)
                
                
            })
    })
})();