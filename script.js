
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var cRect = canvas.getBoundingClientRect();
var canvasx = Math.round(cRect.left);
var canvasy = Math.round(cRect.top);

var waterthing = [[10,10,0,0]];
var numforcolor = 1;
var endingon = 0;
var endingon2 = 0;
var redoning = 0;
var greenoning = 0;
var pinkoning = 0;
var coloring = "red";
var block1 = 0;
var block2 = 0;
var block3 = 0;
var downtest = 0;
var righttest = 0;
var lefttest = 0;
var waterblock1y = 0;
var waterblock1x = 340;
var totalwaters = 2;
var keystopper = 0;
var blocktype = ["gold", "red", "red", "red"];
var stage = 0;
var game = "start"
var entertype = "blank";
var backlist = [[60, 160, 40, 20], [20, 240, 60, 20], [360, 0, 320, 20], [680, 0, 20, 440], [680, 4, 20, 40], [220, 40, 120, 20], [240, 80, 120, 20], [360, 40, 60, 20], [40, 40, 120, 20], [180, 40, 20, 40], [160, 80, 60, 20], [200, 100, 20, 40], [240, 100, 20, 40], [140, 120, 40, 20], [120, 160, 100, 20], [240, 160, 60, 20], [280, 120, 60, 20], [320, 120, 20, 80], [340, 160, 60, 20], [360, 120, 40, 20], [20, 80, 40, 20], [80, 80, 60, 20], [100, 60, 20, 20], [40, 120, 80, 20], [40, 120, 20, 100], [80, 200, 60, 20], [200, 180, 20, 40], [200, 200, 80, 20], [160, 200, 20, 60],[100, 240, 40, 20], [240, 240, 60, 20], [280, 280, 60, 20], [180, 240, 40, 20], [240, 240, 20, 80], [240, 320, 60, 20], [360, 240, 20, 80], [320, 320, 60, 20], [320, 240, 60, 20], [320, 200, 80, 20], [420, 180, 20, 40], [420, 140, 40, 20], [460, 140, 20, 40], [380, 80, 100, 20], [440, 100, 20, 60], [460, 200, 60, 20], [400, 240, 40, 20], [460, 240, 40, 20], [420, 280, 40, 20], [480, 280, 40, 20], [380, 280, 20, 20], [400, 320, 40, 20], [460, 320, 60, 20], [540, 200, 20, 100], [560, 200, 60, 20], [440, 40, 100, 20], [560, 40, 80, 20], [620, 40, 20, 60], [600, 80, 60, 20], [500, 80, 20, 60], [540, 80, 20, 60], [580, 120, 60, 20], [500, 160, 40, 20], [580, 160, 20, 40], [560, 160, 20, 20], [620, 160, 40, 20], [640, 180, 20, 80], [580, 240, 40, 20], [580, 280, 80, 20], [580, 280, 20, 60], [540, 320, 40, 20], [620, 320, 40, 20], [140, 320, 80, 20], [180, 280, 60, 20], [100, 240, 20, 100], [40, 280, 40, 60], [120, 280, 40, 20], [20, 360, 100, 80], [140, 360, 100, 80], [260, 360, 180, 80], [460, 360, 100, 80], [580, 360, 100, 80]];

var area = function () {
    waterthing = [[10,10,0,0]];
    waterblock1y = 0;
    waterblock1x = 340;
    totalwaters = 2;
    ctx.fillStyle = "black";

    ctx.fillRect(0, 0, 340, 20);
    ctx.fillRect(0, 0, 20, 440);

    ctx.fillStyle = blocktype[0];
    ctx.fillRect(120, 380, 20, 20);
    ctx.fillStyle = blocktype[1];
    ctx.fillRect(240, 380, 20, 20);
    ctx.fillStyle = blocktype[2];
    ctx.fillRect(440, 380, 20, 20);
    ctx.fillStyle = blocktype[3];
    ctx.fillRect(560, 380, 20, 20);

    ctx.fillStyle = "black";
    ctx.fillRect(140, 320, 80, 20);
    ctx.fillRect(180, 280, 60, 20);
    ctx.fillRect(100, 240, 20, 100);
    ctx.fillRect(40, 280, 40, 60);
    ctx.fillRect(120, 280, 40, 20);

    ctx.fillRect(20, 360, 100, 80);
    ctx.fillRect(140, 360, 100, 80);
    ctx.fillRect(260, 360, 180, 80);
    ctx.fillRect(460, 360, 100, 80);
    ctx.fillRect(580, 360, 100, 80);
}
area();
var redblocks = [[140, 80], [300, 140], [300, 60], [100, 340], [120, 120], [260, 280], [200, 140], [260, 220], [440, 320], [480, 300], [520, 80]]; 
var redclears = [];
var greenblocks = [[80, 240], [200, 40], [60, 200], [200, 40], [440, 60], [340, 120], [300, 240], [400, 340], [420, 40], [520, 120], [460, 180]]; 
var greenclears = [];
var pinkblocks = [[380, 220], [420, 200], [340, 40], [220, 320], [380, 100], [300, 240], [560, 60], [560, 340]]; 
var pinkclears = [];
var bt = [];
var bt2 = [];
var btcolor = "";
var blocksplace = function (color, type) {
    if (color != "clear") {
        ctx.fillStyle = color;
    }
    for (i = 0; i < bt.length; i++) {
        if (color === "clear") {
            ctx.fillStyle = bt[i][2];
        } 
        if (type != "background") {
            ctx.fillRect(bt[i][0], bt[i][1], 20, 20);
        } else {
            ctx.fillRect(bt[i][0], bt[i][1], bt[i][2], bt[i][3]);
        }
    }
}

var blocktell = function (color) {
    for (i = 0; i < bt2.length; i++) {
        var imgcolor = ctx.getImageData(bt2[i][0], bt2[i][1], 2, 2); 
        console.log(imgcolor);
        var btc = imgcolor.data[0];
        var btc2 = imgcolor.data[1];
        if (btc === 0 && btc2 > 0) {
            btcolor = "cyan"
        } else {
            btcolor = "white"
        }
        if (color === "red") {
            redclears.push([bt2[i][0], bt2[i][1], btcolor])
        } else if (color === "green") {
            greenclears.push([bt2[i][0], bt2[i][1], btcolor])
        } else if (color === "pink") {
            pinkclears.push([bt2[i][0], bt2[i][1], btcolor])
        }
    }
}

bt = backlist;
blocksplace("black", "background")
var clicking = function (event) {
    if (event.pageX > 0 && event.pageX < 1000) {
        ctx.fillStyle = "black";
        ctx.clearRect(450, 50, 50, 60)
        ctx.font = "15px Arial";
        ctx.fillText("x: " + (Math.floor((event.pageX - 8) / 20) * 20), 450, 70);
        ctx.fillText("y: " + (Math.floor((event.pageY - 8) / 20) * 20), 450, 90);
    }
}
$("body").click(clicking);



ctx.fillStyle = "black";
ctx.fillRect(0, 440, 700, 120);
ctx.fillStyle = "Blue";
ctx.fillRect(340, 500, 50, 30);
ctx.font = "25px Arial";
ctx.fillText("water on", 225, 520);
var colorblocks = [["crimson", 30], ["green", 120], ["pink", 210], ["orange", 300], ["darkblue", 390]];
var colorswitch = function (type, num) {
    if (type === "off") {
        ctx.fillStyle = colorblocks[num][0];
        ctx.fillRect(colorblocks[num][1], 450, 30, 30);
        ctx.fillStyle = "white";
        ctx.fillRect(colorblocks[num][1] + 5, 455, 20, 20);
        ctx.fillRect(colorblocks[num][1] + 30, 450, 30, 30);
        if (num === 0) {
            bt = redclears;
        } else if (num === 1) {
            bt = greenclears;
        } else if (num === 2) {
            bt = pinkclears;
        }
        blocksplace("clear", "no");
    } else if (type === "on") {
        ctx.fillStyle = colorblocks[num][0];
        ctx.fillRect(colorblocks[num][1] + 30, 450, 30, 30);
        ctx.fillStyle = "white";
        ctx.fillRect(colorblocks[num][1] + 5, 455, 20, 20);
        ctx.fillRect(colorblocks[num][1], 450, 30, 30);
        if (num === 0) {
            bt2 = redblocks;
            blocktell("crimson");
            bt = redblocks;
            blocksplace("crimson", "no");
        } else if (num === 1) {
            bt2 = greenblocks;
            blocktell("green");
            bt = greenblocks;
            blocksplace("green", "no");
        } else if (num === 2) {
            bt2 = pinkblocks;
            blocktell("pink");
            bt = pinkblocks;
            blocksplace("pink", "no");
        }
    }
}

var graylining = function(x, y) {
    ctx.fillStyle = "gray";
    ctx.fillRect(25 + x, 445 + y, 70, 5);
    ctx.fillRect(25 + x, 445 + y, 5, 40);
    ctx.fillRect(25 + x, 480 + y, 70, 5);
    ctx.fillRect(90 + x, 445 + y, 5, 40);
}
var blacklining = function(x, y) {
    ctx.fillStyle = "black";
    ctx.fillRect(25 + x, 445 + y, 70, 5);
    ctx.fillRect(25 + x, 445 + y, 5, 40);
    ctx.fillRect(25 + x, 480 + y, 70, 5);
    ctx.fillRect(90 + x, 445 + y, 5, 40);
}
colorswitch("off", 0);
colorswitch("off", 1);
colorswitch("off", 2);
graylining(0, 0);


// waterthing[i][0] = waterx
// waterthing[i][1] = watery
// waterthing[i][2] = leftrepeat
// waterthing[i][3] = wateron
var waterupdate = function (update) {
    waterthing.push([0,0,0,0,0])
}
var wateron = function (functionx, functiony) {
    var imgData = ctx.getImageData(functionx, functiony, 20, 20); 
    downtest = imgData.data[3];
    var imgData2 = ctx.getImageData(functionx + 20, functiony - 20, 20, 20); 
    righttest = imgData2.data[3];
    var imgData3 = ctx.getImageData(functionx - 20, functiony - 20, 20, 20); 
    lefttest = imgData3.data[3];
    if (downtest === 0) {
        ctx.fillStyle = "cyan";
        ctx.fillRect(functionx, functiony, 20, 20);
        waterblock1y = waterblock1y + 20;
    } else if (righttest === 0) {
        var imgData4 = ctx.getImageData(functionx + 20, functiony - 20, 20, 20); 
        rightsidetest = imgData4.data[2];
        if (rightsidetest === 0) {
            ctx.fillStyle = "cyan";
            ctx.fillRect(functionx + 20, functiony - 20, 20, 20);
            waterblock1x = waterblock1x + 20;
            if (waterthing[0][3] === 0 && lefttest === 0) {
                waterupdate(0);
                waterthing[0][0] = functionx - 20;
                waterthing[0][1] = functiony - 20;
                totalwaters++;
                waterthing[0][3] = 1;
            } else if (lefttest === 0) {
                endvar2 = 0;
                waterupdate();
                for (j = 0; endvar2 === 0; j++) {
                    if (waterthing[j][3] === 0) {
                        waterthing[j][0] = functionx - 20;
                        waterthing[j][1] = functiony - 20;
                        waterthing[j][3] = 1;
                        totalwaters++;
                        endvar2 = 1;
                    }
                }
            }
        }
    } else if (lefttest === 0) {
        ctx.fillStyle = "cyan";
        ctx.fillRect(functionx - 20, functiony - 20, 20, 20);
        waterblock1x = waterblock1x - 20;
    }
}


var wateron2 = function (i, functionx, functiony) {
    var imgData2 = ctx.getImageData(functionx, functiony, 20, 20); 
    downtest = imgData2.data[3];
    var imgData22 = ctx.getImageData(functionx + 20, functiony - 20, 20, 20); 
    righttest = imgData22.data[3];
    var imgData23 = ctx.getImageData(functionx - 20, functiony - 20, 20, 20); 
    lefttest = imgData23.data[3];
    if (downtest === 0) {
        ctx.fillStyle = "cyan";
        ctx.fillRect(functionx, functiony, 20, 20);
        waterthing[i][1] += 20;
        waterthing[i][2] = 1;
    } else if (righttest === 0) {
        var imgData24 = ctx.getImageData(functionx + 20, functiony - 20, 20, 20); 
        rightsidetest = imgData24.data[2];
        if (rightsidetest === 0) {
            ctx.fillStyle = "cyan";
            ctx.fillRect(functionx + 20, functiony - 20, 20, 20);
            waterthing[i][0] += 20;
            waterthing[i][2] = 1;
        }
    }
    if (lefttest === 0 && downtest === 255) {
        var imgData24 = ctx.getImageData(functionx - 20, functiony - 20, 20, 20); 
        leftsidetest = imgData24.data[2];
        var imgData242 = ctx.getImageData(functionx + 20, functiony - 20, 20, 20); 
        rightsidetest = imgData242.data[2];
        console.log(waterthing[i][4] === 0);
        if (rightsidetest === 0 || waterthing[i][2] === 0) {
            if (leftsidetest === 0) {
                ctx.fillStyle = "cyan";
                ctx.fillRect(functionx - 20, functiony - 20, 20, 20);
                waterthing[i][0] -= 20;
                waterthing[i][2] = 0;
            }
        }
    }
    var imgData24 = ctx.getImageData(functionx - 20, functiony - 20, 20, 20); 
    leftsidetest = imgData24.data[2];
    if (lefttest === 0 && waterthing[i][0] === (functionx + 20) && downtest === 255 && leftsidetest === 0  && functionx > 20) {
        console.log("here");
        endvar = 0;
        waterupdate();
        for (j = 0; endvar === 0; j++) {
            if (waterthing[i + j][3] === 0) {
                waterthing[i + j][0] = functionx - 20;
                waterthing[i + j][1] = functiony - 20;
                waterthing[i + j][3] = 1;
                totalwaters++;
                endvar = 1;
            }
        }
    }
    waterthing[i][2] = 0;
}
var resetwater = function () {
    clearInterval(y);
    ctx.clearRect(20, 0, width - 40, height - 160);
    area();
    bt = backlist;
    blocksplace("black", "background")
    if (redoning === 1) {
        colorswitch("on", 0)
    }
    if (greenoning === 1) {
        colorswitch("on", 1)
    }
    if (pinkoning === 1) {
        colorswitch("on", 2)
    }
    keystopper = 1;
    setTimeout(() => {  y = setInterval(waterstart, 600); }, 100);
    setTimeout(() => { keystopper = 0; }, 1000);
}
var goalcomplete = function () {
    clearInterval(y);
    keystopper = 1;
    entertype = "screen";
    game = "goalscene";
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0, 0, width - 30, 300)
    ctx.fillStyle = "black";
    ctx.fillText("Goal " + (stage + 1) + " Complete", 300, 150);
    ctx.fillText("Press (enter) to coutinue", 300, 260);
}
var blocksearch = function () {
    var imgData2 = ctx.getImageData(120, 360, 20, 20); 
    block1 = imgData2.data[3];
    var imgData3 = ctx.getImageData(240, 360, 20, 20); 
    block2 = imgData3.data[3];
    var imgData4 = ctx.getImageData(440, 360, 20, 20); 
    block3 = imgData4.data[3];
    var imgData5 = ctx.getImageData(560, 360, 20, 20); 
    block4 = imgData5.data[3];

    if (block1 === 255) {
        ctx.fillStyle = "MediumTurquoise";
        ctx.fillRect(124, 384, 12, 12);
    }
    if (block2 === 255) {
        ctx.fillStyle = "MediumTurquoise";
        ctx.fillRect(244, 384, 12, 12);
    }
    if (block3 === 255) {
        ctx.fillStyle = "MediumTurquoise";
        ctx.fillRect(444, 384, 12, 12);
    }
    if (block4 === 255) {
        ctx.fillStyle = "MediumTurquoise";
        ctx.fillRect(564, 384, 12, 12);
    }
    if (block1 === 255 && block2 === 0 && block3 === 0 && stage === 0) {
        stage += 1;
        goalcomplete();
        blocktype = ["red", "gold", "red", "red"];
    } else if (block1 === 0 && block2 === 255 && block3 === 0 && stage === 1) {
        stage += 1;
        goalcomplete();
        blocktype = ["red", "red", "gold", "red"];
    } else if (block1 === 0 && block2 === 0 && block3 === 255 && stage === 2) {
        stage += 1;
        game = "over";
        clearInterval(y);
        ctx.fillStyle = "lightgrey";
        ctx.fillRect(0, 0, width - 30, 300)
        ctx.fillStyle = "black";
        ctx.fillText("Level Complete", 300, 150);
    }
} 
var Ball = function () {
};
Ball.prototype.moving = function (guess) {
    if (guess === "right") {
        if (numforcolor === 1) {
            blacklining(0, 0);
            graylining(90, 0);
            coloring = "green";
            numforcolor = 2;
        } else if (numforcolor === 2) {
            blacklining(90, 0);
            graylining(180, 0);
            coloring = "pink";
            numforcolor = 3;
        } else if (numforcolor === 3) {
            blacklining(180, 0);
            graylining(0, 0);
            coloring = "red";
            numforcolor = 1;
        }
    } else if (guess === "left") {
        if (numforcolor === 3) {
            blacklining(180, 0);
            graylining(90, 0);
            coloring = "green";
            numforcolor = 2;
        } else if (numforcolor === 2) {
            blacklining(90, 0);
            graylining(0, 0);
            coloring = "red";
            numforcolor = 1;
        } else if (numforcolor === 1) {
            blacklining(0, 0);
            graylining(180, 0);
            coloring = "pink";
            numforcolor = 3;
        }

    } else if (guess === "enter") {
        if (entertype === "game") {
            if (coloring === "red") {
                if (redoning === 0) {
                    redoning = 1;
                    colorswitch("on", 0)
                } else {
                    redoning = 0;
                    colorswitch("off", 0)
                }
            } else if (coloring === "green") {
                if (greenoning === 0) {
                    greenoning = 1;
                    colorswitch("on", 1)
                } else {
                    greenoning = 0;
                    colorswitch("off", 1)
                }
            } else if (coloring === "pink") {
                if (pinkoning === 0) {
                    pinkoning = 1;
                    colorswitch("on", 2)
                } else {
                    pinkoning = 0;
                    colorswitch("off", 2)
                }
            }
        } else if (entertype === "screen") {
            if (game === "goalscene") {
                resetwater();
                entertype = "game";
            }
        }
    } else if (guess === "n") {
        clearInterval(y);
    } else if (guess === "w") {
        if (keystopper === 0) {
            resetwater();
        }
    }
}
var keyNames = {
38: "up",
39: "right",
37: "left",
40: "down",
82: "r",
83: "s",
13: "enter",
78: "n",
87: "w"
};

var ball = new Ball();
$("body").keydown(function (event) {
    var whatletteris = keyNames[event.keyCode];
    console.log(whatletteris);
    ball.moving(whatletteris);
});

var waterstart = function () {
    for (k = 0; k < totalwaters; k++) {
        if (k === 0) {
            wateron(waterblock1x, waterblock1y);
        } else {
            if (waterthing[k - 1][3] === 1) {
                wateron2((k - 1), waterthing[k - 1][0], waterthing[k - 1][1]);
            }
        }
    }
    blocksearch();
}

var y = setInterval(waterstart, 600);
entertype = "game";

