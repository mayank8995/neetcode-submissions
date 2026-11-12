/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = intervals.map((i) => i.start).sort((a,b) => a-b);
        let end = intervals.map((i) => i.end).sort((a,b) => a-b);
        let i=0;
        let j=0;
        let res=0;
        let count=0;
        while(i<start.length){
            if(start[i] < end[j]){
                i++;
                count++;
            }else{
                j++;
                count--;
            }
            res = Math.max(res,count)
        }
        return res;
    }
}
