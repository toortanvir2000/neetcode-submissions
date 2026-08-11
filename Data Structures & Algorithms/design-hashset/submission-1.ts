class MyHashSet {
    data = [];
    constructor() {
        this.data = new Array(1000001).fill(false);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        this.data[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        this.data[key] = false;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        return this.data[key];
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
