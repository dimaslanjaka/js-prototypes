JSON.stringifyWithCircularRefs = (function () {
    const refs = new Map();
    const parents = [];
    const path = ['this'];
    function clear() {
        refs.clear();
        parents.length = 0;
        path.length = 1;
    }
    function updateParents(key, value) {
        let idx = parents.length - 1;
        let prev = parents[idx];
        if (prev[key] === value || idx === 0) {
            path.push(key);
            parents.push(value);
        }
        else {
            while (idx-- >= 0) {
                prev = parents[idx];
                if (prev[key] === value) {
                    idx += 2;
                    parents.length = idx;
                    path.length = idx;
                    --idx;
                    parents[idx] = value;
                    path[idx] = key;
                    break;
                }
            }
        }
    }
    function checkCircular(key, value) {
        if (value != null) {
            if (typeof value === 'object') {
                if (key) {
                    updateParents(key, value);
                }
                const other = refs.get(value);
                if (other) {
                    return '[Circular Reference]' + other;
                }
                else {
                    refs.set(value, path.join('.'));
                }
            }
        }
        return value;
    }
    return function stringifyWithCircularRefs(obj, space = 2) {
        try {
            parents.push(obj);
            return JSON.stringify(obj, checkCircular, space);
        }
        finally {
            clear();
        }
    };
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNPTi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9KU09OLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDO0lBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdkIsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdEIsU0FBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLO1FBQy9CLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0wsT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtvQkFDdkIsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDVCxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2xCLEVBQUUsR0FBRyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2hCLE1BQU07aUJBQ1A7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLO1FBQy9CLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDM0I7Z0JBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsT0FBTyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDakM7YUFDRjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsT0FBTyxTQUFTLHlCQUF5QixDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQztRQUN0RCxJQUFJO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsRDtnQkFBUztZQUNSLEtBQUssRUFBRSxDQUFDO1NBQ1Q7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbnRlcmZhY2UgSlNPTiB7XG4gIC8qKlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNjE5NjI5NjQvNjQwNDQzOX1cbiAgICogQGV4YW1wbGVcbiAgICogY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoe2E6e2E6e2E6e2E6W3thOntoZWxsbzpcIndvcmxkXCJ9fV19fX19KSlcbiAgICovXG4gIHN0cmluZ2lmeVdpdGhDaXJjdWxhclJlZnM6IChvYmo6IGFueSwgc3BhY2U/OiBudW1iZXIpID0+IHN0cmluZztcbn1cblxuSlNPTi5zdHJpbmdpZnlXaXRoQ2lyY3VsYXJSZWZzID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVmcyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgcGFyZW50cyA9IFtdO1xuICBjb25zdCBwYXRoID0gWyd0aGlzJ107XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgcmVmcy5jbGVhcigpO1xuICAgIHBhcmVudHMubGVuZ3RoID0gMDtcbiAgICBwYXRoLmxlbmd0aCA9IDE7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYXJlbnRzKGtleSwgdmFsdWUpIHtcbiAgICBsZXQgaWR4ID0gcGFyZW50cy5sZW5ndGggLSAxO1xuICAgIGxldCBwcmV2ID0gcGFyZW50c1tpZHhdO1xuICAgIGlmIChwcmV2W2tleV0gPT09IHZhbHVlIHx8IGlkeCA9PT0gMCkge1xuICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICBwYXJlbnRzLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoaWR4LS0gPj0gMCkge1xuICAgICAgICBwcmV2ID0gcGFyZW50c1tpZHhdO1xuICAgICAgICBpZiAocHJldltrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgIGlkeCArPSAyO1xuICAgICAgICAgIHBhcmVudHMubGVuZ3RoID0gaWR4O1xuICAgICAgICAgIHBhdGgubGVuZ3RoID0gaWR4O1xuICAgICAgICAgIC0taWR4O1xuICAgICAgICAgIHBhcmVudHNbaWR4XSA9IHZhbHVlO1xuICAgICAgICAgIHBhdGhbaWR4XSA9IGtleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ2lyY3VsYXIoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgdXBkYXRlUGFyZW50cyhrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG90aGVyID0gcmVmcy5nZXQodmFsdWUpO1xuICAgICAgICBpZiAob3RoZXIpIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhciBSZWZlcmVuY2VdJyArIG90aGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZnMuc2V0KHZhbHVlLCBwYXRoLmpvaW4oJy4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHN0cmluZ2lmeVdpdGhDaXJjdWxhclJlZnMob2JqLCBzcGFjZSA9IDIpIHtcbiAgICB0cnkge1xuICAgICAgcGFyZW50cy5wdXNoKG9iaik7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBjaGVja0NpcmN1bGFyLCBzcGFjZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGNsZWFyKCk7XG4gICAgfVxuICB9O1xufSkoKTtcbiJdfQ==