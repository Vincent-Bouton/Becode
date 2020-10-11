/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        let date = new Date()
        let dateYears = date.getFullYear()
        let dateMonth = date.getMonth()
        let dateDay = date.getDate()

        let dobDay = document.getElementById("dob-day").value
        let dobMonth = document.getElementById("dob-month").value
        let dobYear = document.getElementById("dob-year").value

        let age = dateYears - dobYear
        if(dateMonth+1 == parseInt(dobMonth) && dateDay>=parseInt(dobDay)){
            console.log(age)
        }else if(dateMonth+1 <= parseInt(dobMonth)){
            console.log(age-1)
        }else{
            console.log(age)
        }
            
    

        //  
    })
})();
