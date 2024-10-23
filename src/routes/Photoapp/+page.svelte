<script>
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"
</script>


<h1>Photo App </h1>
<p>Denna sida innehåller fina bilder!</p>

<div class = "photos">
    <div class = "image-wrapper">
    <img src={image}  alt="Flexbox egenskaper">
    </div>

    <div class = "image-wrapper">
    <img src={photo} alt= "en bild om något">
    </div>

    <div class = "image-wrapper">
    <img src={picture} alt= "en annan bild av någonting som finns i detta universum">
    </div>

</div>

<style>
    .photos{
        display: flex;
        max-width: 100vw;
        overflow:hidden;
        align-items:center;
        justify-content:center;
        flex-wrap: wrap;
        background-color: rgb(174, 26, 26);
    }
    .photos img{
        border-radius: 20px;
    }
    
    .image-wrapper img{ 
        border: 2px solid white;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
        flex-grow: 1;
        flex-basis: 300px;
        margin:0px;
        width: 100%; }

    .image-wrapper:hover { 
        flex-grow:2; 
        transition: flex 0.4s;
    }
    .image-wrapper:active { 
        transform: scale(0.9); 
        transition: transform 0.4s;
        }
    
    h1{
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: rgb(222, 0, 0);
    }
</style>