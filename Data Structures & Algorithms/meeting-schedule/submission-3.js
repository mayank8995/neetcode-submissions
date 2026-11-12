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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
       intervals.sort((a,b) => a.start - b.start);
       for(let i=1;i<intervals.length;i++){
            const i1 = intervals[i-1];
            const i2 = intervals[i];
            if(i1.end > i2.start) {return false}
       }
       return true;
    }
}
