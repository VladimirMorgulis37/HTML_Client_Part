var slide_index = 1;
show_slides(slide_index);

function plus_slides(n) {
  show_slides(slide_index += n);
}

function current_slide(n) {
  show_slides(slide_index = n);
}

function show_slides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slide_index = 1}    
  if (n < 1) {slide_index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_index-1].style.display = "block";  
  dots[slide_index-1].className += " active";
}

function open_nav() {
  document.getElementById("mob_sidepanel").style.width = "150px";
  document.getElementById("op_but").style.opacity = "0%";
}
function close_nav() {
  document.getElementById("mob_sidepanel").style.width = "0";
  document.getElementById("op_but").style.opacity = "100%";
}
