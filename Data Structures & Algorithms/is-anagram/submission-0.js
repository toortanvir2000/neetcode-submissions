class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return this.createHash(s) === this.createHash(t);
    }

    createHash(arr) {
        let res = new Array(26).fill(0);
        let str = "";

        for (let i = 0; i < arr.length; i++) {
            const idx = arr[i].charCodeAt(0) - "a".charCodeAt(0);
            res[idx] = res[idx] + 1;
        }

        for (let i = 0; i < res.length; i++) {
            str = `${str}#${res[i]}`;
        }

        return str;
    }
}
