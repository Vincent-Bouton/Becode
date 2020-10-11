/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class person{
        constructor(firstname,lastname){
            this.firstname = firstname
            this.lastname = lastname
        }
        get name(){
            return `${this.firstname} ${this.lastname}`
        }
        set name(value){
            [this.firstname, this.lastname] = value.split(" ")
        }
    }
    document.getElementById('run').addEventListener('click',()=>{
        let me = new person('Vincent', 'Bouton')
        console.log(me.name)
        me.name = "Vincent Button"
        console.log(me.name)
    })
})();
