

import { useEffect, useRef, useState } from "react";
import backgroundImg from "/game1background_image2.jpg";
import spaceshipImg from "/game1spaceship.png";
import bulletImg from "/game1bullet.png";
import redenemy from "/game1red_enemy.png";
import redenemy2 from "/game1red_enemy2.png";
import blueenemy from "/game1blue_enemy.png";
import blueenemy2 from "/game1blue_enemy2.png";
import enemybullet from "/game1enemy_bullet.png"

export default function Portfolio7Page() {

    let width = 300;
    let height = 400;
    if (window.innerWidth < 740) {
        width = 300;
        height = 400;
    }
    else {
        width = 500;
        height = 695;
    }
    const canvasRef = useRef(null);
    const keys = { up: { pressed: false }, left: { pressed: false }, down: { pressed: false }, right: { pressed: false }, Space: { pressed: false } };
    const spaceshipWidth = 75;
    const spaceshipHeight = 75;
    const globalCooldown = 5;
    let maxEnemyXPosition = 300;
    let level = 0
    let score = 0
    let lives = 5
    const [levelDisplay, setLevel] = useState(0);
    const [scoreDisplay, setScore] = useState(0);
    const [livesDisplay, setLives] = useState(5);
    let enemies = [redenemy, redenemy2, blueenemy, blueenemy2];
    let wave = [];
    let waveSize = 0;

    function isColliding({ rectangle1, rectangle2 }) {
        return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
            rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
            rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
            rectangle1.position.y + rectangle1.height >= rectangle2.position.y);
    } // end function isColliding

    useEffect(() => {
        console.log("key change detected")
    }, [keys])

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = width
        canvas.height = height
        const context = canvas.getContext('2d');

        class Sprite {
            constructor({ position, imageSrc }) {
                this.position = position;
                this.image = new Image();
                this.image.src = imageSrc;
            }
            draw() {
                context.drawImage(
                    this.image,
                    this.position.x,
                    this.position.y
                )
            }
        } // end class Sprite

        class Ship {
            constructor({ position, health = 100 }) {
                this.position = position;
                this.shipImg = new Image();
                this.laserImg = new Image();
                this.health = health;
                this.lasers = [];
                this.height = spaceshipHeight;
                this.width = spaceshipWidth;
            }
            shoot() {
                this.cooldown();
                if (this.cooldownCounter == 0) {
                    const laser = {
                        position: {
                            x: this.position.x + this.width / 2 - this.width / 4,
                            y: this.position.y - this.height / 4
                        },
                        width: 30,
                        height: 45
                    }
                    this.lasers.push(laser);
                    this.cooldownCounter = 1;
                    // this.lasers.forEach(laser => {
                    //     wave.forEach(enemy => {
                    //         const enemyIndex = enemies.indexOf(enemy);
                    //         const laserIndex = this.lasers.indexOf(laser);
                    //         if (isColliding({ rectangle1: laser, rectangle2: enemy })) {
                    //             score += 1;
                    //             scoreDisplay.innerHTML = `<p>Score: ${score}</p>`;
                    //             wave.splice(enemyIndex, 1);
                    //             player.lasers.splice(laserIndex, 1);
                    //         }
                    //     });
                    // })
                }
            }
            draw() {
                context.drawImage(
                    this.shipImg,
                    this.position.x,
                    this.position.y,
                    this.width,
                    this.height
                )
            }
        } // end class Ship

        class Player extends Ship {
            constructor({ position, velocity, health = 100 }) {
                super({ position, health })
                this.shipImg = new Image();
                this.shipImg.src = spaceshipImg;
                this.velocity = velocity;
                this.laserImg = new Image();
                this.laserImg.src = bulletImg;
                this.lasers = [];
                this.cooldownCounter = 0;
            }
            cooldown() {
                if (this.cooldownCounter >= globalCooldown) {
                    this.cooldownCounter = 0;
                }
                else if (this.cooldownCounter > 0) {
                    this.cooldownCounter++;
                }
            }
            update() {
                this.draw();
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                for (let i = 0; i < this.lasers.length; ++i) {
                    const laser = this.lasers[i];
                    laser.position.y -= 8;
                    const laserIndex = this.lasers.indexOf(laser);
                    if (laser.position.y < 0) {
                        player.lasers.splice(laserIndex, 1);
                    }
                    context.drawImage(
                        this.laserImg,
                        laser.position.x,
                        laser.position.y,
                        laser.width,
                        laser.height
                    )
                } // end for
            }
        } // end class Player

        class Enemy extends Ship {
            constructor({ position, health = 100, imageSrc }) {
                super({ position, health })
                this.shipImg = new Image();
                this.shipImg.src = imageSrc;
            }
            update() {
                this.position.y++;
                this.draw();
            }
        } // end class Enemy

        const background = new Sprite({ position: { x: 0, y: 0 }, imageSrc: backgroundImg });
        const player = new Player({ position: { x: canvas.width / 2 - spaceshipWidth / 2, y: canvas.height / 2 }, velocity: { x: 0, y: 0 } });

        function animate() {
            const movementVelocity = 5;
            window.requestAnimationFrame(animate);
            if (lives < 0) {
                return;
            }
            background.draw();
            // if (wave.length == 0) {
            //     level += 1;
            //     waveSize += 5;
            //     setLives(lives);
            //     setLevel(level);
            //     for (let i = 0; i < waveSize; ++i) {
            //         let enemy = new Enemy({ imageSrc: enemies[Math.floor(Math.random() * enemies.length)], position: { x: Math.floor(Math.random() * (maxEnemyXPosition)) + 50, y: Math.floor(Math.random() * (-200)) + -50 } });
            //         wave.push(enemy);
            //     }
            // }
            // wave.forEach(enemy => {
            //     const enemyIndex = enemies.indexOf(enemy);
            //     if (isColliding({ rectangle1: player, rectangle2: enemy })) {
            //         lives -= 1;
            //         setLives(lives);
            //         wave.splice(enemyIndex, 1);
            //     }
            //     if (enemy.position.y > 695) {
            //         wave.splice(enemyIndex, 1);
            //     }
            //     enemy.update();
            // });
            player.update();
            player.velocity.x = 0;
            player.velocity.y = 0;
            // wave.forEach(enemy => {
            //     const enemyIndex = enemies.indexOf(enemy);
            //     player.lasers.forEach(laser => {
            //         const laserIndex = player.lasers.indexOf(laser);
            //         if (isColliding({ rectangle1: laser, rectangle2: enemy })) {
            //             score += 100;
            //             setScore(score);
            //             wave.splice(enemyIndex, 1);
            //             player.lasers.splice(laserIndex, 1);
            //         }
            //     })
            // });
            if (keys.up.pressed && player.position.y > 0) {
                player.velocity.y = -movementVelocity;
            }
            if (keys.left.pressed && player.position.x > 0) {
                player.velocity.x = -movementVelocity;
            }
            if (keys.down.pressed && player.position.y < canvas.height - player.height) {
                player.velocity.y = movementVelocity;
            }
            if (keys.right.pressed && player.position.x < canvas.width - player.width) {
                player.velocity.x = movementVelocity;
            }
            if (keys.Space.pressed) {
                player.shoot();
            }
            addEventListener('keydown', (event) => {
                switch (event.key) {
                    case 'w':
                        keys.up.pressed = true;
                        break;
                    case 'a':
                        keys.left.pressed = true;
                        break;
                    case 's':
                        keys.down.pressed = true;
                        break;
                    case 'd':
                        keys.right.pressed = true;
                        break;
                    case 'l':
                        keys.Space.pressed = true;
                        break;
                } // end switch
            }); // end event listener
            addEventListener('keyup', (event) => {
                switch (event.key) {
                    case 'w':
                        keys.up.pressed = false;
                        break;
                    case 'a':
                        keys.left.pressed = false;
                        break;
                    case 's':
                        keys.down.pressed = false;
                        break;
                    case 'd':
                        keys.right.pressed = false;
                        break;
                    case 'l':
                        keys.Space.pressed = false;
                        break;
                }
            }) // end event listener
        }
        animate()
    }, [])

    return (
        <main className="flex-1 overflow-x-hidden">
            <div className=" py-2 max-w-4xl mx-auto">
                <h4 className="text-4xl text-center py-10">JavaScript Smup Project</h4>
                <h3 className="text-xl text-teal-300">Instructions:</h3>
                <p className="py-2">Use <strong>WASD or the four buttons above</strong> to move the yellow spacecraft. Use <strong>L</strong> to <strong>shoot lasers</strong>.
                </p>
                <div id="container" className="relative mx-auto md:w-[500px]">
                    <div className="absolute text-white left-5 md:left-0 pl-2 text-xl">{`Lives: ${livesDisplay}`}</div>
                    <div className="absolute top-7 text-white left-5 md:left-0 pl-2 text-xl">{`Score: ${scoreDisplay}`}</div>
                    <div className="absolute text-white pl-2 text-xl left-[235px] md:left-[400px]">{`Level: ${levelDisplay}`}</div>
                    <div className={livesDisplay > 0 ? "hidden" : "absolute top-[220px] md:top-[300px] left-[80px] md:left-[160px] text-4xl"}>Game Over</div>
                    <canvas ref={canvasRef} className="border-2 mx-auto"></canvas>
                </div>
                <div className="flex flex-col mx-auto">
                    <div className="flex mx-auto">
                        <div className="grid grid-cols-3 w-[300px]">
                            <div></div>
                            <button onTouchStart={() => keys.up.pressed = true} onTouchEnd={() => keys.up.pressed = false} onMouseDown={() => keys.up.pressed = true} onMouseUp={() => keys.up.pressed = false} className="mx-1 my-2 bg-blue-900 border-2 py-5">&#8593;</button>
                            <div></div>
                            <button onTouchStart={() => keys.left.pressed = true} onTouchEnd={() => keys.left.pressed = false} onMouseDown={() => keys.left.pressed = true} onMouseUp={() => keys.left.pressed = false} className="mx-1 my-2 bg-blue-900 border-2 py-5">&#8592;</button>
                            <button onTouchStart={() => keys.down.pressed = true} onTouchEnd={() => keys.down.pressed = false} onMouseDown={() => keys.down.pressed = true} onMouseUp={() => keys.down.pressed = false} className="mx-1 my-2 bg-blue-900 border-2 py-5">&#8595;</button>
                            <button onTouchStart={() => keys.right.pressed = true} onTouchEnd={() => keys.right.pressed = false} onMouseDown={() => keys.right.pressed = true} onMouseUp={() => keys.right.pressed = false} className="mx-2 my-2 bg-blue-900 border-2 py-5">&#8594;</button>
                        </div>
                        <button onTouchStart={() => keys.Space.pressed = true} onTouchEnd={() => keys.Space.pressed = false} onMouseDown={() => keys.Space.pressed = true} onMouseUp={() => keys.Space.pressed = false} className="mx-1 my-2 bg-blue-900 border-2 py-5 px-2">Laser</button>
                    </div>
                </div>
            </div>
        </main>
    )

}