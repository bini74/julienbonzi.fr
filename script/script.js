var
  words = ['Bienvenue','Welcome','Herzlich willkommen','مرحبا','欢迎','어서 오십시오','Bienvenido','いらっしゃいませ','Grata','Velkominn','Välkommen','Receber','Добро пожаловать','ยินดีต้อนรับ','Hoş geldin'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 5,
  speed = 100;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});


if ( window.addEventListener ) {
  var kkeys = [], konami = "66,73,78,73";
  window.addEventListener("keydown", function(e){
          kkeys.push( e.keyCode );
          if ( kkeys.toString().indexOf( konami ) >= 0 ) {
                  alert('Bien joué ! Tu as trouvé l easter egg !');
                  }
  }, true);
}


document.onmousemove = function(e) {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
};

const clickableElements = document.querySelectorAll(".clickable");
clickableElements.forEach(elm => {
  elm.addEventListener("mouseover", function() {
    document.body.classList.add("img-hovered");
  });
  elm.addEventListener("mouseleave", function() {
    document.body.classList.remove("img-hovered");
  });
});