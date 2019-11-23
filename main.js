var onBar = '';

document.getElementById('startStop').addEventListener("click", function(){ 
    onBar= prompt("Who's on bar?");
    document.getElementById('pageTitle').innerHTML = onBar + "'s Performance Assessment";    
});

var drinks_completed = {};
var curDrink = {};
curDrink['drip'] = [];

document.getElementById('drip').addEventListener('click', function(){
    var now = new Date().getTime();
    curDrink['drip'].push(now);
    document.getElementById('here').innerHTML = 'Latest click: ' + curDrink['drip'];
    console.log(curDrink['drip']);
});

