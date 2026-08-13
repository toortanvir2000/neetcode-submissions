class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let hash: Record<number, number> = {};
        for (let num of nums) {
            if (!hash[num]) hash[num] = 0;
            hash[num]++;
        }
        let minPQ = new MinPriorityQueue((n) => n[1]);
        for (let [num, count] of Object.entries(hash)) {
            minPQ.enqueue([num, count]);
            if (minPQ.size() > k) minPQ.dequeue();
        }
        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, cnt] = minPQ.dequeue();
            res.push(num);
        }
        return res;
    }
}
