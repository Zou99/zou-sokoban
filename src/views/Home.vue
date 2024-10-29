<template>
	<div class="SokenBanContainer">
		  <Game></Game> 
	</div>
</template>

<script setup lang="ts">
	import Game from '../components/game/game.vue';
</script>

<style>
	.SokenBanContainer{
		width: 100%;
		height: 100vh;
		background-image: url('/src/static/moutenBg.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>