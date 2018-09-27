// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
   var obj = {};
    
   
   //var money = 91;
    
   var money = currency;
   
   if (currency>=10000) {
       obj.error = "You are rich, my friend! We don't have so much coins for exchange";
       return obj;
   }
    
 
   var H = 50;
   var Q = 25;
   var D = 10;
   var N = 5;
   var P = 1;
    
    
    var H_value = money / H; // дележка
    var H_value_value = Math.floor(H_value); // целое без остатка (H) - 1
    var value_H = money - H_value_value * H; // осталось серебрянников
    if (H_value_value > 0){
        obj.H = H_value_value;
    }
    
    

    var Q_value = value_H / Q; // дележка
    var Q_value_value = Math.floor(Q_value); // целое без остатка (Q) 
    var value_Q = value_H - Q_value_value * Q; // осталось серебрянников
       if (Q_value_value > 0){
        obj.Q = Q_value_value;
    }
    
    
    
    var D_value = value_Q / D; // дележка
    var D_value_value = Math.floor(D_value); // целое без остатка (D) 
    var value_D = value_Q - D_value_value * D; // осталось серебрянников

           if (D_value_value > 0){
        obj.D = D_value_value;
    }
    
    var N_value = value_D / N; // дележка
    var N_value_value = Math.floor(N_value); // целое без остатка (N) 
    var value_N = value_D - N_value_value * N; // осталось серебрянников

    
         if (N_value_value > 0){
        obj.N = N_value_value;
    }
    
    var P_value = value_N / P; // дележка
    var P_value_value = Math.floor(P_value); // целое без остатка (P) 
    var value_P = value_N - P_value_value * P; // осталось серебрянников
      if (P_value_value > 0){
        obj.P = P_value_value;
    }
    
    
    
    
    return obj;
    
}
