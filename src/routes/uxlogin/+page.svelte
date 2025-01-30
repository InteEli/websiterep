<script>
    import { onMount } from 'svelte';
    const stringletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let letters = [];
    let userName = [];
    let phonenum = 0;
    let slots = [0, 0, 0];
    let isSpinning = false;
    let showLetters = false;
    let password = ""
    let passwordConfirm = ""
    let firstQuestion = false;
    let secondQuestion = false;
    let thirdQuestion = false;
    let forthquestion = false;
    let fithQuestion = false;
    let allPassCorrect = false;
    let captcha = "Loading CAPTCHA...";
    function addletter(index){
        let letter = letters[index];
        userName += letter.letter;
        letter = letter;
    }
    setInterval(()=>{
        if(showLetters){
        console.log("showing letters")
        updateLetters()}
    }, 2000)

    function updateLetters(){
        letters = []
        for (let letter of stringletters){
        let top = Math.random() * 100;
        let left = Math.random() * 100;
        letters.push({letter:letter, top:top, left:left})}
    }


    function spinSlots() {
        isSpinning = true;
        slots[0] = Math.floor(Math.random() * 31);
        slots[1] = Math.floor(Math.random() * 2500);
        slots[2] = Math.floor(Math.random() * 12);
        checkPassWord()
        setTimeout(() => {
            isSpinning = false;
        }, 1000); 
    }
    function removeLetter(){
        userName = userName.slice(0, -1);
    }
    function hideLetters(){
        letters = []
        showLetters = false;
    }
    function showLettersfunc(){
        letters = []
        showLetters = true;
        updateLetters()
    }
    function updateCaptcha(){
        if(captcha === "Failed to load CAPTCHA"){
            captcha = "Loading CAPTCHA..."
        }
        setInterval(()=>{
            captcha = "Failed to load CAPTCHA"
        }, Math.floor(Math.random() * 30000))
    }
    function checkPassWord(){
        let numbers = 0;
        allPassCorrect = true;
        if (password.length >= 5){
            firstQuestion = true;
        }
        else{
            firstQuestion = false;
            allPassCorrect = false;
        }
        let myString = password.replace(/\D/g,'');
        if (myString.length >= 2){
            secondQuestion = true;
        }
        else{
            secondQuestion = false;
            allPassCorrect = false;
        }
        let passwordnumbers = myString.split("");
        for (let number of passwordnumbers) {
            numbers += parseInt(number, 10);
            console.log(numbers)
        }
        
        if(numbers === 30){
            forthquestion = true;
        }
        else{
            forthquestion = false;
            allPassCorrect = false;
        }
        let specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (specialCharacters.test(password)){
            thirdQuestion = true;
        }
        else{
            thirdQuestion = false;
            allPassCorrect = false;
        }
        console.log(slots[1])
        if (password.includes(slots[1].toString())){
            
            fithQuestion = true;
        }
        else{
            fithQuestion = false;
            allPassCorrect = false;
        }
    
        return password}
        $: phonenum = Math.round(phonenum);
        $: phonenum = Math.abs(phonenum);
        $: password = checkPassWord(password);
    onMount(() => {
        spinSlots();
        updateCaptcha();
    });

</script>
<main>
    <h1>SIGN UP</h1>
    <h1>Birthday slot</h1>
    <div class="slot-machine">
        {#each slots as slot, index}
        <div>
        {#if (index === 0)}
            <h2>Day</h2>
        {/if}
        {#if (index === 1)}
            <h2>Year</h2>
        {/if}
        {#if (index === 2)}
            <h2>Month</h2>
        {/if}
            <div class="slot" class:loop={isSpinning}>
                <div class="slot-inner">
                    {#if isSpinning}
                        {#each Array(10).fill(0) as _, i}
                            <div>{i}</div>
                        {/each}
                    {:else}
                        <div>{slot}</div>
                    {/if}
                </div>
            </div>
        </div>
        {/each}
    </div>
    <button on:click={spinSlots} disabled={isSpinning} class = "spinbutton">Spin</button>
    <div class = "telephone">
        <h2>Phone number</h2>
        <h3>{phonenum}</h3>
        <div class = "mathsymbols">
            <button on:click={()=>phonenum += 7} >+9</button> 
            <button on:click={()=>phonenum /= 3}>*5</button>
            <button on:click={()=>phonenum *= 2}>/12</button>
            <button on:click={()=>phonenum **= 2}>^2</button>
            <button on:click={()=>phonenum **= 0.5}>-1</button>
            <button on:click={()=>phonenum -= 3}>-2</button>
        </div>
    </div>

    <div class = "passwordGame">
        <label for="pass">Password:</label>
        <input type="password" id="pass" bind:value={password}>
        <div>
            <p class:correct={firstQuestion}>Your password needs to be atleast 5 characters</p>
            <p class:correct={secondQuestion}>Your password needs to contain atleast two numbers</p>
            <p class:correct={thirdQuestion}>Your password needs to contain atleast one special character</p>
            <p class:correct={forthquestion}>The indivdual numbers in your password needs to be add up to 30</p>
            <p class:correct={fithQuestion}>Your password needs to contain the current year displayed on the slot machine</p>
        </div>
    </div>
    <div class = "email">
        <h2>Email</h2>
        <input type="email" id="email">
    </div>
</main>
<div class="username">
    <h2>Username</h2>
    <h3>{userName}</h3>
    <button on:click={showLettersfunc}>Start Writing</button>
    <button on:click={removeLetter}>Remove</button>
    <button on:click={hideLetters}>Done</button>
</div>
<div class = "confirmPassword">
    <h2>Confirm Password</h2>
    <input type="password" id="pass" bind:value={passwordConfirm}>
    {#if !allPassCorrect}
        <p>Password does not meet all the conditions</p>
    {:else if password === passwordConfirm}
        <p>Password match</p>
    {:else}
        <p>Password does not match</p>
    {/if}
    <button on:click={updateCaptcha} class = "captcha">{captcha}</button>
</div>



<section>
{#each letters as {letter, top, left},i}
    <button on:click={()=>addletter(i)} style="position: absolute; top: {top}%; left: {left}%;" class = "letterbutton">{letter}</button>
{/each}
</section>



<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
        width: 90vw;
    }
    .letterbutton {
        align-content: center;
        background-color: cornflowerblue;
        border-radius: 50%;
        color: white;
        display: flex;
        font-size: 20px;
        height: 50px;
        justify-content: center;
        position: absolute;
        width: 50px;
    }
    button{
        background-color: blue;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        padding: 10px;
    }
    button:hover {
        background-color: aquamarine;
    }
    section{
        height: 80%;
        margin: auto;
        top: 0;
        left: 0;
        padding-top: 4%;
        position: relative;
        width: 80%;
    }
    button:active {
        background-color: blue;
        transform: scale(1.5);
        transition: ease-in;
    }
    .slot-machine {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 500px;
        height: 200px;
        color: black;
        background-image: url(https://t1.pixers.pics/img-c676e9e9/posters-slot-machine.jpg?H4sIAAAAAAAAA42PWU7EMAxAr9OR0tpN4iw9wPzOEao2yQyFLlFSoOL0pID4Q0L-8CL7WQ9e1zzcA7iw7iHBMnk_B7hPc-lyl0KePkIlpWJ46cp0rhBLtb2F5NIWq7pFxWpuGJFkSvBL9z6Uy2VIL9XTvsfcAWTRxOkouJJcBrdk4NhqQANkjfVEQTqjQx_rvA-rH5KvuTwENnF9MDzj_1gDLQKNvh3VaDzK0fSc40FY_xK-sEIIRopO9I-kRmT6lNvTtFTFdivbe_UcHxf44-d3DeUKrrciA1aD5aDUOeqvN7JWW65U74xRjtAOAoMQlop369Fx4kJpib4pXz4BwMsoOYoBAAA=);
    }
    .mathsymbols{
        display: grid;
        grid-template-columns: repeat(4, 50px);
        justify-content: center;
        align-content: center;
    }
    .slot {
        display: inline-block;
        height: 30px;
        width: 50px;
        overflow: hidden;
        border: 1px solid #000;
        font-size: large
npm run build
git add .
git commit -m "message" #change message to given task
git push
;
    }
    .slot-inner {
        display: block;
        height: 400px; /* Adjust height to fit all numbers */
        width: 100%;
        font-size: large;
    }
    .loop .slot-inner {
        animation: slide 1s infinite linear;
    }
    @keyframes slide {
        0% { transform: translateY(0); }
        100% { transform: translateY(-360px); } /* Adjust based on height */
    }
    button {
        margin-top: 20px;
    }
    input{
        color: rgb(0, 0, 0);
    }
    p{
        font-size: 20px;
        background-color: red;
    }
    .correct{
        background-color: green;
    }
    .username{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 20vw;

        top: 3%;
        left: 3%;
    }
    .confirmPassword{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 20vw;
        top: 3%;
        right: 3%;
    }
    .email{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 20px;
        height: 10px;
        top: 20%;
        right: 0%;
    }
    #email{
        border-radius: 10px;
        font-size: 20px;
        padding: 10px;
        width: 30px;
    }
    .captcha{
        background-color: black;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        padding: 10px;
    }
</style>