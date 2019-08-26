var game = function () {

    var currentDiv;
    var nextDiv;
    var timeDiv;
    var scoreDiv;
    var score = 0;
    var resultDiv;

    //game matrix
    var currentData = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    // current shape
    var curr;
    // next shape
    var next;
    // divs
    var nextDivs = [];
    var currentDivs = [];

    var initDiv = function (containers, data, divs) {
        for (var i = 0; i < data.length; i++) {
            var div = [];
            for (var j = 0; j < data[0].length; j++) {
                var newNode = document.createElement("div");
                newNode.className = "none";
                newNode.style.top = (i * 20) + 'px';
                newNode.style.left = (j * 20) + 'px';
                containers.appendChild(newNode);
                div.push(newNode);
            }
            divs.push(div);
        }
    }

    var refreshDiv = function (data, divs) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[0].length; j++) {
                if (data[i][j] == 0) {
                    divs[i][j].className = "none";
                }
                else if (data[i][j] == 1) {
                    divs[i][j].className = "done";
                }
                else if (data[i][j] == 2) {
                    divs[i][j].className = "current";
                }
            }
        }
    }

    // test border
    var check = function (pos, x, y) {
        if (pos.x + x < 0) {
            return false;
        } else if (pos.x + x >= currentData.length) {
            return false;
        } else if (pos.y + y < 0) {
            return false
        } else if (pos.y + y >= currentData[0].length) {
            return false
        } else if (currentData[pos.x + x][pos.y + y] == 1) {
            return false
        } else {
            return true;
        }
    }

    // test is square still valid
    var isValid = function (pos, data) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[0].length; j++) {
                if (data[i][j] != 0) {
                    if (!check(pos, i, j)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    // set matrix data
    var setData = function () {
        for (var i = 0; i < curr.data.length; i++) {
            for (var j = 0; j < curr.data[0].length; j++) {
                if (check(curr.origin, i, j))
                    currentData[curr.origin.x + i][curr.origin.y + j] = curr.data[i][j];
            }
        }
    }

    // clear matrix data
    var clearData = function () {
        for (var i = 0; i < curr.data.length; i++) {
            for (var j = 0; j < curr.data[0].length; j++) {
                if (check(curr.origin, i, j))
                    currentData[curr.origin.x + i][curr.origin.y + j] = 0;
            }
        }
    }

    // down
    var down = function () {
        if (curr.canDown(isValid)) {
            clearData();
            curr.down();
            setData();
            refreshDiv(currentData, currentDivs);
            return true;
        }
        else {
            return false;
        }
    }
    // left
    var left = function () {
        if (curr.canLeft(isValid)) {
            clearData();
            curr.left();
            setData();
            refreshDiv(currentData, currentDivs);
        }
    }
    // right
    var right = function () {
        if (curr.canRight(isValid)) {
            clearData();
            curr.right();
            setData();
            refreshDiv(currentData, currentDivs);
        }
    }
    // rotate
    var rotate = function () {
        if (curr.canRotate(isValid)) {
            clearData();
            curr.rotate();
            setData();
            refreshDiv(currentData, currentDivs);
        }
    }

    // square reached bottom then fixed
    var fixed = function () {
        for (var i = 0; i < curr.data.length; i++) {
            for (var j = 0; j < curr.data[0].length; j++) {
                if (check(curr.origin, i, j)) {
                    if (currentData[curr.origin.x + i][curr.origin.y + j] == 2)
                        currentData[curr.origin.x + i][curr.origin.y + j] = 1;
                }
            }
        }
        refreshDiv(currentData, currentDivs);
    }

    // process next square
    var proceedNext = function (type, dir) {
        curr = next;
        setData();
        next = squareFactory.prototype.generate(type, dir);
        refreshDiv(currentData, currentDivs);
        refreshDiv(next.data, nextDivs);
    }

    // clear line
    var checkClear = function () {
        var line = 0;
        for (var i = currentData.length - 1; i >= 0; i--) {
            var clear = true;
            for (var j = 0; j < currentData[0].length; j++) {
                if (currentData[i][j] != 1) {
                    clear = false;
                    break;
                }
            }
            if (clear) {
                line += 1;
                for (var m = i; m > 0; m--) {
                    for (var n = 0; n < currentData[0].length; n++) {
                        currentData[m][n] = currentData[m - 1][n];
                    }
                }
                for (var n = 0; n < currentData[0].length; n++) {
                    currentData[0][n] = 0;
                }
                // when clear more than 1 line
                i++;
            }
        }
        return line;
    }

    // check if game is over
    var checkOver = function () {
        var gameOver = false;
        for (var i = 0; i < currentData[0].length; i++) {
            if (currentData[1][i] == 1) {
                gameOver = true;
            }
        }
        return gameOver;
    }

    // set time
    var setTime = function (time) {
        timeDiv.innerHTML = time + "s";
    }

    // add score
    var addScore = function (line) {
        var p = 0;
        switch (line) {
            case 1:
                p = 100;
                break;
            case 2:
                p = 300;
                break;
            case 3:
                p = 600;
                break;
            case 4:
                p = 1000;
                break;
            default:
                break;
        }
        score += p;
        scoreDiv.innerHTML = score;
    }

    // show game result
    var gameResult = function(win) {
        if(win) {
            resultDiv.innerHTML = "You won!";
        }else{
            resultDiv.innerHTML = "Game Over"
            resultDiv.style.color = "red";
        }
    }


    // add line on your opponent side
    var addTailLines = function(lines) {
        // move up
        for (var i = 0; i < currentData.length - lines.length; i++){
            currentData[i] = currentData[i + lines.length]
        }
        for (var i = 0; i < lines.length; i++) {
            currentData[currentData.length - lines.length + i] = lines[i];
        }
        curr.origin.x = curr.origin.x - lines.length;
        if (curr.origin.x < 0) {
            curr.origin.x = 0;
        }
        refreshDiv(currentData, currentDivs);
    }

    // init
    var init = function (doms, type, dir) {
        currentDiv = doms.currentDiv;
        nextDiv = doms.nextDiv;
        timeDiv = doms.timeDiv;
        scoreDiv = doms.scoreDiv;
        resultDiv = doms.resultDiv;

        // curr = squareFactory.prototype.generate(2, 2);
        next = squareFactory.prototype.generate(type, dir);
        initDiv(currentDiv, currentData, currentDivs);
        initDiv(nextDiv, next.data, nextDivs);

        // curr.origin.x = 10;
        // curr.origin.y = 5;

        // setData();

        // refreshDiv(currentData, currentDivs);
        refreshDiv(next.data, nextDivs);
    }

    this.init = init;
    this.down = down;
    this.left = left;
    this.right = right;
    this.rotate = rotate;
    this.fixed = fixed;
    this.proceedNext = proceedNext;
    this.checkClear = checkClear;
    this.checkOver = checkOver;
    this.setTime = setTime;
    this.addScore = addScore;
    this.gameResult = gameResult;
    this.addTailLines = addTailLines;

    // auto falling
    this.fall = function () {
        while (down());
    }
}