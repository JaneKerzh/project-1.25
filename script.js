function setImagesZindex() {
    var element = document.getElementById('images');
    var style = window.getComputedStyle(element);
    var current_z = style.getPropertyValue('z-index');

    if (current_z > 0)
      {
        document.getElementById("images").style.zIndex = "-1";
            console.log("now it's -1");
      } else {
          document.getElementById("images").style.zIndex = "1";
            console.log("now it's -1");
      }


};

window.addEventListener("DOMContentLoaded", function() {
  var menu_buttons = document.getElementsByClassName('topnav_button');

  console.log("length = " + menu_buttons.length);

  for (var i = 0; i < menu_buttons.length; i++) {
      menu_buttons[i].addEventListener('click', setImagesZindex, false);
      console.log('listener added')
  }

}, false);
