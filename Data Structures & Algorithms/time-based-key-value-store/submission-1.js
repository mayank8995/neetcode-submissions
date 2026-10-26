class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([timestamp,value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let values = this.keyStore.get(key) || [];
        let low = 0;
        let high = values.length - 1
        let result="";
        while(low<=high){
            const mid = Math.floor((high - low)/2) + low;
            // finding by upper bound
            if(values[mid][0] <= timestamp){
                result = values[mid][1];
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
        return result;
    }
}
