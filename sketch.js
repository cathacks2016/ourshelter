var nut_btn_enabled = false;
var wut_btn_enabled = false;
var but_btn_enabled = false;
var happy_cat_count = 0;
function setup() {
        var memes = createCanvas(screen.width, screen.height);
        cats = [];
        kittylist = [
        loadImage("http://i.imgur.com/Xz175nJ.png"), // Siamese Normal
        loadImage("http://i.imgur.com/dBk1xGt.png"), // Orange Normal
        loadImage("http://i.imgur.com/avaVhgp.png"), // Gray Normal
        loadImage("http://i.imgur.com/KaU5QIi.png"), // Blue Normal
        loadImage("http://i.imgur.com/WqVeYbB.png"), // Siamese Scared
        loadImage("http://i.imgur.com/xvhaGhV.png"), // Orange Scared
        loadImage("http://i.imgur.com/92g39UK.png"), // Gray Scared
        loadImage("http://i.imgur.com/DyUcCGI.png"), // Blue Scared
        loadImage("http://i.imgur.com/B5BUdE7.png"), // Siamese Fast
        loadImage("http://i.imgur.com/EMagNmU.png"), // Orange Fast
        loadImage("http://i.imgur.com/vb6RIK1.png"), // Gray Fast
        loadImage("http://i.imgur.com/XoZF8hX.png"), // Blue Fast
        loadImage("http://i.imgur.com/SakHDV9.png"), // Siamese Yawn
        loadImage("http://i.imgur.com/Kx3e8uD.png"), // Orange Yawn
        loadImage("http://i.imgur.com/XEPYrfg.png"), // Gray Yawn
        loadImage("http://i.imgur.com/dEQqKdM.png"), // Blue Yawn
        loadImage("http://i.imgur.com/OUaaX4k.png"), // Blue Dead
        // REVERSE
        loadImage("http://i.imgur.com/FB9t3MF.png"), // Siamese Normal
        loadImage("http://i.imgur.com/lg4LR6s.png"), // Orange Normal
        loadImage("http://i.imgur.com/xVZPo5E.png"), // Gray Normal
        loadImage("http://i.imgur.com/3uyoZVE.png"), // Blue Normal
        loadImage("http://i.imgur.com/WqVeYbB.png"), // Siamese Scared
        loadImage("http://i.imgur.com/H1qpKrk.png"), // Orange Scared
        loadImage("http://i.imgur.com/fB4RBha.png"), // Gray Scared
        loadImage("http://i.imgur.com/4a0N0ir.png"), // Blue Scared
        loadImage("http://i.imgur.com/rHBEnUa.png"), // Siamese Fast
        loadImage("http://i.imgur.com/omL1zUR.png"), // Orange Fast
        loadImage("http://i.imgur.com/NoH4Egb.png"), // Gray Fast
        loadImage("http://i.imgur.com/ErHM7VY.png"), // Blue Fast
        loadImage("http://i.imgur.com/pwLc6Qy.png"), // Siamese Yawn
        loadImage("http://i.imgur.com/r4eYAVO.png"), // Orange Yawn
        loadImage("http://i.imgur.com/9KYnQPv.png"), // Gray Yawn
        loadImage("http://i.imgur.com/1tXas8y.png"), // Blue Yawn
        loadImage("http://i.imgur.com/OUaaX4k.png"), // Blue Dead
        ]
        kitty = 0
        for (var i = 0; i < 10; i++){

            var flipper = random(0,10);
            if (flipper >= 5 && kitty <16) {
                kitty += 17;
            }

            if (kitty <= 3) { // normal
                xcorrection = .65;
                ycorrection = .5;
                speedcorrection = 1;
            }
            else if (kitty <= 7) { // scared
                xcorrection = .4;
                ycorrection = .75;
                speedcorrection = 1;
            }
            else if (kitty <= 11) { // fast
                xcorrection = .65;
                ycorrection = .4;
                speedcorrection = 3;
            }
            else if (kitty <= 15) { // yawn
                xcorrection = .65;
                ycorrection = .6;
                speedcorrection = 1;
            }
            else if (kitty <= 16) { // dead
                xcorrection = 0;
                ycorrection = 0;
                speedcorrection = 0;
            }

            else if (kitty <= 20) { // normal reversed
                xcorrection = .35;
                ycorrection = .5;
                speedcorrection = -1;
            }
            else if (kitty <= 24) { // scared reversed
                xcorrection = .5;
                ycorrection = .7;
                speedcorrection = -1;
            }
            else if (kitty <= 28) { // fast reversed
                xcorrection = .35;
                ycorrection = .6;
                speedcorrection = -3;
            }
            else if (kitty <= 32) { // yawn reversed
                xcorrection = .35;
                ycorrection = .4;
                speedcorrection = -1;
            }
            else { // dead reversed
                xcorrection = 0;
                ycorrection = 0;
                speedcorrection = 0;
            }
            cats.push(new Cat(kitty, xcorrection, ycorrection, speedcorrection));
            kitty += 1
            if (flipper >= 5) {
                kitty -= 17;
            }
            if (kitty > kittylist.length -1) {
                kitty = 0
            }
        }
        bg1 = loadImage("http://i.imgur.com/dBO8uMe.jpg?1");
        bg2 = loadImage("http://i.imgur.com/iqS4qZV.png)");
        bg3 = loadImage("http://i.imgur.com/8cwNwDt.png");
        bg4 = loadImage("http://i.imgur.com/lB9vxuh.png");
    }
    function draw() {
      if (nut_btn_enabled == false && wut_btn_enabled == false && but_btn_enabled == false) {
        bg = bg1;
      }
      else if (nut_btn_enabled == true){
        bg = bg2;
      }
      else if (wut_btn_enabled == true){
        bg = bg3;
      }
      else if (but_btn_enabled == true){
        bg = bg4;
      }
        background(bg);
        for (var i = 0; i < cats.length; i++) {
            cats[i].move();
            cats[i].display();
            cats[i].mousetest();
            cats[i].updatecount();
        }
    }
    function Cat(kitty, xcorrection, ycorrection, speedcorrection) {
        this.x = random(0, screen.width);
        this.y = random(0, screen.height *.7);
        this.speed = random(0.5, 2.3) * speedcorrection;
        mouseflag = 0
        this.move = function() {
            this.x += this.speed;
            if (this.x >= screen.width) {
                this.x = -screen.width/2;
            }
            else if (this.x < -screen.width/2) {
                this.x = 1.5 * screen.width;
            }
        };
         this.move = function() {
            this.x += this.speed;
            if (this.x >= screen.width) {
                this.x = -screen.width/3;
            }
            else if (this.x < -screen.width/2) {
                this.x = screen.width;
            }
        };
        this.display = function(){
            image(kittylist[kitty], this.x, this.y);
        };
                this.mousetest = function() {
            if (
                mouseX <= this.x + xcorrection * kittylist[kitty].width + 50
                && mouseX >= this.x + xcorrection * kittylist[kitty].width - 50
                && mouseY <= this.y + ycorrection * kittylist[kitty].height + 80
                && mouseY >= this.y + ycorrection * kittylist[kitty].height- 80) {
                cursor(HAND);
                if (this.mouseflag <= 50) {
                    this.x -= this.speed;
                    for (var i = 0; i<100; i++) {
                        this.y += random(-.5, .5);
                    }
                this.mouseflag += 1
                }
                if (this.mouseflag == 20) {
                    happy_cat_count += 1;
                }
            }
            else {
                this.mouseflag = 0;
                cursor(ARROW);
            }

        };
        this.updatecount = function() {
         document.getElementById('counter').innerHTML = happy_cat_count;
        };
    }
//background changes
    function CBI(){
      nut_btn_enabled = !(nut_btn_enabled);
    }
    function CBIW(){
      wut_btn_enabled = !(wut_btn_enabled);
    }
    function CBIB(){
      but_btn_enabled = !(but_btn_enabled);
    }
