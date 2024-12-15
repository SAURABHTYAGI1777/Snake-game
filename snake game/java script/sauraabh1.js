// // Game constants & variables
// let inputDir ={ x:0, y:0};
// let speed = 10;
// let score = 0
// let lastpaintTime = 0;
// let snakeArr = [
//     {x: 13, y: 15}
// ]
// food ={x:9, y:10};
// //game functions
// function main(ctime){
// window,requestAnimationFrame(main);
// // console.log (ctime)
// if((ctime - lastpaintTime)/1000 < 1/speed){
// return;
// }
// lastpaintTime = ctime;
// gameEngine();

// }
// function isCollide(snakeArr){
//     return false;
// }
// function gameEngine(){
//     //part 1: updating the snake array & food
//         if(isCollide(snakeArr)){
//             inputDir = {x: 0 , y: 0}
//             alert("Game over . press any key to play again")
//              snakeArr =[  {x:13,y:15}];
//              score = 0; 
//         }
//     //if you have eaten the food , increment the score and regenereate the food

//     if(snakeArr[0].y ===food.y  && snakeArr[0].x ===food.x){
//         snakeArr.unshift({x: snakeArr[0].x+inputDir.x , y:snakeArr[0].y+inputDir.y})
//         let a = 4;
//         let b = 8;
//         food = {x: math.round(a + (b-a)* math.random()) , y: math.round(a + (b-a)* math.random())}
//     }
//     //moving the snake
    
//     for (let i = snakeArr.length -2 ; i >=0; i --) {
//         snakeArr[i+1] = {...snakeArr[i]};
//     }
//         snakeArr[0].x += inputDir.x;
//         snakeArr[0].y += inputDir.y;

// //part 2: render  the snake and food
// //display the snake
// board.innerHTML ="";
// snakeArr.forEach ((e,index )=> {
//     snakeElement =document.createElement('div');
//     snakeElement.style.gridRowsStart = e.y;
//     snakeElement.style.gridColumsnStart  = e.x;
    
//     if(index ===0){
//         snakeElement.classList.add('head');
//     }

//     else{
//     snakeElement.classlist.add('snake');
//     }
//     board.appendChild(snakeElement);


// }) 

// //display the food
// foodElement =document.createElement('div');
// foodElement.style.gridRowsStart = food.y;
// foodElement.style.gridColumsnStart = food.x;
// foodElement.classList.add('food');
// board.appendChild(foodElement);

// }
// //main logic starts here
// window.requestAnimationFrame(main);
// window.addEventListener('keydown', e =>{
//     inputDir ={x: 0,y: 1} //start the game
//     switch (e.key) {
//         case "ArrowUp":
//             console.log("ArrowUp")
//             inputDir.x = 0;
//             inputDir.y = -1;
//             break;
//          case "ArrowDown":
//             console.log("ArrowDown")
//             inputDir.x = 0;
//             inputDir.y = 1;
//             break;
//          case "ArrowLeft":
//             console.log("ArrowLeft")
//             inputDir.x = -1;
//             inputDir.y = 0;
//             break;
//          case "ArrowRight":
//             console.log("ArrowRight")
//             inputDir.x = 1;
//             inputDir.y = 0;
//             break;
        
//         default:
//             break;
//     }

// });

// let inputDir = { x: 0, y: 0 }; // साँप की प्रारंभिक दिशा
// let foodSound = new Audio('food.mp3');  // sound
// let gameOverSound = new Audio('gameover.mp3');
// let moveSound = new Audio('move.mp3');
// let musicSound = new Audio('music.mp3');
// let speed = 2.5; // गेम की स्पीड
// let score = 0; // स्कोर
// let lastPaintTime = 0; // आखिरी बार स्क्रीन रेंडर हुई थी
// let snakeArr = [{ x: 13, y: 15 }]; // साँप का प्रारंभिक स्थान
// let food = { x: 9, y: 10 }; // भोजन की प्रारंभिक पोजीशन
// //music loop
// musicSound.play();
// musicSound.loop = true; 
// const board = document.getElementById('board'); // HTML में बोर्ड का एलिमेंट

// // **गेम का मुख्य लूप (Main Loop)**
// function main(ctime) {
//     window.requestAnimationFrame(main); // लूप चलाते रहना

//     if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
//         return; // फ्रेम अपडेट करने का समय नहीं आया
//     }
//     lastPaintTime = ctime;
//     gameEngine(); // गेम का मुख्य इंजन चलाएं
// }

// // **टकराने की जाँच (Collision Detection)**
// function isCollide(snakeArr) {
//     // अपने आप से टकराने की जाँच
//     for (let i = 1; i < snakeArr.length; i++) {
//         if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
//             return true;
//         }
//     }
//     // दीवार से टकराने की जाँच
//     if (
//         snakeArr[0].x >= 18 || snakeArr[0].x <= 0 ||
//         snakeArr[0].y >= 18 || snakeArr[0].y <= 0
//     ) {
//         return true;
//     }
//     return false;
// }

// // **गेम इंजन**
// function gameEngine() {
//     // 1. साँप की टक्कर की जाँच
//     if (isCollide(snakeArr)) {
//         inputDir = { x: 0, y: 0 };
//         alert("Game Over! Press any key to play again.");
//         snakeArr = [{ x: 13, y: 15 }];
//         score = 0;
//     }

//     // 2. फूड खाने की स्थिति
//     if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
//         score += 1; // स्कोर बढ़ाएँ
//         snakeArr.unshift({
//             x: snakeArr[0].x + inputDir.x,
//             y: snakeArr[0].y + inputDir.y
//         });
//         let a = 1;
//         let b = 17;
//         food = {
//             x: Math.round(a + (b - a) * Math.random()),
//             y: Math.round(a + (b - a) * Math.random())
//         };
//     }

//     // 3. साँप को चलाना (Move the snake)
//     for (let i = snakeArr.length - 2; i >= 0; i--) {
//         snakeArr[i + 1] = { ...snakeArr[i] };
//     }
//     snakeArr[0].x += inputDir.x;
//     snakeArr[0].y += inputDir.y;

//     // 4. साँप और फूड को रेंडर करना
//     board.innerHTML = ""; // बोर्ड को साफ करना

//     // साँप को रेंडर करना
//     snakeArr.forEach((e, index) => {
//         let snakeElement = document.createElement('div');
//         snakeElement.style.gridRowStart = e.y;
//         snakeElement.style.gridColumnStart = e.x;

//         if (index === 0) {
//             snakeElement.classList.add('head'); // पहला हिस्सा सिर होगा
//         } else {
//             snakeElement.classList.add('snake');
//         }
//         board.appendChild(snakeElement);
//     });

//     // फूड को रेंडर करना
//     let foodElement = document.createElement('div');
//     foodElement.style.gridRowStart = food.y;
//     foodElement.style.gridColumnStart = food.x;
//     foodElement.classList.add('food');
//     board.appendChild(foodElement);
// }

// // **खेल शुरू करने के लिए मुख्य लॉजिक**
// window.requestAnimationFrame(main);

// window.addEventListener('keydown', e => {
//     inputDir = { x: 0, y: 1 }; // गेम शुरू करने के लिए दिशा

//     switch (e.key) {
//         case "ArrowUp":
//             console.log("ArrowUp");
//             inputDir.x = 0;
//             inputDir.y = -1;
//             break;

//         case "ArrowDown":
//             console.log("ArrowDown");
//             inputDir.x = 0;
//             inputDir.y = 1;
//             break;

//         case "ArrowLeft":
//             console.log("ArrowLeft");
//             inputDir.x = -1;
//             inputDir.y = 0;
//             break;

//         case "ArrowRight":
//             console.log("ArrowRight");
//             inputDir.x = 1;
//             inputDir.y = 0;
//             break;

//         default:
//             break;
//     }
// });

// let inputDir = { x: 0, y: 0 }; // direction
// let foodSound = new Audio('food.mp3');  // food sound
// let gameOverSound = new Audio('gameover.mp3');
// let moveSound = new Audio('move.mp3');
// let musicSound = new Audio('music.mp3');
// let speed = 2.5; // speed
// let score = 0; // score
// let lastPaintTime = 0; // आखिरी बार स्क्रीन रेंडर हुई थी
// let snakeArr = [{ x: 13, y: 15 }]; // snake start point
// let food = { x: 9, y: 10 }; // food pojision
// let musicPlayed = false; // music ak baar suru kerne ke liye

// const board = document.getElementById('board'); // HTML में बोर्ड का एलिमेंट

// // ** (Main Loop)**
// function main(ctime) {
//     window.requestAnimationFrame(main); // लूप चलाते रहना

//     if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
//         return; // फ्रेम अपडेट करने का समय नहीं आया
//     }
//     lastPaintTime = ctime;
//     gameEngine(); // गेम का मुख्य इंजन चलाएं
// }

// // **टकराने की जाँच (Collision Detection)**
// function isCollide(snakeArr) {
//     for (let i = 1; i < snakeArr.length; i++) {
//         if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
//             return true;
//         }
//     }
//     if (
//         snakeArr[0].x >= 18 || snakeArr[0].x <= 0 ||
//         snakeArr[0].y >= 18 || snakeArr[0].y <= 0
//     ) {
//         return true;
//     }
//     return false;
// }

// // **गेम इंजन**
// function gameEngine() {
//     // 1. साँप की टक्कर की जाँच
//     if (isCollide(snakeArr)) {
//         gameOverSound.play(); // गेम ओवर साउंड प्ले
//         musicSound.pause(); // म्यूजिक रोकें
//         inputDir = { x: 0, y: 0 };
//         alert("Game Over! Press any key to play again.");
//         snakeArr = [{ x: 13, y: 15 }];
//         score = 0;
//         setTimeout(() => musicSound.play(), 1000); // थोड़ी देर बाद म्यूजिक फिर से शुरू
//         return;
//     }


//     window.addEventListener('keydown', (e) => {
//         if (gameOver) {
//             document.getElementById("gameOverOverlay").style.display = "none"; // ओवरले छिपाएं
//             resetGame();
//         }
//         // अन्य दिशाओं को संभालने का लॉजिक
//     });
    

//     // 2. फूड खाने की स्थिति
//     if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
//         foodSound.play(); // food sound play
//         score += 1; // score
//         snakeArr.unshift({
//             x: snakeArr[0].x + inputDir.x,
//             y: snakeArr[0].y + inputDir.y
//         });
//         let a = 1;
//         let b = 17;
//         food = {
//             x: Math.round(a + (b - a) * Math.random()),
//             y: Math.round(a + (b - a) * Math.random())
//         };
//     }

//     // 3. (Move the snake)
//     for (let i = snakeArr.length - 2; i >= 0; i--) {
//         snakeArr[i + 1] = { ...snakeArr[i] };
//     }
//     snakeArr[0].x += inputDir.x;
//     snakeArr[0].y += inputDir.y;

//     // 4. साँप और फूड को रेंडर करना
//     board.innerHTML = ""; // बोर्ड को साफ करना

//     // साँप को रेंडर करना
//     snakeArr.forEach((e, index) => {
//         let snakeElement = document.createElement('div');
//         snakeElement.style.gridRowStart = e.y;
//         snakeElement.style.gridColumnStart = e.x;

//         if (index === 0) {
//             snakeElement.classList.add('head'); // पहला हिस्सा सिर होगा
//         } else {
//             snakeElement.classList.add('snake');
//         }
//         board.appendChild(snakeElement);
//     });

//     // फूड को रेंडर करना
//     let foodElement = document.createElement('div');
//     foodElement.style.gridRowStart = food.y;
//     foodElement.style.gridColumnStart = food.x;
//     foodElement.classList.add('food');
//     board.appendChild(foodElement);
// }

// // **खेल शुरू करने के लिए मुख्य लॉजिक**
// window.requestAnimationFrame(main);

// window.addEventListener('keydown', e => {
//     if (!musicPlayed) {
//         musicSound.play();
//         musicSound.loop = true;
//         musicPlayed = true; // म्यूजिक केवल एक बार प्ले हो
//     }

//     inputDir = { x: 0, y: 1 }; // गेम शुरू करने के लिए दिशा
//     moveSound.play(); // हर मूवमेंट पर मूव साउंड प्ले करें

//     switch (e.key) {
//         case "ArrowUp":
//             console.log("ArrowUp");
//             inputDir.x = 0;
//             inputDir.y = -1;
//             break;

//         case "ArrowDown":
//             console.log("ArrowDown");
//             inputDir.x = 0;
//             inputDir.y = 1;
//             break;

//         case "ArrowLeft":
//             console.log("ArrowLeft");
//             inputDir.x = -1;
//             inputDir.y = 0;
//             break;

//         case "ArrowRight":
//             console.log("ArrowRight");
//             inputDir.x = 1;
//             inputDir.y = 0;
//             break;

//         default:
//             break;
//     }
// });


//


// let inputDir = { x: 0, y: 0 };
// let foodSound = new Audio('food.mp3');
// let gameOverSound = new Audio('gameover.mp3');
// let moveSound = new Audio('move.mp3');
// let musicSound = new Audio('music.mp3');
// let speed = 2.5;
// let score = 0;
// let lastPaintTime = 0;
// let snakeArr = [{ x: 13, y: 15 }];
// let food = { x: 9, y: 10 };
// let musicPlayed = false;
// let gameOver = false;
// let isPaused = false;

// const board = document.getElementById('board');
// const gameOverOverlay = document.getElementById("gameOverOverlay");
// const scoreDisplay = document.getElementById("scoreDisplay");

// // Main game loop
// function main(ctime) {
//     window.requestAnimationFrame(main);
//     if ((ctime - lastPaintTime) / 1000 < 1 / speed || isPaused) return;
//     lastPaintTime = ctime;
//     gameEngine();
// }

// // Check for collision
// function isCollide(snakeArr) {
//     for (let i = 1; i < snakeArr.length; i++) {
//         if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) return true;
//     }
//     if (snakeArr[0].x >= 18 || snakeArr[0].x <= 0 || snakeArr[0].y >= 18 || snakeArr[0].y <= 0) return true;
//     return false;
// }

// // Generate new food
// function generateFood() {
//     let a = 1, b = 17;
//     let isOnSnake;
//     do {
//         isOnSnake = false;
//         food = {
//             x: Math.round(a + (b - a) * Math.random()),
//             y: Math.round(a + (b - a) * Math.random())
//         };
//         snakeArr.forEach(part => {
//             if (part.x === food.x && part.y === food.y) {
//                 isOnSnake = true;
//             }
//         });
//     } while (isOnSnake);
// }

// // Reset the game
// function resetGame() {
//     gameOver = false;
//     snakeArr = [{ x: 13, y: 15 }];
//     inputDir = { x: 0, y: 0 };
//     score = 0;
//     speed = 2.5; // Reset speed
//     scoreDisplay.innerHTML = "Score: " + score;
//     musicSound.play();
//     gameOverOverlay.style.display = "none";
// }

// // Main game engine
// function gameEngine() {
//     if (isCollide(snakeArr)) {
//         gameOverSound.play();
//         musicSound.pause();
//         inputDir = { x: 0, y: 0 };
//         gameOver = true;
//         gameOverOverlay.style.display = "flex";
//         return;
//     }

//     if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
//         foodSound.play();
//         score += 1;
//         speed += 0.1; // Increment speed for difficulty
//         scoreDisplay.innerHTML = "Score: " + score;
//         snakeArr.unshift({
//             x: snakeArr[0].x + inputDir.x,
//             y: snakeArr[0].y + inputDir.y
//         });
//         generateFood();
//     }

//     for (let i = snakeArr.length - 2; i >= 0; i--) {
//         snakeArr[i + 1] = { ...snakeArr[i] };
//     }
//     snakeArr[0].x += inputDir.x;
//     snakeArr[0].y += inputDir.y;

//     board.innerHTML = "";
//     snakeArr.forEach((e, index) => {
//         let snakeElement = document.createElement('div');
//         snakeElement.style.gridRowStart = e.y;
//         snakeElement.style.gridColumnStart = e.x;
//         snakeElement.classList.add(index === 0 ? 'head' : 'snake');
//         board.appendChild(snakeElement);
//     });

//     let foodElement = document.createElement('div');
//     foodElement.style.gridRowStart = food.y;
//     foodElement.style.gridColumnStart = food.x;
//     foodElement.classList.add('food');
//     board.appendChild(foodElement);
// }

// // Start the game loop
// window.requestAnimationFrame(main);

// // Handle keyboard input
// window.addEventListener('keydown', e => {
//     if (gameOver) {
//         resetGame();
//     } else if (e.key === " ") { // Pause the game with the spacebar
//         isPaused = !isPaused;
//         inputDir = isPaused ? { x: 0, y: 0 } : inputDir;
//         if (!isPaused) musicSound.play();
//         else musicSound.pause();
//     } else if (!isPaused) {
//         if (!musicPlayed) {
//             musicSound.play();
//             musicSound.loop = true;
//             musicPlayed = true;
//         }
//         moveSound.play();
//         switch (e.key) {
//             case "ArrowUp": if (inputDir.y !== 1) inputDir = { x: 0, y: -1 }; break;
//             case "ArrowDown": if (inputDir.y !== -1) inputDir = { x: 0, y: 1 }; break;
//             case "ArrowLeft": if (inputDir.x !== 1) inputDir = { x: -1, y: 0 }; break;
//             case "ArrowRight": if (inputDir.x !== -1) inputDir = { x: 1, y: 0 }; break;
//         }
//     }
// });



let inputDir = { x: 0, y: 0 };
let foodSound = new Audio('food.mp3');
let gameOverSound = new Audio('gameover.mp3');
let moveSound = new Audio('move.mp3');
let musicSound = new Audio('music.mp3');
let speed = 2.5;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 9, y: 10 };
let gameOver = false;
let isPaused = false;

const board = document.getElementById('board');
const gameOverOverlay = document.getElementById('gameOverOverlay');
const scoreDisplay = document.getElementById('scoreDisplay');

// Main game loop
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed || isPaused) return;
    lastPaintTime = ctime;
    gameEngine();
}

// Check for collision
function isCollide(snakeArr) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) return true;
    }
    if (snakeArr[0].x >= 18 || snakeArr[0].x <= 0 || snakeArr[0].y >= 18 || snakeArr[0].y <= 0) return true;
    return false;
}

// Generate new food
function generateFood() {
    let a = 1, b = 17;
    let isOnSnake;
    do {
        isOnSnake = false;
        food = {
            x: Math.round(a + (b - a) * Math.random()),
            y: Math.round(a + (b - a) * Math.random())
        };
        snakeArr.forEach(part => {
            if (part.x === food.x && part.y === food.y) isOnSnake = true;
        });
    } while (isOnSnake);
}

// Reset the game
function resetGame() {
    gameOver = false;
    snakeArr = [{ x: 13, y: 15 }];
    inputDir = { x: 0, y: 0 };
    score = 0;
    speed = 2.5;
    scoreDisplay.innerHTML = "Score: 0";
    musicSound.play();
    gameOverOverlay.style.display = "none";
    gameOverOverlay.classList.remove("show"); // Hide the overlay
}

// Main game engine
function gameEngine() {
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        gameOver = true;
        
        gameOverOverlay.style.display = "flex";  //show the game over overlay
        gameOverOverlay.classList.add("show"); // Add show class for animation
        
        

        return;
    }

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score += 1;
        speed += 0.1;
        scoreDisplay.innerHTML = `Score: ${score}`;
        snakeArr.unshift({
            x: snakeArr[0].x + inputDir.x,
            y: snakeArr[0].y + inputDir.y
        });
        generateFood();
    }

    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add(index === 0 ? 'head' : 'snake');
        board.appendChild(snakeElement);
    });

    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

// Start the game loop
window.requestAnimationFrame(main);

// Handle keyboard input
window.addEventListener('keydown', e => {
    if (gameOver) {
        resetGame();
    } else if (e.key === " ") {
        isPaused = !isPaused;
        if (!isPaused) musicSound.play();
        else musicSound.pause();
    } else if (e.key === "ArrowUp" && inputDir.y !== 1) {
        inputDir = { x: 0, y: -1 };
        moveSound.play();
    } else if (e.key === "ArrowDown" && inputDir.y !== -1) {
        inputDir = { x: 0, y: 1 };
        moveSound.play();
    } else if (e.key === "ArrowLeft" && inputDir.x !== 1) {
        inputDir = { x: -1, y: 0 };
        moveSound.play();
    } else if (e.key === "ArrowRight" && inputDir.x !== -1) {
        inputDir = { x: 1, y: 0 };
        moveSound.play();
    }
});


