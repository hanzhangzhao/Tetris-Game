var local = function() {
    // game object
    var games;
    // time interval
    var INTERVAL = 200;
    // timer
    var timer = null;

    var timeCount = 0;
    // game time
    var time = 0;

    // bind keyboard event
    var bindKeyEvent = function() {
        document.onkeydown = function(e){
            if (e.keyCode == 38) { // up
                games.rotate();
            }else if (e.keyCode == 39) { // right
                games.right();
            }else if (e.keyCode == 40) { // down
                games.down();
            }else if (e.keyCode == 37) { // left
                games.left();
            }else if (e.keyCode == 32) { // space
                games.fall();
            }
        }
    }

    var move = function(){

        timeCounter();

        if (!games.down()) {
            games.fixed();

            var lines = games.checkClear();
            if (lines != 0){
                games.addScore(lines);
            }

            var gameOver = games.checkOver();
            if (gameOver) {
                games.gameResult(false);
                stop();
            }else{
                games.proceedNext(generateType(), generateDir());
            }   
        }
    }

    // generate random lines
    var generateBottomLine = function(lineNum) {
        var lines = [];
        for (var i = 0; i < lineNum; i++) {
            var line = [];
            for (var j = 0; j < 10; j++) {
                line.push(Math.ceil(Math.random() * 2) - 1); // 0 to 1
            }
            lines.push(line);
        }
        return lines;
    }

    // count game time
    var timeCounter = function() {
        timeCount = timeCount + 1;
        if (timeCount == 5) {
            timeCount = 0;
            time = time + 1;
            games.setTime(time);
            if (time % 20 == 0) {
                games.addTailLines(generateBottomLine(1));
            }
        }
    }

    // generate a random type square 
    var generateType = function(){
        return Math.ceil(Math.random()*7) - 1; // 0 - 6
    }

    // randomly generate a rotate number
    var generateDir = function(){
        return Math.ceil(Math.random()*4) - 1; // 0 - 3
    }


    var start = function(){
        var doms = {
            currentDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next'),
            timeDiv: document.getElementById('time'),
            scoreDiv: document.getElementById('score'),
            resultDiv: document.getElementById('over')
        }
        games = new game();
        games.init(doms, generateType(), generateDir());
        bindKeyEvent();

        games.proceedNext(generateType(), generateDir());
        timer = setInterval(move, INTERVAL);
    }

    var stop = function() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
    }

    this.start = start;
}