<script>
let search
import {search_store} from "$lib/savedsearched";
import { onMount } from 'svelte';
import { base } from '$app/paths';
import { goto } from "$app/navigation";
let searchedList = [];

    onMount(() => {
        /*Check if has more then 2 characters*/
        if($search_store.length > 2){
         searchedList = JSON.parse($search_store);
        }
    });

    $: searchedList.sort(function(a,b){
        return b.length - a.length })

    function resetLinkList(){
        searchedList = []
        $search_store = JSON.stringify(searchedList);
    }
</script>
<main>
<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon logo">
<form on:submit|preventDefault={()=> goto('/search/'+search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>
<footer>
{#each searchedList as searchedItem}
<a href={ base+"/search/"+searchedItem.name}>{searchedItem.name}</a>
{/each}
</footer> 
</main>
<aside>
<input type="image" src = "https://teacherhead.com/wp-content/uploads/2015/01/reset.png?w=930&h=450&crop=1" alt = "restart button" on:click={resetLinkList} class = "restart">
</aside>
<style>
    main{
        width: 100%;
        height: 20%;
        display: grid;
        justify-content: center;
        align-content: center;
    }
    input{
        color: black;
        background-color: aliceblue;
        border-radius: 5px;
        justify-self: center;
    }
    footer{
        width: 100%;
        
    }
    a{
        display: flex;
        background-color: cornflowerblue;
        width: 100%;
        height: 60%;
        margin-top: 10px;
        border-radius: 20px;
        justify-content: center;
        align-content: center;
    }
    a:hover{
        transform: scale(1.1);
        background-color:aquamarine;
    }
    .restart{
        width: 100px;
        height: 100px;
    }
    aside{
    position: fixed;
    bottom: 10px;
    right: 10px;
    }
    img{
        width: 600px;
        height: 220px;
        align-self: center;
        align-self: center;
    }
    form{
        display: flex;
        justify-content: center;
    }
</style>