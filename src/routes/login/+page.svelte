<script>
    import { base } from '$app/paths';
    import {users_store} from "$lib/user";
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
    let password = ""
    function handleSubmit(){
        let userSameName = users.filter(users => users.username === userName)
        if (userSameName.length > 0 && userSameName[0].password === password){
            alert("Hej igen," + userName)
        }
        else{
            alert("Fel användarnamn eller lösenord")
        }
    }
</script>
<main>
<div class = "container">
<h1>Inloggning</h1>
<form on:submit|preventDefault={handleSubmit}>

<label for="userName">Användarnamn:</label>
<input type="text" id="UserName" bind:value={userName}>

<label for="pass">Lösenord:</label>
<input type="password" id="pass" bind:value={password}>

<input type="submit" value="Logga In">

</form>
<h2>Har du inget konto? <a href="{base}/register">Registera</a></h2>


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
