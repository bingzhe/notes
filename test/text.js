var reverse = function (x) {
    function div(a, b) { //去掉小数点的除法
        return ~~(a / b)
    }
    var ret = 0;
    var factor = x < 0 ? - 1 : 1;
    x = x * factor //变成正数
    while (x !== 0) {
        ret = ret * 10 + x % 10;
        x = div(x, 10) //不断取前几位
    }
    if ((ret > Math.pow(2, 31) - 1)) {
        return 0;
    }
    return ret * factor
};