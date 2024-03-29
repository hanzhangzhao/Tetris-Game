var square = function () {
    this.data = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    this.origin = {
        x: 0,
        y: 0
    };

    // direction
    this.dir = 0;

    // // rotate
    // this.rotates = [
    //     [
    //         [0, 2, 0, 0],
    //         [0, 2, 0, 0],
    //         [0, 2, 0, 0],
    //         [0, 2, 0, 0]
    //     ],
    //     [
    //         [0, 0, 0, 0],
    //         [2, 2, 2, 2],
    //         [0, 0, 0, 0],
    //         [0, 0, 0, 0]
    //     ],
    //     [
    //         [0, 2, 0, 0],
    //         [0, 2, 0, 0],
    //         [0, 2, 0, 0],
    //         [0, 2, 0, 0]
    //     ],
    //     [
    //         [0, 0, 0, 0],
    //         [2, 2, 2, 2],
    //         [0, 0, 0, 0],
    //         [0, 0, 0, 0]
    //     ]
    // ];
}

square.prototype.canDown = function (isValid) {
    var test = {};
    test.x = this.origin.x + 1;
    test.y = this.origin.y;
    return isValid(test, this.data);
}
square.prototype.down = function () {
    this.origin.x = this.origin.x + 1;
}


square.prototype.canLeft = function (isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y - 1;
    return isValid(test, this.data);
}
square.prototype.left = function () {
    this.origin.y = this.origin.y - 1;
}


square.prototype.canRight = function (isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y + 1;
    return isValid(test, this.data);
}
square.prototype.right = function () {
    this.origin.y = this.origin.y + 1;
}


square.prototype.canRotate = function (isValid) {
    var d = (this.dir + 1) % 4;

    var test = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    for (var i = 0; i < this.data.length; i++){
        for (var j = 0; j < this.data[0].length; j++){
            test[i][j] = this.rotates[d][i][j];
        }
    }
    return isValid(this.origin, test);
}
square.prototype.rotate = function (num) {
    if (!num)
        num = 1;
    this.dir = (this.dir + num) % 4;
    
    for (var i = 0; i < this.data.length; i++){
        for (var j = 0; j < this.data[0].length; j++){
            this.data[i][j] = this.rotates[this.dir][i][j];
        }
    }
}