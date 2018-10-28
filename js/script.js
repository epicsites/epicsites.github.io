(function () {
    
    var el = document.getElementById('menu');
    
    el.onmousedown = function () {
      var div = document.getElementsByClassName('main-menu'); 
        div[0].style.display = "block";
    };
    
})();