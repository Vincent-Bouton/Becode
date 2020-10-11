/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
        document.querySelector('input').addEventListener("input",()=>{
            let passOne = document.getElementById('pass-one').value
            let n = `${passOne}`
            console.log()
            document.getElementById('counter').innerHTML = `${n.length}/10`
            if(n.length ==10){
                document.querySelector('input').disabled = true
            }
        })
        
})();
