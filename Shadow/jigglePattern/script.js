/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numbersOfEnemies = 100;
const enemiesArray =[];

let gameFrame = 0;




class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = "enemy1.png";
        this.spirtWidth = 293;
        this.spirtHeight = 155;
        this.width = this.spirtWidth / 2.5;
        this.height = this.spirtHeight / 2.5;
        this.x =  Math.random() * (canvas.width - this.width);
        this.y =  Math.random() * (canvas.height - this.height);
        this.frame = 0;
        // this.speed = Math.random() * 4 - 2;// create range of 4 and start with -2 
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        

    }
    update(){
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
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