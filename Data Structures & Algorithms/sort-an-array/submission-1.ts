class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        if (nums.length <= 1) return nums;
        let mid: number = Math.floor(nums.length / 2);
        let left: number[] = this.sortArray(nums.slice(0, mid));
        let right: number[] = this.sortArray(nums.slice(mid));
        return this.sorted(left, right);
    }
    sorted(left: number[], right: number[]): number[] {
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
}
