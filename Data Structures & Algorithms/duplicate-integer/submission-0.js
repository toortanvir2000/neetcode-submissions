class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = new Set();

        for (const i of nums) {
            if (hash.has(i)) return true;
            hash.add(i);
        }

        return false;
    }
}
