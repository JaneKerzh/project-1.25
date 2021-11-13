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
