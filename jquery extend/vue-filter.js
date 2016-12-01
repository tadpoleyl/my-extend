
Date.prototype.format = function (format) {
    /*
    * eg:format="YYYY-MM-dd hh:mm:ss";
    */
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),   //day
        "h+": this.getHours(),  //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

function getInsuranceName(value) {
    if (value == 2) {
        return "平安";
    }
    else if (value == 1) {
        return "太平洋";
    }
    else if (value == 4) {
        return "人保";
    }
    else if (value == 8) {
        return "国寿财";
    }
    else if (value == 16) {
        return "中华联合";
    }
    else if (value == 32) {
        return "大地";
    }
    return "";
}

Vue.filter("dayFormat", function (value) {
    if (value && $.trim(value).length > 0) {
        var _d = new Date(value.replace(/-/g, "/"));
        return _d.format('yyyy-MM-dd');
    }
    return "";
});
Vue.filter("dateTimeFormat", function (value) {
    if (value && $.trim(value).length > 0) {
        var _d = new Date(value.replace(/-/g, "/"));
        return _d.format('yyyy-MM-dd hh:mm');
    }
    return "";
});

Vue.filter("InsuranceText", function (value) {
    return getInsuranceName(value);
});