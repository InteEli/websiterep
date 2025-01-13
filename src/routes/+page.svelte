
<script>
  	const layers = [0,1,2,3,4,5];
    let y = 0
</script>
<!--Delar upp sidan i två delar-->
<svelte:window bind:scrollY={y} />
<main>
	<div class="parallax-container">
    {#each layers as layer}
      <img
        style="transform: translate(0,{(-y * layer) / (layers.length - 1)}px)"
        src = "layer{layer}.png"
        alt="parallax layer {layer}"
      />
    {/each}
	</div>

  <div class="text">
	<span style="opacity: {1 - Math.max(0, y / 100)}"> Eli Sandberg Hellström  </span>
    <div class="foreground">
    	<h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
    	<h3>Dew it!<h3>
		<p id="inspo">
			"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
		</p>
		<p>
			"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span class = "quote">Patrick McKenzie, software engineer and entrepreneur</span>
		</p>
    </div>
	</div>
</main>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 4000"><path fill="#e7008a" fill-opacity="0.68" d="M0,96L7.3,101.3C14.5,107,29,117,44,117.3C58.2,117,73,107,87,96C101.8,85,116,75,131,58.7C145.5,43,160,21,175,53.3C189.1,85,204,171,218,213.3C232.7,256,247,256,262,250.7C276.4,245,291,235,305,229.3C320,224,335,224,349,218.7C363.6,213,378,203,393,170.7C407.3,139,422,85,436,80C450.9,75,465,117,480,165.3C494.5,213,509,267,524,245.3C538.2,224,553,128,567,80C581.8,32,596,32,611,37.3C625.5,43,640,53,655,80C669.1,107,684,149,698,170.7C712.7,192,727,192,742,160C756.4,128,771,64,785,42.7C800,21,815,43,829,69.3C843.6,96,858,128,873,160C887.3,192,902,224,916,218.7C930.9,213,945,171,960,165.3C974.5,160,989,192,1004,218.7C1018.2,245,1033,267,1047,240C1061.8,213,1076,139,1091,96C1105.5,53,1120,43,1135,58.7C1149.1,75,1164,117,1178,122.7C1192.7,128,1207,96,1222,90.7C1236.4,85,1251,107,1265,101.3C1280,96,1295,64,1309,69.3C1323.6,75,1338,117,1353,138.7C1367.3,160,1382,160,1396,138.7C1410.9,117,1425,75,1433,53.3L1440,32L1440,320L1432.7,320C1425.5,320,1411,320,1396,320C1381.8,320,1367,320,1353,320C1338.2,320,1324,320,1309,320C1294.5,320,1280,320,1265,320C1250.9,320,1236,320,1222,320C1207.3,320,1193,320,1178,320C1163.6,320,1149,320,1135,320C1120,320,1105,320,1091,320C1076.4,320,1062,320,1047,320C1032.7,320,1018,320,1004,320C989.1,320,975,320,960,320C945.5,320,931,320,916,320C901.8,320,887,320,873,320C858.2,320,844,320,829,320C814.5,320,800,320,785,320C770.9,320,756,320,742,320C727.3,320,713,320,698,320C683.6,320,669,320,655,320C640,320,625,320,611,320C596.4,320,582,320,567,320C552.7,320,538,320,524,320C509.1,320,495,320,480,320C465.5,320,451,320,436,320C421.8,320,407,320,393,320C378.2,320,364,320,349,320C334.5,320,320,320,305,320C290.9,320,276,320,262,320C247.3,320,233,320,218,320C203.6,320,189,320,175,320C160,320,145,320,131,320C116.4,320,102,320,87,320C72.7,320,58,320,44,320C29.1,320,15,320,7,320L0,320Z"></path></svg>
<style>
  main{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
    width: 100%;
  }
  
h2{
    color: rgb(255, 165, 0);
	font-size: 170%;
}
h3{
    color: #3cb371;
    font-family: sans-serif;
    font-weight: bold;
	padding-top: 30px;

}
span {
		position: relative;
		display: flex;
		font-size: 1em;
		text-transform: uppercase;
		will-change: transform, opacity;
		font-family:'Gill Sans';
		font-size: 50px;
		color: black;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-content: center;
		padding-top: 2.75em;
	}
.quote{
	font-family: sans-serif;
	font-size: 120%;
	padding: 0;
}
#inspo{
    font-family: courier;
    font-size: 180%;
}

.parallax-container {
		position: fixed;
		width: 2400px;
		height: 1342px;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform;
	}

	.parallax-container img:last-child::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(52,23,45);
	}
  	.text {
		width: 100%;
		height: 100%;
	}

	.foreground {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 1342px;
		width: 100%;
		height: calc(100% - 1343px);
		color: white;
		margin-top: 20px;
		justify-content: center;
		align-content: center;
		align-items: center;
		text-align: center;
		padding-left: 13%;
		padding-right: 13%;
	}
	p{
		padding-top: 20px;
	}
  </style>
