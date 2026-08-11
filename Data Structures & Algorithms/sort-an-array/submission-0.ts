class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        function sorted(left: number[], right: number[]): number[] {
            let l = 0;
            let r = 0;
            let ans: number[] = [];
            while (l < left.length && r < right.length) {
                if (left[l] <= right[r]) {
                    ans.push(left[l]);
                    l++;
                } else {
                    ans.push(right[r]);
                    r++;
                }
            }
            return [...ans, ...left.slice(l), ...right.slice(r)];
        }
        function helper(arr: number[]): number[] {
            if (arr.length <= 1) return arr;
            let mid: number = Math.floor(arr.length / 2);
            let left: number[] = helper(arr.slice(0, mid));
            let right: number[] = helper(arr.slice(mid));
            return sorted(left, right);
        }
        return helper(nums);
    }
}
