/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
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
        if(n.length>=8 && passOne.match(/[0-9]/g).length>=2){
            document.getElementById('validity').innerHTML = "OK"
        }
    })
})();
