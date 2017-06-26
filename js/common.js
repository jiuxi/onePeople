define(function(require) {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 640) deviceWidth = 640;
    document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
    /*判断横竖屏*/
    var system = {};
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if (system.win || system.mac || system.xll) {
        //电脑访问
        console.log(system.win || system.mac || system.xll);
    } else {
        //手机访问
        function reurl() {
            location.reload();
        }
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
            var bod = document.getElementsByTagName("body")[0];
            var ht = bod.innerHTML;
            if (window.orientation === 180 || window.orientation === 0) {
                bod.innerHTML = ht;
                reurl();
            }
            if (window.orientation === 90 || window.orientation === -90) {
                bod.innerHTML = "<div style='margin-top:20%;'><h1 style='text-align:center;'>请不要横屏查看!</h1></div>";
            }
        }, false);
    }
});
