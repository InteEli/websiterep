<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";
	import { Result } from 'postcss';
    import {chat_store} from "$lib/savedchat";
    import { onMount } from 'svelte';
    const eliza = new ElizaBot();
    let chat = []
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($chat_store.length > 2){
         chat = JSON.parse($chat_store);
        }
    });
    if (chat.length === 0){
        chat = [{ user: 'Eliza', message: eliza.getInitial() }];
    }
    let newMessage = "";
    async function write(message) {
        chat = [...chat, {user:"person", message: newMessage}]
        //Hämta HTML-elementet med id:et visible
        var element = document.getElementById("visible");
        //Ändrar elementets CSS-egenskap display till default
        element.style.display = "flex"; // Visa elementet
            
        await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
        element.style.display = "none";
        let elizaResponse = eliza.transform(newMessage)
        chat = [...chat, {user:"Eliza", message: elizaResponse}]
        $chat_store = JSON.stringify(chat);
      }
    function restartChat(){
        chat = [{ user: 'Eliza', message: eliza.getInitial() }];
        $chat_store = JSON.stringify(chat);
    }   
</script>

<main>
<div class = "container">
<section>
    {#each chat as textmessage}
        <article class = "text" class:User = {textmessage.user === "person"}>
            <p>{textmessage.message}</p>
        </article>
    {/each}
    <article id = visible>
        <span class = "circle"></span>
        <span class = "circle"></span>
        <span class = "circle"></span>
    </article>
</section>
</div>
<div class = "sidebar">
<form method="post"
use:enhance={({ formElement, formData, action, cancel }) => {
  cancel(); //don't post anything to server
  const text = formData.get("text");
  write(text);
  formData.reset()
  }}>
    <label for="newText">Add Text:</label>
    <input type="text" id="newText" bind:value={newMessage} class = "text">
    <input type="submit" value="Submit text">
</form>
<input type="image" src = "https://teacherhead.com/wp-content/uploads/2015/01/reset.png?w=930&h=450&crop=1" alt = "restart butotn" on:click={restartChat} class = "restart">
</div>
</main>


<style>
    .restart{
        width: 90px;
        height: 90px;
        border-radius: 20px;
    }
    main{
        display: flex;
        width: 100%;
        height: 100%;
        justify-items: center;
        justify-content: center;
        align-content: center;
        background-color: rgb(54, 14, 92);
        background-size: cover;
        padding-top: 5%;
    }
    .container{
        display: flex;
        justify-content: flex-start;
        width: 60vw;
        height: 70vh;
        padding: 10px;
        background-color:blueviolet;
        overflow-y:scroll;
        border-radius: 10px;
        border: 4px;
        border-style: solid;
        border-color: rgb(108, 29, 183);

    }
    input{
        background-color: rgb(74, 12, 131);
        border-radius: 10px;
        padding: 5px;
        margin: 5px;
    }
    .sidebar{
        width: 20vw;
        height: 70vh;
        background-color:rgb(119, 36, 196);
        border-radius: 10px;
        border: 4px;
        border-style: solid;
        border-color: rgb(108, 29, 183);
    }
    section{
        height: 90%;
        margin: 10px;
    }
    .text{
        color: black;
        margin: 10px;
        padding: 10px;
        width: 90%;
        background-color: aqua;
        border-radius: 10px;
    }
    #visible{
        display: none;
        width: 100px;
        height: 60px;
        justify-content: space-evenly;
        align-items: center;
    }
    .circle{
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgb(0, 0, 0);
        animation-name: typing;
        animation-duration: 1000ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    .User{
        background-color: brown;
        margin-left: 27vw;
    }


        /* CSS-stilar för .circle med index 1 (den första cirkeln) */
        .circle:nth-child(1) {
             animation-delay: 0ms; /* Ingen fördröjning */
        }
        /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
        .circle:nth-child(2) {
            animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
        }
        /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
        .circle:nth-child(3) {
            animation-delay: 666ms; /* Starta animationen efter 666 ms */
        }
            
               
    @keyframes typing {
        0% {transform: scale(1);}
        25%{transform: scale(1);}
        50% {transform: scale(1.4);}
        100% {transform: scale(1);}
}
</style>