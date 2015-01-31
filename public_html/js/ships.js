$(document).ready(function () {
    var canvas, context, stage;
    var init, drawElement, fieldPress, fieldOver, fieldOut;
    var fieldWidth = 40;
    var fieldHeight = 40;
    var actualFieldGraphics;
    var mySea = [], enemySea = [];
    init = function () {
        //canvas = $('#canvas')[0];
        canvas = document.getElementById('canvas');

        context = canvas.getContext('2d');
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver();
        for(var i=0; i<10; i++) {
            for(var j=0; j<10; j++) {
                var field = drawElement(j*fieldWidth+66, i*fieldHeight+50, fieldWidth, fieldHeight);
                field.x = j;
                field.y = i;
                mySea[j+''+i] = field;
                field.xPos = j*fieldWidth+66;
                field.yPos = i*fieldHeight+50;
                field.canClick = true;
                field.addEventListener('click', fieldPress);
                field.addEventListener('mouseover', fieldOver);
                field.addEventListener('mouseout', fieldOut);
                stage.addChild(field);
            }
        }
        for(var i=0; i<10; i++) {
            for(var j=10; j<20; j++) {
                var field = drawElement(j*fieldWidth+132, i*fieldHeight+50, fieldWidth, fieldHeight);
                field.x = j%10;
                field.y = i;
                enemySea[(j%10)+''+i] = field;
                field.xPos = j*fieldWidth+132;
                field.yPos = i*fieldHeight+50;
                field.canClick = false;
                field.addEventListener('click', fieldPress);
                field.addEventListener('mouseover', fieldOver);
                field.addEventListener('mouseout', fieldOut);
                stage.addChild(field);
            }
        }
        
        stage.update();
        
        
//        var width = canvas.width;
//        var height = canvas.height;
//        context.fillStyle = '#ffffff';
//        context.fillRect(0, 0, width, height);
    }
    fieldOut = function (event) {
        var leaveField = event.target;
        if (leaveField.canClick === false) {
            return;
        }
        var graphics = leaveField.graphics;
        graphics.setStrokeStyle(1);
        graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
        graphics.beginFill(createjs.Graphics.getRGB(0, 200, 255));
        graphics.rect(leaveField.xPos, leaveField.yPos, fieldWidth, fieldHeight);
        stage.update();       
    }
    fieldOver = function (event) {
        var actualField = event.target;
        if (actualField.canClick === false) {
            return;
        }
        var graphics = actualField.graphics;
        graphics.setStrokeStyle(1);
        graphics.beginStroke(createjs.Graphics.getRGB(240, 240, 60));
        graphics.beginFill(createjs.Graphics.getRGB(250, 150, 30));
        graphics.rect(actualField.xPos, actualField.yPos, fieldWidth, fieldHeight);
        stage.update();
    }
    
    fieldPress = function (event) {

        var fieldClicked = event.target;
        if (fieldClicked.canClick === false) {
            return;
        }
        var enemyField = enemySea[fieldClicked.x+''+fieldClicked.y];
        enemyField.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0));
        enemyField.graphics.rect(enemyField.xPos, enemyField.yPos, fieldWidth, fieldHeight);
        //fieldClicked.visible = false;
        stage.update();
    }
    
    drawElement = function (startX, startY, stopX, stopY) {
        var shape = new createjs.Shape();
        var graphics = shape.graphics;
        graphics.setStrokeStyle(1);
        graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
        graphics.beginFill(createjs.Graphics.getRGB(0, 200, 255));
        graphics.rect(startX, startY, stopX, stopY);
        
        return shape;
    } 
    
    
    
    init();
});

