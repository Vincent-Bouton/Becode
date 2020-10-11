/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById('run').addEventListener('click',()=>{
        let heroId = parseInt(document.getElementById('hero-id').value)
        let deletePost = async(data) =>{
            let response = await fetch(`http://localhost:3000/heroes/${heroId}`,{
                method:"DELETE",
                headers:{
                    "content-Type":'aplication/json'
                }
            })
            .then(response => response.json()).then(
                data => {
                    console.log(data) 
            })
        }
        deletePost()

        
    })
})();
