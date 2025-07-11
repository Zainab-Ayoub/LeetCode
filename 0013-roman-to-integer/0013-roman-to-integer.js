/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0;

    for(var i=0; i<s.length; i++){
        const current = romanMap[s[i]];
        const next = romanMap[s[i+1]];

        if(current < next){
            total += (next-current);
            i++;
        } else{
            total += current;
        }
    }
    return total;
};