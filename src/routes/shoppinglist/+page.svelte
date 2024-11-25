<script>
import { fade } from 'svelte/transition'
let varor = [];
let nyvara 
function handleSubmit(){
if (nyvara.length > 0){
    let newOrder = getMaxOrder()+1   
    varor = [...varor,{name:nyvara, type: "köpa" , order : newOrder}]
}
}

function moveItem(vara){
    let typeVara = varor[varor.indexOf(vara)].type
    if (typeVara === "köpa"){
        removeOrder(vara)
        varor[varor.indexOf(vara)].type = "köpt"
        varor[varor.indexOf(vara)].order = 0
    }
    else if (typeVara === "köpt"){
        varor[varor.indexOf(vara)].type = "köpa"
        varor[varor.indexOf(vara)].order = getMaxOrder()+1

    }
}
function removeItem(vara){
    removeOrder(vara)
    varor.splice(varor.indexOf(vara),1)
    varor = varor

}
function changeOrderHigher(vara){
    if (vara.order > 1){
        varor[varor.indexOf(vara)].order -= 1
        for (let item of varor){
        if (vara.order === item.order && item != vara){
            varor[varor.indexOf(item)].order += 1
        }
    }
    }
}
function removeOrder(vara){
    let order = vara.order
    while (order <= getMaxOrder()){
        varor[varor.indexOf(getItemOfOrder(order))].order = getItemOfOrder(order).order-1
        order = order + 1
    }
}
function getMaxOrder(){
    let maxOrder = 0
    for (let item of varor){
        if (item.order > maxOrder){
            maxOrder = item.order
        }
    }
    return maxOrder
}
function getItemOfOrder(order){
    for (let vara of varor){
        if (vara.order === order){
            return vara
        }
    }
}

$: varor.sort(function(a,b){
    return a.order - b.order})

function changeOrderLower(vara){
    if (vara.order < getMaxOrder()){
    varor[varor.indexOf(vara)].order += 1
    for (let item of varor){
        if (vara.order === item.order && item != vara){
            varor[varor.indexOf(item)].order -= 1
        }
    }
}
}

</script>

<main class = container>
<h1>Shopping List</h1>

<div class = catagories_container>
<section>
<h2>Varor att Köpa</h2>
<ol>
    {#each varor as vara}
        {#if vara.type === "köpa"}
            <li transition:fade>
                <input type="submit" value= {vara.name} on:click={moveItem(vara)}>
                <input type="submit" value = ↑ on:click={changeOrderHigher(vara)}>
                <input type="submit" value = ↓ on:click={changeOrderLower(vara)}>
                <input type="submit" value = X on:click={removeItem(vara)}>
            </li>
        {/if}
    {/each}
</ol>
</section>

<section>
<h2>Köpta varor</h2>
<ul>
    {#each varor as vara}
        {#if vara.type === "köpt"}
            <li transition:fade>
                <input type="submit" value= {vara.name} on:click={moveItem(vara)}>
                <input type="submit" value = X on:click={removeItem(vara)}>
            </li>
        {/if}
    {/each}
</ul>
</section>
<form on:submit|preventDefault={handleSubmit}>
    <label for="vara">Ny vara:</label>
    <input type="text" id="vara" bind:value={nyvara}>
    <input type="submit" value="Lägg till ny vara">
</form>
</div>
</main>



<style>
    
.container{
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;     
    background-color: rgba(13, 141, 176, 0.518);
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    
}
.catagories_container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 10px;
    background-color: rgba(199, 36, 71, 0.758);
    height: 100%;
    
}    

.container h1{
    justify-self: center;
    align-self: center;
    border-radius: 10px;
    font-size: 30px;
    padding: 10px;
    background-color: rgba(39, 244, 104, 0.926);
}

.catagories_container section{
    width: 100%;
    height: 100%;
}

.catagories_container section:first-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
.catagories_container section:last-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }
.catagories_container h2{
    font-size: 20px;
    text-align: center;
    background-color: rgba(197, 66, 23, 0.926);
    padding-top: 5px;
    padding-bottom: 5px;
}
.catagories_container section li{
    list-style-position:inside
    }
.catagories_container section ol{
    list-style: decimal;
}
.catagories_container section ul{
    list-style: circle;
}
input{
    color: rgb(0, 0, 0);
    border-radius: 10px;
    font-size: 15px;
    padding: 10px;
    background-color: rgba(100, 126, 175, 0.926);
}
li{
    border-bottom: 1px;
    border-style: dashed;
    padding-bottom: 5px;
    border-color: rgb(217, 237, 237);
}
</style>