
const robot = document.getElementById("Robot");
let lastTime;


robot.style.left = "10%";
console.log("Left:" + robot.style.left);

function moveRobot(time){
    if( lastTime != null){
        const delta = time - lastTime;
        robot.style.left = `${parseFloat(robot.style.left) + delta *.1}%`;
    }

    if( parseFloat(robot.style.left) >= 100 ){
        robot.style.left = "0px";
    }

    lastTime = time;

    window.requestAnimationFrame(moveRobot);
}

window.requestAnimationFrame(moveRobot);