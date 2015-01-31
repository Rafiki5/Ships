$(document).ready(function (){
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var imageData = ctx.createImageData(width, height);
    var xStop = 0, yStop = 0, xStart = 0, yStart = 0;
    var moved = false;
    var hold = false;
//    canvas.addEventListener('mousedown', function(e){
//        xStart = e.x - canvas.offsetLeft;
//        yStart = e.y - canvas.offsetTop;
//    }, false);
//    canvas.addEventListener('mouseup', function(e){
//        xStop = e.x - canvas.offsetLeft;
//        yStop = e.y - canvas.offsetTop;
//        $('#text').text('x: ' + xStart + ' y: ' + yStart);
//        ctx.beginPath();
//        ctx.fillStyle = '#000000'; 
//        ctx.moveTo(xStart, yStart);
//        ctx.lineTo(xStop, yStop);
//        ctx.stroke();
//        ctx.closePath();
//    }, false);
    canvas.addEventListener('mousedown', function(e){
        hold = true;
    }, false);
    canvas.addEventListener('mouseup', function(e){
        hold = false;
        moved = false;
    }, false);
    canvas.addEventListener('mousemove', function(e){
        if (hold == true) {
            if (moved == false) {
            xStart = e.x - canvas.offsetLeft;
            yStart = e.y - canvas.offsetTop;
            moved = true;
            $('#text').text('x: ' + canvas.offsetLeft + ' y: ' + canvas.offsetTop);
        }

            xStop = e.x - canvas.offsetLeft;
            yStop = e.y - canvas.offsetTop;
            ctx.beginPath();
            ctx.fillStyle = '#000000'; 
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xStop, yStop);
            ctx.stroke();
            ctx.closePath();
            xStart = xStop;
            yStart = yStop;
        }
        
//        
//        
//        var x = e.x - canvas.offsetLeft;
//        var y = e.y - canvas.offsetTop;
//        setPixel(imageData, x, y, 0, 0, 0, 255);
//        ctx.putImageData(imageData, 0, 0);
//        $('#text').text('x: ' + x + ' y: ' + y);
    }, false);
            
});
    function setPixel(imageData, x, y, r, g, b, a) {
        var index = ((y * imageData.width * 4) + (x * 4));
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
    }



    function initSnake() {
            var canvas = $('#canvas')[0];
            var ctx = canvas.getContext('2d');
            var width = $('#canvas').width();
            var height = $('#canvas').height();
            var rectTab = [];
            createRectTab();
            var count = 0;
            var timer = setInterval(drawRect, 50);
    
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
    }   function createRectTab () {
        for (var i = 0; i<5; i++) {
            rectTab.push({x:i, y:0});
        }
    }