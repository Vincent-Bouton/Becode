/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let opOne = document.getElementById("op-one")
    let opTwo = document.getElementById("op-two")
    const performOperation = operation => {
        // perform the operation
        switch(operation){
            case 'addition':
                alert(parseInt(opOne.value) + parseInt(opTwo.value))
                break
            case 'substraction':
                alert(parseInt(opOne.value) - parseInt(opTwo.value))
                break
            case 'multiplication':
                alert(parseInt(opOne.value) * parseInt(opTwo.value))
                break
            case 'division':
                alert(parseInt(opOne.value) / parseInt(opTwo.value))
                break   
            defaut:
                return 
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
