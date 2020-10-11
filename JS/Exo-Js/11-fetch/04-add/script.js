/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById('run').addEventListener('click',()=>{
        let name = document.getElementById('hero-name').value
        let alterEgo = document.getElementById('hero-alter-ego').value
        let power = document.getElementById('hero-powers').value
        let insertPost = async function(data){
            let response = await fetch('http://localhost:3000/heroes',{
                method: 'POST',
                headers:{
                    'content-Type': 'application/json'
            },
                body:JSON.stringify(data)
            })
            if(response.ok){
                let data = await response.json()
            }
            console.log(data)
            }
        insertPost({
            "name": name,
            "alterEgo":alterEgo,
            "Abilities":[power.split(",")]
        })

    })
})();
