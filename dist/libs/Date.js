Date.prototype.isHourAgo = function (hour) {
    hour = hour * 60 * 1000; /* ms */
    const hourago = Date.now() - hour;
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
class date_ext {
    static datetime_local(date) {
        return new Date(date).toJSON().slice(0, 19);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtJQUN2QyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRO0lBQ2pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDbEMsT0FBTyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUc7UUFDckIsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQztDQUNIO0FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2xELG1DQUFtQztJQUNuQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRztJQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNyQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLE1BQU0sUUFBUTtJQUNaLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBNEI7UUFDaEQsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQUVELElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxJQUFJLE1BQU0sWUFBWSxNQUFNLEVBQUU7SUFDNUQsTUFBTSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO0NBQ2pEO0tBQU0sSUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLEVBQUU7SUFDcEMsTUFBTSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO0NBQ2pEO0FBQ0QsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXLElBQUksT0FBTyxNQUFNLElBQUksUUFBUSxFQUFFO0lBQzdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDZixjQUFjLEVBQUUsUUFBUSxDQUFDLGNBQWM7S0FDeEMsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbnRlcmZhY2UgRGF0ZSB7XG4gIGFkZEhvdXJzOiAoaDogbnVtYmVyKSA9PiBEYXRlO1xuICBhZGRIb3VyczI6IChoOiBudW1iZXIpID0+IERhdGU7XG5cbiAgdG9HTVRTdHJpbmcoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBEYXRlIGlzIGBuYCBob3VyIGFnb1xuICAgKiBAcGFyYW0gc291cmNlIG51bWJlciBvZiBob3Vyc1xuICAgKi9cbiAgaXNIb3VyQWdvKHNvdXJjZTogbnVtYmVyKTogYm9vbGVhbjtcbn1cblxuRGF0ZS5wcm90b3R5cGUuaXNIb3VyQWdvID0gZnVuY3Rpb24gKGhvdXIpIHtcbiAgaG91ciA9IGhvdXIgKiA2MCAqIDEwMDA7IC8qIG1zICovXG4gIGNvbnN0IGhvdXJhZ28gPSBEYXRlLm5vdygpIC0gaG91cjtcbiAgcmV0dXJuIGhvdXIgPiBob3VyYWdvO1xufTtcblxuaWYgKCFEYXRlLm5vdykge1xuICBEYXRlLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG59XG5EYXRlLnByb3RvdHlwZS5hZGRIb3VycyA9IGZ1bmN0aW9uIChoKSB7XG4gIHRoaXMuc2V0VGltZSh0aGlzLmdldFRpbWUoKSArIGggKiA2MCAqIDYwICogMTAwMCk7XG4gIC8vdGhpcy5zZXRIb3Vycyh0aGlzLmdldEhvdXJzKCkraCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRGF0ZS5wcm90b3R5cGUuYWRkSG91cnMyID0gZnVuY3Rpb24gKGhycykge1xuICB0aGlzLnNldEhvdXJzKHRoaXMuZ2V0SG91cnMoKSArIGhycyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuY2xhc3MgZGF0ZV9leHQge1xuICBzdGF0aWMgZGF0ZXRpbWVfbG9jYWwoZGF0ZTogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0pTT04oKS5zbGljZSgwLCAxOSk7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IGluc3RhbmNlb2YgV2luZG93KSB7XG4gIHdpbmRvdy5kYXRldGltZV9sb2NhbCA9IGRhdGVfZXh0LmRhdGV0aW1lX2xvY2FsO1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnKSB7XG4gIGdsb2JhbC5kYXRldGltZV9sb2NhbCA9IGRhdGVfZXh0LmRhdGV0aW1lX2xvY2FsO1xufVxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0Jykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGRhdGVfZXh0O1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRldGltZV9sb2NhbDogZGF0ZV9leHQuZGF0ZXRpbWVfbG9jYWwsXG4gIH07XG59XG4iXX0=