(function () {
    
    var menuOpen = document.getElementById('menu');
    
    menuOpen.onmousedown = function () {
      var show = document.getElementsByClassName('main-menu'); 
        show[0].style.display = "block";
    };
    
})();

(function () {
    
    var menuClose = document.getElementsByClassName('close');
    
    menuClose[0].onmousedown = function () {
      var closing = document.getElementsByClassName('main-menu'); 
        closing[0].style.display = "none";
    };
    
})();

