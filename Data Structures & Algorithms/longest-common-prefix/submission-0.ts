class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let ans: string = "";
        let len: number = 201;
        for (let i of strs) {
            len = Math.min(len, i.length)
        }
        for (let i: number = 0; i < len; i++) {
            let ch: string = strs[0][i];
            for (let j of strs) {
                if (j[i] !== ch) return ans;
            }
            ans += ch;
        }
        return ans;
    }
}
