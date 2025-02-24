<script>
    let y = 0;
    let clocks = [
        {image: "https://content.thewosgroup.com/productimage/17771072/17771072_1.jpg?impolicy=zoom", alt: "Tudor Clock", info: "Black Bay Chrono Boutique Edition 41mm steel case", price: 55000, name: "Tudor"}
        ,{image: "https://content.thewosgroup.com/productimage/17381215/17381215_1.jpg?impolicy=zoom", alt: "Tag Heuer Clock", info: "Formula 1 Quartz Chronograph 43mm Mens Watch", price: 22000, name: "Tag Heuer"}
        ,{image: "https://content.thewosgroup.com/productimage/17311609/17311609_1.jpg?impolicy=zoom", alt: "Cartier Clock", info: "Tank Francaise Watch, Small Model, Quartz Movement, 18K Yellow Gold Case", price: 220000, name: "Cartier"}
        ,{image: "https://content.thewosgroup.com/productimage/17351325/17351325_1.jpg?impolicy=zoom", alt: "Longines Clock", info: "La Grande Classique De Longines 29mm Ladies Watch Gold", price: 17000, name: "Longines"}
    ];
    let shoppinglist = [];
    let currentClock = {};
    let clockView = false;
    let shoppingCartActive = false;
    let total = 0;
    const initialOffset = 0;

    function expandClock(clock){
        clockView = true;
        currentClock = clock;
    }
    function closeClock(){
        clockView = false;
        currentClock = {};
        
    }
    function addToShoppingCart(clock){
        shoppinglist = [...shoppinglist, clock];
        calculateTotal();
    }
    function calculateTotal(){
        total = 0;
        shoppinglist.forEach((item) => {
            total += item.price;
        });
    }
    function removeItem(item){
        shoppinglist.splice(shoppinglist.indexOf(item), 1);
        shoppinglist = shoppinglist;
        calculateTotal();
    }
    function checkOut(){
        shoppinglist = [];
        total = 0;
    }
    
</script>

<svelte:window bind:scrollY={y}/>
<main>
  <div class="parallax-container">
  <video autoplay loop muted style="transform: translate(0,{-y/10}px) object-fit: contain;">
    <source src= "clock.mp4" type="video/mp4" >
    </video>
    <video autoplay loop muted style="transform: translate(0,{(initialOffset-y/1)}px)">
    <source src= "background.mp4" type="video/mp4" class = "background">
    </video>
    </div>
    <div class="text">
	<span style="opacity: {1 - Math.max(0, y/100)}"> TIMELESS  </span>
    <hr class="underline">
    <span style="opacity: {0 + Math.max(0, (y - 400)/100)}" class = "clockspan">Clocks</span>
    </div>
    <div class = "grid">
        {#each clocks as clock}
            <div class="clock">
                <input type="image" src = {clock.image} alt = {clock.alt} on:click={() => expandClock(clock)}>
                <h2>{clock.name}</h2>
                
            </div>
        {/each}
    </div>
</main>
<aside class = "fullScreenClock" class:hidden={!clockView}>
    <div class = "divClock">
        <img src={currentClock.image} alt={currentClock.alt} class = "clockImg" style="object-fit: contain;">
        <div style="object-fit: contain;">
        <h1>{currentClock.name}</h1>
        <h2>{currentClock.info}</h2>
        <h2>{currentClock.price} kr</h2>
        <input type="button" value="Add to Shopping Cart" on:click={() => addToShoppingCart(currentClock)}>
        <input type="button" value="Close" on:click={closeClock}>
        </div>
    </div>
</aside>
<aside class = "shoppingCart" class:hidden={!shoppingCartActive} style="opacity: {0 + Math.max(0, (y - 830)/100)}">
    <div style="overflow-y: scroll; height: 100%;">
        <h2>Shopping Cart</h2>
        {#each shoppinglist as item}
            <div style="background-color: black;">
            <img src={item.image} alt= {item.alt} style="height: 90%; width: 90%; keep-aspect-ratio: 1; margin: 5%;">
            <h2>{item.name}</h2>
            <h2>{item.price} kr</h2>
            <input type="button" value="Remove" on:click={() => removeItem(item)}>
            </div>
        {/each}
        
    </div>
    <h2>Total: {total} kr</h2>
    <input type="button" value="To CheckOut" on:click={() => checkOut} class = "inCartButton">
    <input type="button" value="Close" on:click={() => shoppingCartActive = false} class = "inCartButton">
</aside>
<aside class = "cart">
    <input type="image" src = "https://cdn-icons-png.flaticon.com/512/846/846423.png" alt = "shopping cart button" on:click={() => shoppingCartActive = !shoppingCartActive} class="cartButton" style="opacity: {0 + Math.max(0, (y - 830)/100)}">
</aside>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 4000"><path fill="#e7008a" fill-opacity="0.68" d="1"></path></svg>
<style>
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: black;
  }
  .clockspan{
    font-size: 100px;
    color: white;
    padding-top: 0;
    top: 300px;
  }
  .parallax-container {
		position: fixed;
		width: 1920px;
		height: 1080px;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.parallax-container video {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform, opacity;
        
	}
  .text {
        width: 100%;
        height: 100%;
    }
    .grid{
        display: grid;
        position: absolute;
        grid-template-columns: repeat(2 , minmax(200px, 1fr));
        grid-gap: 20px;
        padding: 20px;
        top: 1200px;
		width: 100%;
		height: calc(50%-1000px);
		color: white;
		margin-top: 20px;
		justify-content: center;
		align-content: center;
		align-items: center;
		text-align: center;
		padding-left: 13%;
		padding-right: 13%;
	}
    span {
		position: relative;
		display: flex;
		font-size: 1em;
		text-transform: uppercase;
		will-change: transform, opacity;
		font-family:'Gill Sans';
		font-size: 150px;
		color: black;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-content: center;
		padding-top: 1.5em;
	}
    .clock{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.7);
        padding: 20px;
        border-radius: 10px;
        margin: 10px;
        z-index: 5;
        width: 100%;
        height: 100%;
    }
    input{
        width: 90%;
        height: 90%;
        border-radius: 10px;
    }
    input:hover{
        transform: scale(1.05);
        transition: transform 0.1s;
    }
    input:active{
        transform: scale(1.1);
        transition: transform 0.1s;
    }
    h1{
        font-size: 50px;
        color: white;
        padding-top: 2%;
        font-family: sans-serif;
        margin-top: 15px;
        margin-bottom: 10px;
    }
    h2{
        font-size: 30px;
        color: white;
        padding-top: 2%;
        font-family: sans-serif;
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .underline {
        width: 50%;
        margin: 0 auto;
        border: 1px solid white;
        margin-top: 10px;
    }
    .fullScreenClock{
        display: absolute;
        position: fixed;
        width: 90%;
        height: 80%;
        background-color: rgba(0,0,0,0.9);
        z-index: 10;
        align-items: center;
        justify-content: center;
        top: 10%;
        left: 5%;
        object-fit: contain;
    }
    .divClock{
        display: grid;
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        width: 90%;
        height: 90%;
        
    }
    .hidden{
        visibility: hidden;
    }
    aside{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 10px;
        margin: 10px;
        z-index: 5;
        width: 100%;
        height: 100%;
    }
    .cart{
        position: fixed;
        top: 3vh;
        right: 1vw;
        z-index: 9;
        width: 100px;
        height: 100px;
    }
    .shoppingCart{
        display: flex;
        position: fixed;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: rgba(0,0,0,0.9);
        z-index: 20;
        align-items: flex-start;
        justify-content: flex-start;
        top: 10vh;
        right: 5vw;
        width: 300px;
        height: 80%;
    }
    .cartButton{
        border-radius: 90%;
        background-color: whitesmoke;
        border-radius: 30%;
        border-color: black;
        border-style: solid;
        border-width: 4px;
        padding: 10px;
    }
    .inCartButton{
        width: 90%;
        height: 10%;
        border-radius: 10px;
        background-color: whitesmoke;
        border-color: black;
        color: black;
        margin: 10px;
    }
    @media screen and (min-width: 700px) {
        span {
             font-size: 150px;
        }
        .clockImg{
        height: 500px;
        width: 500px;
        }
        }
@media screen and (max-width: 700px) {
    span {
        font-size: 80px;
        padding-top: 200px;
    }
    .clockImg{
        height: 300px;
        width: 300px;
        object-fit: contain;
    }
    .cart{
        top: 8vh;
        right: 5px;
    }
    .fullScreenClock{
        width: 90%;
        height: 70%;
        object-fit: contain;
    }
    }
</style>