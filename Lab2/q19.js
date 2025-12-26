function infinteSeries(stopCount) {
    
    let cur = 0;
    return {
        next() {
            let arr = [];
            for(let i=0;i<stopCount;i++) {
                cur++;
                arr = [...arr , cur];
            }
            return {
                stoppedAt : cur,
                values : arr
            }
            
        }
    }
} 

const iter = new infinteSeries(6);
console.log(iter.next());
console.log(iter.next());