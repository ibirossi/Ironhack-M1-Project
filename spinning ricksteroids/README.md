# Ross' Other Amazing Game

## Description
In the Other Amazing Game the player will be flying a spaceship through an asteroid field, and will need to avoid collisions with the asteroids. The player will be able to move vertically, and the game will end if the player collides with an asteroid. The score will be based on how many asteroids are avoided. 



## MVP (DOM - CANVAS)
Asteroids of random sizes will appear randomly from the right of the screen.  



## Backlog
- with increasing score, the game will increase speed and number of asteroids.
- the ship will be animated based on the direction the player inputs. 
- background music
-  continous sound effects e.g music and engine sound.
- event sound effects e.g collision, shield, weapons. 
- the asteroids will rotate.
- instead of one collision ending the game, the player will start the game with a set amount of shield strength. 
- the player will be able to pick up extra shield points placed randomly in space and time. 
- the player will be able to pick up special "weapons" 
- there will be a highscore list.



## Data Structure

# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# ship.js 

- Ship () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollision () {}

# asteroid.js 

- Asteroid (){
    this.x; 
    this.y; 
    this.size;
}





## States and States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- ship - draw
- ship - move
- asteroid - draw
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

### Trello
https://trello.com/b/ffyFlLVu/ironhack-m1-project

### Git
https://github.com/ibirossi/Ironhack-M1-Project.git


### Slides
