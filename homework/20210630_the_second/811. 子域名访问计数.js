/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let ans = [];
    let map = new Map();
    function helper(index){
        if(index == cpdomains.length){
            return;
        }
        let [nums, domains]  = cpdomains[index].split(' ');
        let domainsArr = domains.split('.');
        let j = domainsArr.length-1;
        let str = '';
        while(j>=0){
            let point = str==''?'':'.';
            str = domainsArr[j--] + point  + str;
            map.set(str, (map.get(str)||0) + (nums|0))
        }
        helper(index+1);
    }
    helper(0)
    return Array.from(map.entries()).map(item=>item[1]+' '+item[0])
}
