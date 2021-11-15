function setImagesZindex() {
    var element = document.getElementById('images');
    var style = window.getComputedStyle(element);
    var current_z = style.getPropertyValue('z-index');

    console.log(event.target.outerText)
    if (event.target.outerText == "invest") {
      document.getElementById("images").style.zIndex = "-1";
    } else {
      document.getElementById("images").style.zIndex = "1";
    }

};

window.addEventListener("DOMContentLoaded", function() {
  var menu_buttons = document.getElementsByClassName('topnav_button');
  for (var i = 0; i < menu_buttons.length; i++) {
      menu_buttons[i].addEventListener('click', setImagesZindex, false);
  }

}, false);
