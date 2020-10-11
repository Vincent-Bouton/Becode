/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const template = document.getElementById('tpl-hero')
    let clone = document.importNode(template.content, true)
    document.getElementById('target').appendChild(clone)
    document.getElementById('run').addEventListener('click',()=>{
        let heroId = parseInt(document.getElementById('hero-id').value)
        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => {
                data.heroes.forEach((xMen,index)=>{
                    if(xMen.id == heroId){
                        document.querySelector('strong.name').innerHTML = xMen.name
                        document.querySelector('em.alter-ego').innerHTML = xMen.alterEgo
                        let ability = xMen.abilities.join(', ')
                        document.querySelector('p.powers').innerHTML = ability
                    }
                })
            })
    })
})();
