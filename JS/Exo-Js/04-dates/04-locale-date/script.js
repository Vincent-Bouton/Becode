/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let time = new Date()
    let day = time.getDay()
    let month = time.getMonth()
    let date = time.getDate()
    let hours = time.getHours()
    let minuttes = time.getMinutes()
    let year = time.getFullYear()
    if(day == 1){
        day = "Lundi"
    }else if(day == 2){
        day = "Mardi"
    }else if(day == 3){
        day = "Mercredi"
    }else if(day == 4){
        day = "Jeudi"
    }else if(day == 5){
        day = "Vendredi"
    }else if(day == 6){
        day = "Samedi"
    }else if(day == 7){
        day = "Dimanche"
    }

    if(month == 1){
        month = "Janvier"
    }else if(month == 2){
        month = "Février"
    }else if(month == 3){
        month = "Mars"
    }else if(month == 4){
        month = "Avril"
    }else if(month == 5){
        month = "Mai"
    }else if(month == 6){
        month = "Juin"
    }else if(month == 7){
        month = "Juillet"
    }else if(month == 8){
        month = "Août"
    }else if(month == 9){
        month = "Septembre"
    }else if(month == 10){
        month = "Octobre"
    }else if(month == 11){
        month = "Novembre"
    }else if(month == 12){
        month = "Décembre"
    }

    document.getElementById('target').innerHTML = `${day} ${date} ${month} ${year} ${hours}h${minuttes}`
    
})();
