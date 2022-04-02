Date.prototype.isHourAgo = function (hour) {
    hour = hour * 60 * 1000; /* ms */
    var hourago = Date.now() - hour;
    return hour > hourago;
};
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}
Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    //this.setHours(this.getHours()+h);
    return this;
};
Date.prototype.addHours2 = function (hrs) {
    this.setHours(this.getHours() + hrs);
    return this;
};
var date_ext = /** @class */ (function () {
    function date_ext() {
    }
    date_ext.datetime_local = function (date) {
        return new Date(date).toJSON().slice(0, 19);
    };
    return date_ext;
}());
if (typeof window != 'undefined' && window instanceof Window) {
    window.datetime_local = date_ext.datetime_local;
}
else if (typeof global == 'object') {
    global.datetime_local = date_ext.datetime_local;
}
if (typeof module != 'undefined' && typeof module == 'object') {
    module.exports = date_ext;
    module.exports = {
        datetime_local: date_ext.datetime_local,
    };
}
