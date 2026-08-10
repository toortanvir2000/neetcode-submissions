class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i: number = 0; i < nums.length; i++) {
            let rem: number = target - nums[i];
            for (let j: number = i + 1; j < nums.length; j++) {
                if (rem === nums[j]) return [i, j];
            }
        }
        return [-1, -1];
    }
}
