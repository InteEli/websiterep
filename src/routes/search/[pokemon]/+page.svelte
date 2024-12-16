
<script>
    import { page } from "$app/stores";
    import {search_store} from "$lib/savedsearched";
    import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let searchedList = [];
    let onMountReady = false
    onMount(() => {
        /*Check if has more then 2 characters*/
         console.log($search_store+"store")
        if($search_store.length > 2){
         searchedList = JSON.parse($search_store);
        }
        waitForOnMount()
        });
    async function waitForOnMount(){
            onMountReady = true
        }
    async function addLink(length){
        await waitForOnMount()
        let currentAddress = {name :$page.params.pokemon.toLowerCase(), length: length}
        let noCurrentAddress = false
        for (let addresses of searchedList){
            if (addresses.name === currentAddress.name){
                noCurrentAddress = true
            }
        }
        if(searchedList.length < 5 && noCurrentAddress === false){
            searchedList = [...searchedList, currentAddress]
           }
        else if(searchedList.length === 0){
            searchedList = [...searchedList, currentAddress]
        }
        else if(searchedList.length === 5 && noCurrentAddress === false){
            searchedList.splice(0,1)
            searchedList = [...searchedList, currentAddress]
        }
        $search_store = JSON.stringify(searchedList);
        return 

    }
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 

  <h2>{addLink(pokemon.response.height)}</h2>
  <h1>{pokemon.response.name}</h1>
 
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
  </article>
 
  <section>
  <p>Vikt: {pokemon.response.weight/10} kg</p>
  <p>Längd: {pokemon.response.height/10} m</p>
  <p>{pokemon.response.name} kan ha dessa moves:</p>
  <div class = "grid">
  {#each pokemon.response.moves as moves}
  <article class = "moves">
  <p>{moves.move.name}</p>
  </article>
  {/each}
  </div>
  </section>
  
  {/await}  

  <style>
    article{
        display: flex;
        width: 100%;
        height: 30%;
        gap: 1em;
        overflow:scroll;
        justify-content: center;
        align-content: center;
    }
    .grid{
        width: 100%;
        height: 50%;
        display: grid;
        grid-template-columns: repeat(10, 8%);
        align-items: center;
        justify-content: center;
        grid-gap: 10px;
        overflow-y: scroll;
    }
    .moves {
        width: 100%;
        height: 100%;
        background-color: cadetblue;
        padding: 10px;
        border-radius: 10px;
        overflow: visible;
    }
    h1{
        font-size: large;
        text-transform: capitalize;
        text-align: center;
    }
    section{
        padding: 20px;
        display: grid;
        width: 80vw;
        height: 80%;
        justify-content: center;
        align-content: center;
    }
    h2{
        font-size: 0%;
    }
    </style>
  
  
    