var local = new local();
local.start();


// var nextData = [
//     [2,2,2,0],
//     [0,2,0,0],
//     [0,0,0,0],
//     [0,0,0,0]
// ];

// var currentData = [
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,2,2,0,0,0,0,0,0],
//     [0,0,2,2,1,0,1,0,0,0],
//     [0,0,1,1,1,1,1,1,0,0]
// ];

// var currShape;
// var nextShape;

// var nextDivs = [];
// var currentDivs = [];

// var initGame = function() {
//     for (var i = 0; i < currentData.length; i++) {
//         var currentDiv = [];
//         for (var j = 0; j < currentData[0].length; j++) {
//             var newNode = document.createElement("div");
//             newNode.className = "none";
//             newNode.style.top = (i*20) + 'px';
//             newNode.style.left = (j*20) + 'px';
//             document.getElementById('game').appendChild(newNode);
//             currentDiv.push(newNode);
//         }
//         currentDivs.push(currentDiv);
//     }
// }

// var initNext = function() {
//     for (var i = 0; i < nextData.length; i++) {
//         var nextDiv = [];
//         for (var j = 0; j < nextData[0].length; j++) {
//             var newNode = document.createElement("div");
//             newNode.className = "none";
//             newNode.style.top = (i*20) + 'px';
//             newNode.style.left = (j*20) + 'px';
//             document.getElementById('next').appendChild(newNode);
//             nextDiv.push(newNode);
//         }
//         nextDivs.push(nextDiv);
//     }
// }

// var refreshGame = function() {
//     for (var i = 0; i < currentData.length; i++){
//         for (var j= 0; j < currentData[0].length; j++){
//             if (currentData[i][j] == 0) {
//                 currentDivs[i][j].className = "none";
//             }
//             else if (currentData[i][j] == 1) {
//                 currentDivs[i][j].className = "done";
//             }
//             else if (currentData[i][j] == 2) {
//                 currentDivs[i][j].className = "current";
//             }
//         }
//     }
// }

// var refreshNext = function() {
//     for (var i = 0; i < nextData.length; i++){
//         for (var j= 0; j < nextData[0].length; j++){
//             if (nextData[i][j] == 0) {
//                 nextDivs[i][j].className = "none";
//             }
//             else if (nextData[i][j] == 1) {
//                 nextDivs[i][j].className = "done";
//             }
//             else if (nextData[i][j] == 2) {
//                 nextDivs[i][j].className = "current";
//             }
//         }
//     }
// }

// initGame();
// initNext();
// refreshGame();
// refreshNext();
