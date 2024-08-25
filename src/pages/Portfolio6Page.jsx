
import { useEffect, useRef } from "react";
import backgroundpng from '/game2background.png'
import foregroundpng from "/game2foreground.png"
import playerdown from '/game2down_all.png'
import playerright from '/game2right_all.png'
import playerup from '/game2up_all.png'
import playerleft from '/game2left_all.png'

export default function Portfolio6Page() {

    let width = 300;
    let height = 400;
    let offset = { x: -525, y: -710 };
    let redKnightPosition = { x: 25, y: 175 };
    let mushroomPosition = { x: 195, y: 200 };
    if (window.innerWidth < 740) {
        width = 300;
        height = 400;
        offset = { x: -525, y: -710 };
        redKnightPosition = { x: 25, y: 175 }
        mushroomPosition = { x: 195, y: 200 }
    }
    else if (window.innerWidth < 1000) {
        width = 700;
        height = 550;
        offset = { x: -330, y: -630 }
        redKnightPosition = { x: 75, y: 205 }
        mushroomPosition = { x: 525, y: 225 }
    }
    else {
        width = 1000;
        height = 700;
        offset = { x: -180, y: -570 }
        redKnightPosition = { x: 75, y: 305 }
        mushroomPosition = { x: 825, y: 325 }
    }
    const canvasRef = useRef(null);
    const backgroundImage = new Image();
    backgroundImage.src = backgroundpng
    const foregroundImage = new Image();
    foregroundImage.src = foregroundpng;
    const playerDownImage = new Image();
    playerDownImage.src = playerdown;
    const playerRightImage = new Image();
    playerRightImage.src = playerright;
    const playerUpImage = new Image();
    playerUpImage.src = playerup;
    const playerLeftImage = new Image();
    playerLeftImage.src = playerleft;
    const keys = { up: { pressed: false }, left: { pressed: false }, down: { pressed: false }, right: { pressed: false } };

    function isColliding({ rectangle1, rectangle2 }) {
        return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
            rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
            rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
            rectangle1.position.y + rectangle1.height >= rectangle2.position.y);
    } // end function isColliding

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = width
        canvas.height = height
        const context = canvas.getContext('2d');
        const boundaries = [];
        const collisionsMap = [];
        const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const numberOfTilesPerRow = 50;
        for (let i = 0; i < collisions.length; i += numberOfTilesPerRow) {
            collisionsMap.push(collisions.slice(i, numberOfTilesPerRow + i));
        }

        class Sprite {
            constructor({ position, image, scale = 1, frames = { max: 1, hold: 10 }, sprites, animate = false, rotation = 0 }) {
                this.position = position;
                this.scale = scale;
                this.image = new Image();
                this.frames = { ...frames, val: 0, elapsed: 0 };
                this.image.onload = () => {
                    this.width = (this.image.width / this.frames.max) * this.scale;
                    this.height = this.image.height * this.scale;
                }
                this.image.src = image.src;
                this.moving = false;
                this.sprites = sprites;
                this.animate = animate;
                this.opacity = 1;
                this.rotation = rotation;
            } // end constructor 
            draw() {
                context.save();
                context.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);
                context.rotate(this.rotation);
                context.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2);
                context.globalAlpha = this.opacity;
                context.drawImage(
                    this.image,
                    this.frames.val * this.width, //crop
                    0, //crop
                    this.image.width / this.frames.max, //crop
                    this.image.height, //crop
                    this.position.x,
                    this.position.y,
                    this.image.width / this.frames.max, //actual
                    this.image.height //actual
                ); // end drawImage
                context.restore()
                if (!this.animate) {
                    return;
                }
                if (this.frames.max > 1) {
                    this.frames.elapsed++;
                }
                if (this.frames.elapsed % this.frames.hold == 0) {
                    if (this.frames.val < this.frames.max - 1) {
                        this.frames.val++;
                    }
                    else {
                        this.frames.val = 0;
                    }
                }
            } // end function draw
        } // end class Sprite

        class Boundary {
            static width = 48;
            static height = 48;
            constructor({ position }) {
                this.position = position;
                this.width = 48;
                this.height = 48;
            } // end constructor
            draw() {
                context.fillStyle = 'rgba(255,0,0,0.3)';
                context.fillRect(this.position.x, this.position.y, this.width, this.height);
            } // end function draw
        } // end class Boundary

        collisionsMap.forEach((row, i) => {
            row.forEach((symbol, j) => {
                if (symbol == 1025) {
                    boundaries.push(new Boundary({ position: { x: j * Boundary.width + offset.x, y: i * Boundary.height + offset.y } }));
                }
            }) // end forEach
        }) // end forEach

        const background = new Sprite({ position: { x: offset.x, y: offset.y }, image: backgroundImage });
        const player = new Sprite({ position: { x: canvas.width / 2 - 40, y: canvas.height / 2 - 40 }, image: playerDownImage, frames: { max: 4, hold: 20 }, sprites: { up: playerUpImage, left: playerLeftImage, right: playerRightImage, down: playerDownImage } });
        const foreground = new Sprite({ position: { x: offset.x, y: offset.y }, image: foregroundImage });
        const moveables = [background, ...boundaries, foreground]
        context.drawImage(backgroundImage, 0, 0);
        context.drawImage(playerDownImage, 0, 0);
        function animate() {
            const movementVelocity = 5;
            const animationId = window.requestAnimationFrame(animate);
            background.draw();
            player.draw();
            foreground.draw();
            let moving = true;
            player.animate = false;
            if (keys.up.pressed == true) {
                player.animate = true;
                player.image = player.sprites.up;
                for (let i = 0; i < boundaries.length; ++i) {
                    const boundary = boundaries[i];
                    if (isColliding({
                        rectangle1: player,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y + movementVelocity
                            }
                        }
                    })) {
                        moving = false;
                        break;
                    }
                }
                if (moving)
                    moveables.forEach(moveable => {
                        moveable.position.y += movementVelocity;
                    })
                if (keys.left.pressed == true) {
                    for (let i = 0; i < boundaries.length; ++i) {
                        const boundary = boundaries[i];
                        if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x + 3, y: boundary.position.y } } })) {
                            moving = false;
                            break;
                        }
                    }
                    if (moving)
                        moveables.forEach(moveable => {
                            moveable.position.x += movementVelocity;
                        })
                }
                else if (keys.right.pressed == true) {
                    for (let i = 0; i < boundaries.length; ++i) {
                        const boundary = boundaries[i];
                        if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x - 3, y: boundary.position.y } } })) {
                            moving = false;
                            break;
                        }
                    } // end for
                    if (moving)
                        moveables.forEach(moveable => {
                            moveable.position.x -= movementVelocity;
                        })
                }
            }
            else if (keys.down.pressed == true) {
                player.animate = true;
                player.image = player.sprites.down;
                for (let i = 0; i < boundaries.length; ++i) {
                    const boundary = boundaries[i];
                    if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x, y: boundary.position.y - movementVelocity } } })) {
                        moving = false;
                        break;
                    }
                } // end for
                if (moving)
                    moveables.forEach(moveable => {
                        moveable.position.y -= movementVelocity;
                    })
                if (keys.left.pressed == true) {
                    for (let i = 0; i < boundaries.length; ++i) {
                        const boundary = boundaries[i];
                        if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x + movementVelocity, y: boundary.position.y } } })) {
                            moving = false;
                            break;
                        }
                    } // end for
                    if (moving)
                        moveables.forEach(moveable => {
                            moveable.position.x += movementVelocity;
                        })
                }
                else if (keys.right.pressed == true) {
                    for (let i = 0; i < boundaries.length; ++i) {
                        const boundary = boundaries[i];
                        if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x - movementVelocity, y: boundary.position.y } } })) {
                            moving = false;
                            break;
                        }
                    } // end for
                    if (moving)
                        moveables.forEach(moveable => {
                            moveable.position.x -= movementVelocity;
                        })
                }
            }
            else if (keys.left.pressed == true) {
                player.animate = true;
                player.image = player.sprites.left;
                for (let i = 0; i < boundaries.length; ++i) {
                    const boundary = boundaries[i];
                    if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x + movementVelocity, y: boundary.position.y } } })) {
                        moving = false;
                        break;
                    }
                } // end for
                if (moving)
                    moveables.forEach(moveable => {
                        moveable.position.x += movementVelocity;
                    })
                if (keys.up.pressed == true) {
                    for (let i = 0; i < boundaries.length; ++i) {
                        const boundary = boundaries[i];
                        if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x, y: boundary.position.y + movementVelocity } } })) {
                            moving = false;
                            break;
                        }
                    } // end for
                    if (moving)
                        moveables.forEach(moveable => {
                            moveable.position.y += movementVelocity;
                        })
                }
                else if (keys.down.pressed == true) {
                    for (let i = 0; i < boundaries.length; ++i) {
                        const boundary = boundaries[i];
                        if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x, y: boundary.position.y - movementVelocity } } })) {
                            moving = false;
                            break;
                        }
                    } // end for
                    if (moving)
                        moveables.forEach(moveable => {
                            moveable.position.y -= movementVelocity;
                        })
                }
            }
            else if (keys.right.pressed == true) {
                player.animate = true;
                player.image = player.sprites.right;
                for (let i = 0; i < boundaries.length; ++i) {
                    const boundary = boundaries[i];
                    if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x - 3, y: boundary.position.y } } })) {
                        moving = false;
                        break;
                    }
                } // end for
                if (moving)
                    moveables.forEach(moveable => {
                        moveable.position.x -= 3;
                    })
                if (keys.up.pressed == true) {
                    for (let i = 0; i < boundaries.length; ++i) {
                        const boundary = boundaries[i];
                        if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x, y: boundary.position.y + movementVelocity } } })) {
                            moving = false;
                            break;
                        }
                    } // end for
                    if (moving)
                        moveables.forEach(moveable => {
                            moveable.position.y += movementVelocity;
                        })
                }
                else if (keys.down.pressed == true) {
                    for (let i = 0; i < boundaries.length; ++i) {
                        const boundary = boundaries[i];
                        if (isColliding({ rectangle1: player, rectangle2: { ...boundary, position: { x: boundary.position.x, y: boundary.position.y - movementVelocity } } })) {
                            moving = false;
                            break;
                        }
                    } // end for
                    if (moving)
                        moveables.forEach(moveable => {
                            moveable.position.y -= movementVelocity;
                        })
                }
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
                }
            }) // end event listener

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

                }
            }) // end event listener
        }
        animate()
    }, []);

    return (
        <main className="flex-1 overflow-x-hidden">
            <div className=" py-2 max-w-6xl mx-auto">
                <h2 className="text-4xl text-center py-10">JavaScript RPG Project</h2>
                <h3 className="text-xl text-teal-300">Instructions</h3>
                <p className="py-2">Use W A S D keys to move the red knight and explore the island! This is my fourth
                    JavaScript game
                    development
                    project, fully written in JavaScript. I am considering adding more features
                    such as battle sequences, experience points, items, and level-ups.</p>
                <div className="inline-block relative border-2 border-black ml-5">
                    <div className="absolute inset-0 opacity-0 pointer-events-none z-10 bg-gradient-to-b from-[#1d328f] to-black"></div>
                    <canvas ref={canvasRef} className="border-2"></canvas>
                </div>
            </div>
            <div className="grid grid-cols-3 w-[300px] mx-auto">
                <div></div>
                <button onMouseDown={()=>keys.up.pressed = true} onMouseUp={()=>keys.up.pressed = false} id="up-button" className="mx-2 my-2 bg-blue-900 border-2 py-5">&#8593;</button>
                <div></div>
                <button onMouseDown={()=>keys.left.pressed = true} onMouseUp={()=>keys.left.pressed = false} id="left-button" className="mx-2 my-2 bg-blue-900 border-2 py-5">&#8592;</button>
                <button onMouseDown={()=>keys.down.pressed = true} onMouseUp={()=>keys.down.pressed = false} id="down-button" className="mx-2 my-2 bg-blue-900 border-2 py-5">&#8595;</button>
                <button onMouseDown={()=>keys.right.pressed = true} onMouseUp={()=>keys.right.pressed = false} id="right-button" className="mx-2 my-2 bg-blue-900 border-2 py-5">&#8594;</button>
            </div>
        </main>
    )
}