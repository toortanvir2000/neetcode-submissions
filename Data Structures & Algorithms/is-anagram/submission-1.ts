class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        function helper (str: string): string {
            let arr = new Array(26).fill(0);
            for (let i of str) {
                const idx = i.charCodeAt(0) - 'a'.charCodeAt(0);
                arr[idx]++;
            }
            let res = "";
            for (let i of arr) {
                res += i;
                res += "#";
            }
            return res;
        }
        const sHash: string = helper(s);
        const tHash: string = helper(t);
        return sHash === tHash;
    }
}
