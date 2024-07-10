let playerState = "idle";
let dropdown = document.getElementById("animantions")
dropdown.addEventListener('change' ,  function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const spiriteWidth =  575;
const spiriteHeight = 523;



let gameFrame = 0;
const staggerFrames = 3;
const spiriteAnimation = [];
const animationStates = [
    {
        name:'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames: 7,
    },
    {
        name:'fall',
        frames: 7,
    },
    {
        name:'run',
        frames: 9,
    },
    {
        name:'dizzy',
        frames: 11,
    },
    {
        name:'sit',
        frames: 5,
    },
    {
        name:'roll',
        frames: 7,
    },
    {
        name:'bite',
        frames: 7,
    },
    {
        name:'ko',
        frames: 12,
    },
    {
        name:'gethit',
        frames: 4,
    },
    
    
    
];
animationStates.forEach((state, index) => {
    let frames = {
        loc:[],
    }
    for (let j = 0 ; j < state.frames; j++){
        let positionX = j * spiriteWidth;
        let positionY = index * spiriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    }
    spiriteAnimation[state.name] = frames;
    
});
console.log(spiriteAnimation);


function animate(){
    ctx.clearRect(0, 0 , CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spiriteAnimation[playerState].loc.length;
    let  frameX = spiriteWidth * position;
    let frameY = spiriteAnimation[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX , frameY  ,spiriteWidth,spiriteHeight, 0, 0,spiriteWidth,spiriteHeight);

    
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
