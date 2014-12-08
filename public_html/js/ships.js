$(document).ready(function (){
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var width = $('#canvas').width();
    var height = $('#canvas').height();
    var rectTab = [];
    createRectTab();
    var count = 0;
    var timer = setInterval(drawRect, 50);
    
 
    function createRectTab () {
        for (var i = 0; i<5; i++) {
            rectTab.push({x:i, y:0});
        }
    }
    function drawRect() {
       ctx.fillStyle = 'white';
       ctx.fillRect(0, 0, width, height);
       count++;
       console.log(count);
        if (count > 100) {
            clearInterval(timer);
        }
        for (var i=0; i<rectTab.length; i++) {
            var left = rectTab[i].x*10+count;
            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.fillRect(left, 10, 10, 10);
            ctx.closePath();
            ctx.strokeStyle = 'white';
            ctx.strokeRect(left, 10, 10, 10);
        }            
    }
    function drawBackground () {
        ctx.fillStyle = '#0055ff';        
        console.log(width + ' ' + height);
        ctx.fillRect(0, 0, width, (height/2)+100);
        ctx.fillStyle = '#ffff00';
        ctx.arc(150, 250, 100, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(0, (height/2)+100, width, height);
    }
});