class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        if (nums.length === 0) return 0;
        if (!nums.includes(val)) return nums.length;
        let valAtIdx: number = nums.indexOf(val);
        let replaceWithIdx: number = valAtIdx;
        while (replaceWithIdx < nums.length) {
            if (nums[replaceWithIdx] !== val) {
                [nums[valAtIdx], nums[replaceWithIdx]] = [nums[replaceWithIdx], nums[valAtIdx]];
                valAtIdx++;
            }
            replaceWithIdx++;
        }
        return nums.indexOf(val) ?? nums.length;
    }
}
