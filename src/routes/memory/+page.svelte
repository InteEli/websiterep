<script>
    let cards = []
    let bluePoints = 0
    let redPoints = 0
    let blueTurn = true
    let flippedNoMatch = []
    let images = ["https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg", "https://m.media-amazon.com/images/I/511EacFzMFL.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOGiXHLq71nPqfRAEKdCMou6nlTbQPf-HJQ&s", "https://ae-pic-a1.aliexpress-media.com/kf/S5fc054c8ccb04cfcb5a6567fb2109673D/The-Rock-Eyebrow-Raise-Face-Meme-T-Shirt-animal-print-shirt-for-boys-t-shirt-man.jpg_640x640Q90.jpg_.webp", "https://hips.hearstapps.com/hmg-prod/images/hlh070121fobtoc-001-1623949349.png?crop=1.00xw:0.893xh;0,0.107xh&resize=640:*", "https://www.rocksandminerals4u.com/images/gneiss-1.jpg", "https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg", "https://m.media-amazon.com/images/I/511EacFzMFL.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOGiXHLq71nPqfRAEKdCMou6nlTbQPf-HJQ&s", "https://ae-pic-a1.aliexpress-media.com/kf/S5fc054c8ccb04cfcb5a6567fb2109673D/The-Rock-Eyebrow-Raise-Face-Meme-T-Shirt-animal-print-shirt-for-boys-t-shirt-man.jpg_640x640Q90.jpg_.webp", "https://hips.hearstapps.com/hmg-prod/images/hlh070121fobtoc-001-1623949349.png?crop=1.00xw:0.893xh;0,0.107xh&resize=640:*", "https://www.rocksandminerals4u.com/images/gneiss-1.jpg"]
    let back = "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0e80e20e-92d4-43ee-1531-add7b38e1800/width=450/9q461a7w7xy91.jpeg"
    function startGame(){
        cards = []
        bluePoints = 0
        redPoints = 0
        blueTurn = true
        flippedNoMatch = []
        images = shuffle(images)
        for (let card = 0; card < 12; card ++){
            let newImage = images[card]
            cards.push({image: newImage, flipped: false, matched: false})
            cards = cards
    }
    }
    startGame()
    function flipCard(card){
        if (card.flipped === false && flippedNoMatch.length < 2){
        cards[cards.indexOf(card)].flipped = !cards[cards.indexOf(card)].flipped
        flippedNoMatch.push(card)
        flippedNoMatch = flippedNoMatch
        checkIfPaired()
    }
    }
    function checkIfPaired(){
        if(flippedNoMatch.length === 2){
            console.log(flippedNoMatch)
            if (flippedNoMatch[0].image === flippedNoMatch[1].image){
                cards[cards.indexOf(flippedNoMatch[0])].matched = true
                cards[cards.indexOf(flippedNoMatch[1])].matched = true
                if (blueTurn){
                    bluePoints += 1
                }
                else{
                    redPoints += 1
                }
                flippedNoMatch=[]
                let totalPoints =bluePoints + redPoints
                if (totalPoints === 6){
                    if (redPoints > bluePoints){
                        alert("Röd vann!")
                    }
                    else if (redPoints < bluePoints){
                        alert("Blå vann!")
                    }
                    else{
                        alert("Det blev lika.")
                    }
                }
            }
            else{
                setTimeout(() => {
                    cards.forEach((card) => {
                    card.flipped = card.matched;
                    });
                    cards = cards;
                    flippedNoMatch = [];
                    } , 1000);
            }
            blueTurn = !blueTurn
        }
    }
    function shuffle(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
        } 
</script>


<h1>Pair the Rock Johnson</h1>

<main>
    <div class = "container">
    {#each cards as card}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class = "card" class:flipped= { card.flipped } on:click={flipCard(card)}>
        <img src= {card.image} alt="front side of card" class = "front">
        <img src = {back} alt = "backside of card" class = "back">
    </div>
    {/each}
    </div>
</main>

<aside class="blue"><p>{bluePoints}</p></aside>

<aside><p>{redPoints}</p></aside>

<aside class = "turn" class:blue= { blueTurn }></aside>

<aside class = "restart">
    <input type="image" src = "https://teacherhead.com/wp-content/uploads/2015/01/reset.png?w=930&h=450&crop=1" alt = "restart butotn" on:click={startGame}>
</aside>

<style>
main{
    display: flex;
    background-image: url(https://i.ytimg.com/vi/R1cpC1c-F0Q/maxresdefault.jpg);
        background-size: cover;
        min-height: 550px;
        width: 100%;
        height: 100%;
        padding: 5%;
        justify-content: center;
        align-content: center;
    }  

h1{
    font-size: 30px;
    text-align: center;
}

.container{
    display: grid;
    grid-template-columns: repeat(4,100px);
    grid-template-rows: repeat(3, 100px);
    align-items: center;
    justify-content: center;
}
.card{



    width: 100%;
    height: 100%;
    border: 1px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    border-color: black;
    border-style: solid;
    position: relative;

    
}
.card:not(.flipped):hover { 
    transform: scale(1.1); 
    transition: transform 0.1s;
    }
 .card img{
    position: absolute;
    backface-visibility: hidden;
   
}
aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p{
    font-size: 30px;
  }
  .blue{
    background-color: blue;
    left: 10px;
  }
  .turn{
    box-shadow: 0 0 10px 10px yellowgreen;
    z-index: -1;
  }
  .restart{
    top: 10px;
    background-color: rgba(255, 0, 0, 0);
  }
.front{
    transform: rotateY(180deg);
}

.flipped{
    transform: rotateY(180deg);
}
input{
    color: rgb(0, 0, 0);
    border-radius: 10px;
    font-size: 15px;
    padding: 10px;
    background-color: rgba(100, 126, 175, 0.926);
    width: 100px;
    height: 100px;
}

@media (min-height: 500px){
  .container{
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 100px);
  }
}
@media (max-height: 500px){
  .container{
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(2, 100px);
  }
}
          
</style>
