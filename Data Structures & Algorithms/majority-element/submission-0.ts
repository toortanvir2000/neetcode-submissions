class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let num: number = nums[0];
        let count: number = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === num) {
                count++;
            } else {
                count--;
                if (count < 0) {
                    num = nums[i];
                    count = 1;
                }
            }
        }
        return num;
    }
}
