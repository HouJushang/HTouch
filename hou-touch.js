(function (window) {
  var T = window.houTouch = function (id) {
    var obj = document.getElementById(id);
    obj.addEventListener('touchstart', function (e) {
      var touchObj = e.changedTouches[0]
      console.log('x:' + touchObj.clientX, 'y:' + touchObj.clientY);
    });
    obj.addEventListener('touchmove',function(e){
      var touchObj = e.changedTouches[0]
      console.log('x:' + touchObj.clientX, 'y:' + touchObj.clientY);
      T.move(touchObj.clientX,touchObj.clientY);
    })
    return houTouch;
  }
  T.move = function(x,y){
    console.log(x,y);
  }
  T.swipeUp  = function(){
    alert(1);
  }

})(window)