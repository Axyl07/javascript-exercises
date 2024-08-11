const repeatString = function(string , num) {
        if (num<0) {
            return 'ERROR';
        }
        let input = string;
        let ans = "";
        for (let index = 0; index < num; index++) {
            ans+=input;
        }    
     
        return ans; 
            
       
       
};

// Do not edit below this line
module.exports = repeatString;
