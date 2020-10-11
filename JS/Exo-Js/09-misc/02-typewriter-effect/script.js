/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("keydown", () => {
      let text = document.getElementById("target").innerHTML;
      console.log(text);
      let letter = text.split("");
      console.log(letter);
      let target = document.getElementById("target");
      target.innerHTML = "";
      for (let i = 0; i < text.length; i++) {
        let random = Math.floor(Math.random() * 8000) + 2000;
        console.log(random);
        let element = document.createElement("span");
        target.appendChild(element);
        setTimeout(function() {
          element.innerHTML = letter[i];
        }, random);
      }
    });
    // your code here
  })();