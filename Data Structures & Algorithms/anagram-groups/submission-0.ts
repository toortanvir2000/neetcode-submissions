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
        let ans: string[][] = [];
        let hashStrs: { hash: string, str: string }[] = new Array(strs.length).fill(null);
        for (let i: number = 0; i < strs.length; i++) {
            const str: string = strs[i];
            hashStrs[i] = { hash: helper(str), str: str };
        }
        hashStrs.sort((a, b) => a.hash.localeCompare(b.hash));
        for (let i:number = 0; i < hashStrs.length; i++) {
            const hash: string = hashStrs[i].hash;
            const arr: string[] = [hashStrs[i].str];
            for (let j: number = i + 1; j < hashStrs.length; j++) {
                if (hashStrs[j].hash === hash) {
                    arr.push(hashStrs[j].str);
                    i++;
                } else {
                    break;
                }
            }
            ans.push(arr);
        }
        return ans;
    }
}
