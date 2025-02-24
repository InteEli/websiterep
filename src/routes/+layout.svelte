<script>
	import '../app.postcss';
	import { base } from '$app/paths';
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

</script>

<nav> 
<a href="{base}/">Home</a>
<a href="{base}/photoapp">Photo App</a>
<a href="{base}/register">Register</a>
<a href="{base}/login">Inloggning</a>
<a href="{base}/shoppinglist">Shopping List</a>
<a href="{base}/memory">Memory</a>
<a href="{base}/chat">Chat Bot</a>
<a href="{base}/search">Search</a>
<a href="{base}/uxlogin">Register</a>
<a href="{base}/epicspaceshooter">Epic Space Shooter</a>
<a href="{base}/TimeLess">Timeless</a>
</nav>

<slot />

<style>
:global(body), :global(html){
  margin: 0%;
  padding: 0%;
  height: 100vh;
  width: 100vw;
}    
a{
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	background-color: navy;
	color: white;
	text-decoration: none;
	border-radius: 5px;
}
nav{
	display: flex;
	width: 100%;
	height: 30px;
	flex-direction: row;
	background-color:navy;
	justify-content: space-around;
	align-content: center;
	position: fixed;
	left: 0px;
	top: 0px;
	z-index: 100;
}
a:hover{
	align-content: center;
	justify-content: center;
	transform: scale(1.1);
	background-color:midnightblue;
}

@media screen and (max-width: 700px) {
    nav {
        display: grid;
		grid-template-rows: repeat(2, 30px);
        grid-template-columns: repeat(6, 1fr);
        height: auto;
        padding: 10px;
        gap: 10px;
    }
    nav a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background-color: navy;
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }
    nav a:hover {
        background-color: midnightblue;
    }}
</style>
