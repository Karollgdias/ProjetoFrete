function showInfo() {
    var infoPopup = document.getElementById("infoPopup");
    infoPopup.style.display = (infoPopup.style.display === "none") ? "block" : "none";
  }
  
  function showInfo2() {
    var infoPopup2 = document.getElementById("infoPopup2");
    infoPopup2.style.display = (infoPopup2.style.display === "none") ? "block" : "none";
  }
  
  function showInfo3() {
    var infoPopup3 = document.getElementById("infoPopup3");
    infoPopup3.style.display = (infoPopup3.style.display === "none") ? "block" : "none";
  }
  
  window.onclick = function(event) {
    var infoPopup = document.getElementById("infoPopup");
    var infoPopup2 = document.getElementById("infoPopup2");
    var infoPopup3 = document.getElementById("infoPopup3");
  
    if (event.target !== infoPopup && !event.target.closest('.info-icon')) {
      infoPopup.style.display = "none";
    }
  
    if (event.target !== infoPopup2 && !event.target.closest('.info-icon2')) {
      infoPopup2.style.display = "none";
    }
  
    if (event.target !== infoPopup3 && !event.target.closest('.info-icon3')) {
      infoPopup3.style.display = "none";
    }
  };
  