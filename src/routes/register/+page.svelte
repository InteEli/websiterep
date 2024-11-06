<script>
    import {users_store} from "$lib/user";
    import { base } from '$app/paths';
    
    import { onMount } from 'svelte';

    let users = [];

    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
         users = JSON.parse($users_store);
        }
    });


    

    let color = "black"
    let userName = ""
    let email = ""
    let password = ""
    let colors = [{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"}, {namn: "Grön", value: "green"},{namn: "Gul", value: "yellow"}]
    function handleSubmit(){
        if ((users.filter(users => users.username === userName)).length > 0){
            alert("Användarnamnet finns redan, välj ett annat.")
        }
        else{
            alert("Välkommen" + " " + userName + " " + email +" " + password)
        
            let new_user = {username: userName, password: password, email: email, color: color};
            users = [...users, new_user];
            $users_store = JSON.stringify(users);
        }

    }
</script>
<main>
<div class = "container">
<h1>Registering</h1>
<div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"></div>
<form on:submit|preventDefault={handleSubmit}>
<label for="name">Namn:</label>
<input type="text" id="name" bind:value={userName}>

<label for="epost">E-Post:</label>
<input type="email" id="epost" bind:value={email}>

<label for="pass">Lösenord:</label>
<input type="password" id="pass" bind:value={password}>

<label for="colour">Favorit Färg:</label>

<select name="c" id="colour" bind:value={color}>
    {#each colors as c}
    <option value={c.value}>{c.namn}</option>
    {/each}

</select>
<input type="submit" value="Registera">

</form>

<h2>Har du redan ett konto? <a href="{base}/login">Logga in</a></h2>



</div>
</main>

<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        min-height: 550px;
        width: 100%;
        height: 100%;
        padding: 5%;
    }  
.container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
        display: flex;
        min-width: 300px;
        min-height: 500px;
        align-items:center;
        justify-content:center;
        flex-direction: column;
        align-content: space-evenly;
}       
label{
    color: rgb(255, 254, 254);
}
input{
    color: rgb(0, 0, 0);
}
select{
    color: rgb(0, 0, 0);
}       
</style>
