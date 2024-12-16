<main>
    <slot>

    </slot>
</main>
<div class = "backdrop">

</div>

<style>
    main{
        display: flex;
        flex-direction: column;
        width: 80vw;
        height: 100vh;
        background-color: rgba(176, 176, 168, 0.815);
        margin: 5vh auto;
        border-radius: 10px;
        align-content: center;
        justify-content: center;
    }
    .backdrop{
        background-image: url(https://www.azabudai-hills.com/azabudaihillsgallery/sp/kogei-pokemon-ex/assets/images/kv_02_pc_re3.jpg);
        background-size: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(5px);
    }
</style>