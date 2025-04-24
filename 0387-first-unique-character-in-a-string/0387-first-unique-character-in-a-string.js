/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freqMap = {};
    for(let i=0; i<s.length; i++){
        freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
    }
    for(let i=0; i<s.length; i++){
        if(freqMap[s[i]] === 1){
            return i;
        }
    } return -1;
};