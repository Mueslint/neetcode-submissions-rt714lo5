class LRUCache {
    capacity = 0;
    LRUcache = new Map();

    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const value = this.LRUcache.get(key);
        if(!value) return -1

        this.LRUcache.delete(key);
        this.LRUcache.set(key, value);

        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // if key does not exist, we check capacity to make room
        // before adding it
        if(!this.LRUcache.delete(key)){
            if(this.LRUcache.size + 1 > this.capacity){
                const firstElement = this.LRUcache.keys().next().value;
                this.LRUcache.delete(firstElement);
            }
        }

        
        this.LRUcache.set(key, value)
    }
}
