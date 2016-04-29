(function (window) {
    window.houT = function (id) {
        var _this = this;
        _this.obj = document.getElementById(id);
        _this.obj.addEventListener('touchstart', function (e) {
            var touchObj = e.changedTouches[0]
            _this.startX = touchObj.clientX;
            _this.starty = touchObj.clientX;
        });
        _this.obj.addEventListener('touchmove', function (e) {
            var touchObj = e.changedTouches[0]
            _this.nowX = touchObj.clientX;
            _this.nowy = touchObj.clientX;
        })
    }
})(window)