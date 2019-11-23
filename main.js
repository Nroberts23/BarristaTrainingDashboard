var onBar = '';

document.getElementById('startStop').addEventListener("click", function(){ 
    onBar= prompt("Who's on bar?");
    document.getElementById('pageTitle').innerHTML = onBar + "'s Performance Assessment";    
});

var drinks_completed = {};
var curDrink = {};

document.getElementById('drip').addEventListener('click', function(){
    var now = new Date().getTime();
    document.getElementById('here').innerHTML = 'Latest click' + now
});
