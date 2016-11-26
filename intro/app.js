var appModule = (function(){
    return {
        carName : 'audi',
        priceCalculator : (price,time) => time * price++
    };
})(); //IIFE