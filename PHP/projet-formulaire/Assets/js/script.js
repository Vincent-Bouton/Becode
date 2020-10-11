M.AutoInit();

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".slider");
  let indicator = false;
  let option = {
    indicators: false
  };
  var instances = M.Slider.init(elems, option);
});

(() => {
  let prevScrollpos = window.pageYOffset;

  const hideHeader = (window.onscroll = () => {
    const heightHeader = "64px";
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = `-${heightHeader}`;
    }
    prevScrollpos = currentScrollPos;
  });
})();
