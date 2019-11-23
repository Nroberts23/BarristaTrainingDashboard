var onBar = '';
var working = false;
var startTime;
var endTime;

document.getElementById('startStop').addEventListener("click", function(){ 
    if (!working){
        working = true;
        onBar= prompt("Who's on bar?");
        document.getElementById('pageTitle').innerHTML = onBar + "'s Performance Assessment"; 
        document.getElementById('startStop').innerHTML = 'Stop test';
        startTime = new Date().getTime();
    } else{
        document.getElementById('startStop').innerHTML = 'Stop test';
        working = false;
        endTime = new Date().getTime();
        generateGraphs();
    }
});

var drinks_completed = {};
var totalWeight = 0
var drinkQueue = [];



document.getElementById('drip').addEventListener('click', function(){
    var now = new Date().getTime();
    drinkQueue.push([1, now]);
    updateWeight();
});

document.getElementById('short').addEventListener('click', function(){
    var now = new Date().getTime();
    drinkQueue.push([2, now]);   
    updateWeight();
});

document.getElementById('long').addEventListener('click', function(){
    var now = new Date().getTime();
    drinkQueue.push([3, now]);   
    updateWeight();
});

document.getElementById('out').addEventListener('click', function(){
    var out = drinkQueue[0][0];
    drinkQueue = drinkQueue.splice(1);
    totalWeight = totalWeight - out;
    updateWeightText();
});

function updateWeight(){
    var tot = 0;
    drinkQueue.forEach(function(obj){
       tot = tot + obj[0]; 
    });
    totalWeight = tot;
    updateWeightText();
}

function updateWeightText(){
    document.getElementById('here').innerHTML = 'TotalWeight: ' + totalWeight;
}

function generateGraphs(){
    document.getElementById('here').innerHTML = '';
    alert('heres where I would do graph things');

}
