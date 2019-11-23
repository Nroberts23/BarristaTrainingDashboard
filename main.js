var onBar = '';
var working = false;

document.getElementById('startStop').addEventListener("click", function(){ 
    if (!working){
        working = true;
        timeline=[];
        onBar= prompt("Who's on bar?");
        document.getElementById('pageTitle').innerHTML = onBar + "'s Performance Assessment"; 
        document.getElementById('startStop').innerHTML = 'Stop test';
        updateTimeline();
    } else{
        document.getElementById('startStop').innerHTML = 'Stop test';
        working = false;
        updateTimeline();
        generateGraphs();
    }
});

var drinks_completed = {};
var totalWeight = 0;
var drinkQueue = [];
var timeline = [];


document.getElementById('drip').addEventListener('click', function(){
    var now = new Date().getTime();
    drinkQueue.push([now, 1]);
    updateWeight();
    updateTimeline();
});

document.getElementById('short').addEventListener('click', function(){
    var now = new Date().getTime();
    drinkQueue.push([now, 2]);   
    updateWeight();
    updateTimeline();
});

document.getElementById('long').addEventListener('click', function(){
    var now = new Date().getTime();
    drinkQueue.push([now, 3]);   
    updateWeight();
    updateTimeline();
});

document.getElementById('out').addEventListener('click', function(){
    var out = drinkQueue.shift()[1];
    totalWeight = totalWeight - out;
    updateTimeline();
    updateWeightText();
});

function updateWeight(){
    var tot = 0;
    drinkQueue.forEach(function(obj){
       tot = tot + obj[1]; 
    });
    totalWeight = tot;
    updateWeightText();
}

function updateTimeline(){
    var now = new Date().getTime();
    timeline.push([now, totalWeight]);
}

function updateWeightText(){
    document.getElementById('here').innerHTML = 'TotalWeight: ' + totalWeight;
}

function generateGraphs(){
    alert('heres where I would do graph things');
    document.getElementById('here').innerHTML = timeline;
    

    Highcharts.chart('weights',{
        chart: {
            type: 'line'
        },
        title: {
            text: 'Weight'
        },
        xAxis: {
            type: 'dateTime',
            crosshair: true
        },
        series: [{
            name: 'barWeight',
            step: true,
            data: timeline
        }]
    });
}
