/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numbersOfEnemies = 26;
const enemiesArray =[];

let gameFrame = 0;




class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = "enemy3.png";
        this.spirtWidth = 218;
        this.spirtHeight = 177;
        this.width = this.spirtWidth / 2;
        this.height = this.spirtHeight / 2;
        this.x =  Math.random() * (canvas.width - this.width);
        this.y =  Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.speed = Math.random() * 4 + 1;// create range of 4 and start with -2 
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0; 
        this.angleSpeed = Math.random() * 2 + 0.7;
        this.curve = Math.random() * 200  +50;
    }
    update(){
        this.x = this.curve * Math.sin(this.angle * Math.PI/720) + (canvas.width/2- this.width / 2);
        this.y = this.curve * Math.cos(this.angle * Math.PI/180) + (canvas.height/2- this.height / 2);
        this.angle += this.angleSpeed;
        if(this.x + this.width < 0) this.x = canvas.width;
        // animate spirite
        if(gameFrame % 2 === 0 ){
            this.frame  > 4 ? this.frame = 0 : this.frame++;
        } 
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spirtWidth, 0, this.spirtWidth, this.spirtHeight,
            this.x , this.y, this.width ,this.height);
    }
}

for(let i = 0; i < numbersOfEnemies ; i ++){
    enemiesArray.push(new Enemy());
}


function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);

}
animate();