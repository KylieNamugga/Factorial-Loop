function factorialize(num) {

    
    if (num <= 0 || num === 1) 
    return 1;
    
    
    for (var i = num - 1; i >= 1; i--) {
        num = num*i;              
        }
        return num;
    
}
module.exports = factorialize;

// Pair Programming Partner: Nina Kenyonyozi Bwengye