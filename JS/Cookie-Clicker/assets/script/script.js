
(()=>{

  const gameSet = ()=>{
      
    const autoClicker = () => {
      console.log(numberClick)
      if(numberClick === 50){
        setInterval(animationPlusClick,5000)
        document.getElementsByClassName('autoClickInfo')[0].innerHTML = "Autoclick toutes les 5sec"
   
      }else if(numberClick=== 100){
        setInterval(animationPlusClick ,1000)
        document.getElementsByClassName('autoClickInfo')[0].innerHTML = "Autoclick toutes les 1sec"
     }
       else if(numberClick===500){
        setInterval(animationPlusClick ,500)
        document.getElementsByClassName('autoClickInfo')[0].innerHTML = "Autoclick toutes les 0,5sec"
       }
       else if(numberClick===1000){
        setInterval(animationPlusClick ,100)
        document.getElementsByClassName('autoClickInfo')[0].innerHTML = "Autoclick toutes les 0,1sec"
      }
    }
  
    const autoClickerInfo = () => {
      console.log(numberClick)
      if(numberClick >= 50){
        setInterval(animationPlusClick,5000)
        document.getElementsByClassName('autoClickInfo')[0].innerHTML = "Autoclick toutes les 5sec"
   
      }if(numberClick >= 100){
        setInterval(animationPlusClick ,1000)
        document.getElementsByClassName('autoClickInfo')[0].innerHTML = "Autoclick toutes les 1sec"
     }
       if(numberClick >= 500){
        setInterval(animationPlusClick ,500)
        document.getElementsByClassName('autoClickInfo')[0].innerHTML = "Autoclick toutes les 0,5sec"
       }
       if(numberClick >= 1000){
        setInterval(animationPlusClick ,100)
        document.getElementsByClassName('autoClickInfo')[0].innerHTML = "Autoclick toutes les 0,1sec"
      }
    }
  
  
    const animationPlusClick = ()=> {
        localStorage.setItem("on_click", points);
        totalPoints.textContent = points += click;
        AddingPoints.textContent = `+${click}`;
        AddingPoints.style.opacity = "1";
        setTimeout(() => {
            AddingPoints.style.opacity = 0;
        }, 800);
               
        AddingPoints.animate([
          // keyframes
          { transform: 'translateY(0px)' }, 
          { transform: 'translateY(-300px)' }
        ], { 
          // timing options
          duration: 1000,
          iterations: 1
        });
    }
  
    const active_counter= () =>{
        
        if (points === null ) {
            points = 0;
        }      
        animationPlusClick()
        autoClicker()
    }
   
    const multiplay = ()=>{ 
      console.log();
      
      if(numberClick === 200 && points >= 200){
        multiply_btn.removeAttribute("disabled");
        multiply_btn.addEventListener("click",()=>{
            points = points - 100
            totalPoints.textContent = points
            multiply_btn.setAttribute("disabled","true");
        })
        
      }else if(numberClick === 100 && points >= 100){
        multiply_btn.removeAttribute("disabled");
        multiply_btn.addEventListener("click",()=>{
            points = points - 50
            totalPoints.textContent = points
            multiply_btn.setAttribute("disabled","true");
        });
        
      }else if(numberClick === 50 && points >= 50){
        multiply_btn.removeAttribute("disabled");
        multiply_btn.addEventListener("click",()=>{
            points = points - 50
            click= click*2
            totalPoints.textContent = points
            multiply_btn.setAttribute("disabled","true");
          
        });
    
      }
    }
  const chgTimer = () => {
        bonus.setAttribute('value','5')
     
        setTimeout(()=>{
          btn_bonus.setAttribute('value','4')
        },1000)
     
        setTimeout(()=>{
         btn_bonus.setAttribute('value','3')
        },2000)
     
        let timerThree = setTimeout(()=>{
         btn_bonus.setAttribute('value','2')
        },3000)
     
        let timerFour = setTimeout(()=>{
         btn_bonus.setAttribute('value','1')
        },4000)
        
        let timerLast = setTimeout(()=>{
          btn_bonus.setAttribute('value','Bonus : x10')
         },5000)
  }
  // const btnBonusDisabled = () => {
  //         if (points < bonus_cost){
  //         btn_bonus.setAttribute("disabled",'')
  //     }
  
  // }
  
  
  const btnBonusDisabled = ()  => {
    console.log(btn_bonus.getAttribute('disabled'));
    if(!test){
      if (points >= bonus_cost){
        btn_bonus.removeAttribute("disabled");
      }
    }
    
  
  }
  
    const buyBonus = () => {
      if (points >= bonus_cost){
      //à chaque clique sur le bonus, on soustrait le score p/px bonus
        points = points - bonus_cost
        totalPoints.textContent = points;
      }
      // Lorque le compteur est inférieur aux prix du Bonus, Le bouton se désactive
    }
  
    const addingBonusPoint = () => {
      
      // btn_bonus.setAttribute("disabled",'')
        btn_bonus.setAttribute('disabled', 'true')
        click *= 10
        test = true 
        setTimeout(() => {
            test = false  
            click /= 10
            btn_bonus.removeAttribute("disabled",'false');
        }, 5000)
    }
  
  //   const btnBonusDisabled = () => {
  //     btn_bonus.setAttribute("disabled",'')
  //     setTimeout( () => {
  //             btn_bonus.removeAttribute("disabled",'')
  //     }, 10000)
  //   }
    
    
    const reset = () => {
      localStorage.clear()
      totalPoints.innerHTML = points;
      window.location.reload(true)
    }
  
  
    // SCRIPT START
  
  
    const autoClick = document.getElementById('clickCookie');
    const totalPoints = document.getElementById('totalPoints');
    const AddingPoints = document.getElementById('points');
    const btn_bonus = document.getElementById("bonus");
    const multiply_btn = document.getElementById("multiply")
  
    let points =  parseInt(localStorage.getItem('on_click'))+1||0; 
    let numberClick = parseInt(localStorage.getItem('NumberClick'))||0
    // localStorage.clear()
    let click = 1;
    let bonus_cost = click*100;
    let test = false
  
  //   let bonus_time = 5;
  //   let bonus_cost = 200;
    
    totalPoints.innerHTML = points;
    document.getElementById("multiply").setAttribute("disabled","true");
    autoClickerInfo()
    autoClick.onclick = () =>{
      numberClick++
      localStorage.setItem('NumberClick',numberClick)
      btnBonusDisabled()
      active_counter()
      multiplay()
    }
    
    document.getElementById('bonus').addEventListener("click", () => {
      chgTimer()
      buyBonus()
      addingBonusPoint()
    })
    document.getElementById("reset").addEventListener("click", reset);
  }
  gameSet()
  })()
  
  
  