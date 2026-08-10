class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        function helper(str: string): string {
            let res: string = "";
            let arr: number[] = new Array(26).fill(0);
            for (let ch of str) {
                let idx: number = ch.charCodeAt(0) - "a".charCodeAt(0);
                arr[idx]++;
            }
            for (let i of arr) {
                res += i;
                res += "#";
            }
            return res;
        }
        let map: {string: string[]} | {} = {};
        for (let str of strs) {
            const hash = helper(str);
            if (!map[hash]) map[hash] = [];
            map[hash].push(str);
        }
        let ans: string[][] = Object.values(map);
        return ans;
    }
}
