<script>
    import { onMount } from 'svelte';
    let astroids = [];
    let projectiles = [];
    let powerUpList = [];
    let explosions = [];
    let shipPosition = 50;
    let shipWidth = 10;
    let shipHeight = 10;
    let shipHealth = [1,1,1];
    let keys = {};
    let projectiledelay = 0;
    let totalGameTime = 10;
    let gameOver = false;
    let powerUpScreen = false;
    let score = 0;
    let PowerUps = [
        {Title: "Better side thrusters", Description: "You can now move faster to the sides", Function: () => {sideThrusters += 1}, Num: 1}
        , {Title: "More health", Description: "Your health increases with one", Function: () => {shipHealth = [...shipHealth,1]}, Num: 2}
        , {Title: "Faster shooting", Description: "You can now shoot faster", Function: () => {
            if(projectileDelayBase > 0){
                projectileDelayBase -= 1} 
                else{
                    numberOfProjectiles += 1;
                } 

    }, Num: 3}];
    let sideThrusters = 0;
    let projectileDelayBase = 10;
    let numberOfProjectiles = 1;
    let astroidInterval;
    let powerUpInterval;
    function onKeyDown(e) {
        keys[e.keyCode] = true;
    }

    function onKeyUp(e) {
        keys[e.keyCode] = false;
    }
    function createAstroid() {
        if (gameOver || powerUpScreen) {
            return;
        }
        updateIntervalAstroid();
        astroids = [...astroids, {x: Math.random() * 100, y: 0, health: 3, width: 20, height: 30}];
    }
    function createPowerUp() {
        if (gameOver || powerUpScreen) {
            return;
        }
        updateIntervalPowerUp();
        powerUpList = [...powerUpList, {x: Math.random() * 100, y: 0, width: 10, height: 10}];
    }
    function PowerUp(chosenPowerUp){
        chosenPowerUp.Function();
        powerUpScreen = false;
    }
    function astroidMovement() {
        for(let astroid of astroids){
            if(astroid.y < 100){
                astroid.y += 0.1 + (10-totalGameTime)/30;
            }
            else{
                astroids.splice(astroids.indexOf(astroid), 1);
        }}
        astroids = astroids;
    }
    function projectileMovement() {
        for(let projectile of projectiles){
            if(projectile.y > 0){
                projectile.y -= 0.4;
            }
            else{
               projectiles.splice(projectiles.indexOf(projectile), 1);
            }
        }
        projectiles = projectiles;
        if (projectiledelay > 0) {
            projectiledelay -= 0.2;
        }
    }
    function explosionMovement() {
        for(let explosion of explosions){
            if(explosion.y < 100){
                explosion.y += 0.1;
            }
            else{
                explosions.splice(explosions.indexOf(explosion), 1);
            }
        }
        explosions = explosions;
    }
    function powerUpMovement() {
        for(let powerUp of powerUpList){
            if(powerUp.y < 100){
                powerUp.y += 0.1;
            }
            else{
                powerUpList.splice(powerUpList.indexOf(powerUp), 1);
            }
        }
        powerUpList = powerUpList;
    }
    function shootProjectile() {
        console.log("pew pew");
        if (projectiledelay > 0) {
            return;
        }   
        else {
            projectiledelay = projectileDelayBase;
            for (let i = 0; i < numberOfProjectiles; i++) {
            projectiles = [...projectiles, {x: shipPosition + i + 1 - numberOfProjectiles/2 + shipWidth / 4, y: 80, width: 2, height: 5}];
        }
        }
        
    }
    function checkCollisions() {
        // Check for collisions between astroids and projectiles
        for (let astroid of astroids) {
            for (let projectile of projectiles) {
                if (isColliding(astroid, projectile)) {
                    console.log("hit");
                    astroid.health -= 1;
                    if (astroid.health <= 0) {
                        astroids.splice(astroids.indexOf(astroid), 1);
                        let explosion = {x: astroid.x, y: astroid.y, width: astroid.width, height: astroid.height};
                        explosions = [...explosions, explosion];
                        console.log(explosions);
                        setTimeout(() => {
                            explosions.splice(explosions.indexOf(explosion), 1);
                        }, 400);
                        score += 1;
                    }
                    projectiles.splice(projectiles.indexOf(projectile), 1);
                    astroids = astroids;
                    projectiles = projectiles;
                }
            }
        }

        // Check for collisions between astroids and the ship
        for (let astroid of astroids) {
            if (isColliding(astroid, { x: shipPosition + 2, y: 85, width: shipWidth-4, height: 2 }) && astroid.health > 0) {
                shipHealth = shipHealth.slice(0, -1);
                astroids.splice(astroids.indexOf(astroid), 1);
                astroids = astroids;
                if (shipHealth <= 0) {
                    gameOver = true;
                }
            }
        }
        for (let powerUp of powerUpList) {
            if (isColliding(powerUp, { x: shipPosition, y: 85, width: shipWidth, height: shipHeight })) {
                powerUpScreen = true;
                powerUpList.splice(powerUpList.indexOf(powerUp), 1);
                powerUpList = powerUpList;
            }
        }
    }

    function isColliding(obj1, obj2) {
        return (
            obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y
    );
    }
    function updateIntervalAstroid() {
        clearInterval(astroidInterval);
        let interval = Math.random() * 200 * totalGameTime;
        astroidInterval = setInterval(createAstroid, interval);
    }

    function updateIntervalPowerUp() {
        clearInterval(powerUpInterval);
        powerUpInterval = setInterval(createPowerUp, Math.random() * 10000);
    }
    setInterval(gameLoop, 10);
    function restartGame(){
        astroids = [];
        projectiles = [];
        explosions = [];
        powerUpList = [];
        shipPosition = 50;
        shipHealth = [1,1,1];
        keys = {};
        projectiledelay = 0;
        totalGameTime = 10;
        gameOver = false;
        score = 0;
        powerUpScreen = false;
        sideThrusters = 0;
        projectileDelayBase = 5;
        numberOfProjectiles = 1;
    }
    
    function gameLoop() {
        if(gameOver){
            return;
        }
        if (keys[49] && powerUpScreen) { // 1 key
            PowerUp(PowerUps[0]);
        }
        else if (keys[50] && powerUpScreen) { // 2 key
            PowerUp(PowerUps[1]);
        }
        else if (keys[51] && powerUpScreen) { // 3 key
            PowerUp(PowerUps[2]);
        }
        if (powerUpScreen){
            return;
        }
        if (keys[32]) { // Space key
            shootProjectile();
        }
        if (keys[37] || keys[65]) { // Left arrow key or 'A' key
            if (shipPosition > 0) {
                shipPosition -= 0.3 + sideThrusters/10;
            }
        }
        if (keys[39] || keys[68]) { // Right arrow key or 'D' key
            if (shipPosition < 90) {
                shipPosition += 0.3 + sideThrusters/10;
            }
        }

        astroidMovement();
        projectileMovement();
        checkCollisions();
        powerUpMovement();
        explosionMovement();
        if (totalGameTime > 1){
        totalGameTime -= 0.001;}
    }
    onMount(() => {
        createAstroid();
        createPowerUp();
    });
</script>
<svelte:window on:keydown|preventDefault={onKeyDown} on:keyup={onKeyUp}/>
<main>
<img src="spaceship.pod_.1.blue__0.png" alt="epic space ship" class="ship" style="left:{shipPosition}%;">


{#each astroids as astroid}
    <img src="Asteroid Huge.png" alt="astroid" style="left:{astroid.x}%; top:{astroid.y}%; height:{astroid.height}%; width:{astroid.width}%" class = "astroid">
{/each}
{#each projectiles as projectile}
    <img src="laser.png" alt="laser" style="left:{projectile.x}%; top:{projectile.y}%;" class = "projectile">
{/each}
{#each powerUpList as power}
    <img src="powerup.png" alt="powerUp" style="left:{power.x}%; top:{power.y}%;" class = "powerUp">
{/each}
{#each explosions as astroid}
    <img src="Asteroid Huge.png" alt="astroid" style="left:{astroid.x}%; top:{astroid.y}%; height:{astroid.height}%; width:{astroid.width}%" class = "astroid">
    <img src="explosion.gif" alt="explosion"  style="left:{astroid.x}%; top:{astroid.y}%; height:{astroid.height}%; width:{astroid.width}%" class="astroid">
{/each}
</main>
<aside class="health">
    {#each shipHealth as hp}
        <img src="heart.png" alt="heart" style="width: 100px; height: 100px;">
    {/each}
</aside>
<aside class = "gameOver" class:hide= {!gameOver}>
<p>Game Over</p>
<p>Score: {score}</p>
<input type="submit" value = Restart on:click={restartGame} style="color:blanchedalmond">
</aside>
<aside class="score">
    <p>Score: {score}</p>
</aside>
<aside class = "levelUps" class:hide={!powerUpScreen}>
    {#each PowerUps as PowerUp}
    <div>
        <p>{PowerUp.Title}</p>
        <p>{PowerUp.Description}</p>
        <h2>{PowerUp.Num}</h2>
    </div>
    {/each}
</aside>
<style>
    html, body {
        overflow: hidden;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    main {
        background-image: url(https://media.istockphoto.com/id/1283307885/vector/stippled-vector-texture-background-white-dots-on-black.jpg?s=612x612&w=0&k=20&c=-jnnVhrgH4vr9OC464ARX671AFmsrRK9sMJZ7baTJT0=);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: black;
        overflow: hidden;
        position: relative;
        animation: moveBackground 50s linear infinite;
    }
    @keyframes moveBackground {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 0 100%;
        }
    }
    aside {
        position: fixed;
        bottom: 10px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    .ship {
        width: 10%;
        height: 10%;
        position: absolute;
        bottom: 15%;
    }
    .astroid {
        width: 20%;
        height: 30%;
        position: absolute;
        bottom: 15%;
    }
    .projectile {
        width: 5%;
        height: 5%;
        position: absolute;
        rotate: 90deg;
    }
    .health {
        bottom: 10px;
        right: 10px;
    }
    .gameOver {
        top: 40%;
        left: 40%;
        width: 20%;
        height: 20%;    
        font-size: large;
        display: flex;
        flex-direction: column;
    }
    .hide{
        display: none;
        visibility: hidden;
    }
    .score {
        top: 10px;
        right: 10px;
        font-size:xx-large;
    }
    .levelUps {
        top: 10px;
        left: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        height: 100%;
    }
    .powerUp {
        width: 10%;
        height: 10%;
        position: absolute;
        bottom: 15%;
    }
    p{
        color: blanchedalmond;
        background-color: darkblue;
    }
</style>