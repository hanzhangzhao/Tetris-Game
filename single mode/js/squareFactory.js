var square1 = function () {
    square.call(this);

    // rotate
    this.rotates = [
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
}

square1.prototype = square.prototype;

// square.prototype.canDown = function (isValid) {
//     var test = {};
//     test.x = this.origin.x + 1;
//     test.y = this.origin.y;
//     return isValid(test, this.data);
// }
// square.prototype.down = function () {
//     this.origin.x = this.origin.x + 1;
// }


// square.prototype.canLeft = function (isValid) {
//     var test = {};
//     test.x = this.origin.x;
//     test.y = this.origin.y - 1;
//     return isValid(test, this.data);
// }
// square.prototype.left = function () {
//     this.origin.y = this.origin.y - 1;
// }


// square.prototype.canRight = function (isValid) {
//     var test = {};
//     test.x = this.origin.x;
//     test.y = this.origin.y + 1;
//     return isValid(test, this.data);
// }
// square.prototype.right = function () {
//     this.origin.y = this.origin.y + 1;
// }


// square.prototype.canRotate = function (isValid) {
//     var d = this.dir + 1;
//     if (d == 4) {
//         d = 0;
//     }
//     var test = [
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0]
//     ];

//     for (var i = 0; i < this.data.length; i++){
//         for (var j = 0; j < this.data[0].length; j++){
//             test[i][j] = this.rotates[d][i][j];
//         }
//     }
//     return isValid(this.origin, test);
// }
// square.prototype.rotate = function () {
//     this.dir = this.dir + 1;
//     if (this.dir == 4) {
//         this.dir = 0;
//     }

//     for (var i = 0; i < this.data.length; i++){
//         for (var j = 0; j < this.data[0].length; j++){
//             this.data[i][j] = this.rotates[this.dir][i][j];
//         }
//     }
// }


var square2 = function () {
    square.call(this);
    // rotate
    this.rotates = [
        [
            [0, 2, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
}
square2.prototype = square.prototype;


var square3 = function () {
    square.call(this);
    // rotate
    this.rotates = [
        [
            [2, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
}
square3.prototype = square.prototype;


var square4 = function () {
    square.call(this);
    // rotate
    this.rotates = [
        [
            [2, 2, 2, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 2, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
}
square4.prototype = square.prototype;


var square5 = function () {
    square.call(this);
    // rotate
    this.rotates = [
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
}
square5.prototype = square.prototype;


var square6 = function () {
    square.call(this);
    // rotate
    this.rotates = [
        [
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
}
square6.prototype = square.prototype;


var square7 = function () {
    square.call(this);
    // rotate
    this.rotates = [
        [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
}
square7.prototype = square.prototype;


var squareFactory = function () { }
squareFactory.prototype.generate = function (index, dir) {
    var s;
    index = index + 1;
    switch (index) {
        case 1:
            s = new square1();
            break;
        case 2:
            s = new square2();
            break;
        case 3:
            s = new square3();
            break;
        case 4:
            s = new square4();
            break;
        case 5:
            s = new square5();
            break;
        case 6:
            s = new square6();
            break;
        case 7:
            s = new square7();
            break;
        default:
            break;
    }
    s.origin.x = 0;
    s.origin.y = 3;
    s.rotate(dir);
    return s;
}
