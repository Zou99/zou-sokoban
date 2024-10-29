<template>
	<div class="gameContainer">
		<Map></Map>
		<div class="gameGood" v-if="IsClearance()">
			<img src="/src/static/success.gif" alt="" />
		</div>
	</div>
</template>


<script setup lang="ts">
	import Map from './map.vue';
	import { useCargoStore } from '../../store/cargo';
	const { IsClearance } = useCargoStore();
	// ...  这里执行如果通关成功后，关闭游戏页面，跳转到选择关卡 或者其他页面
	if(IsClearance()){
		window.removeEventListener("keyup",()=>{})
	}
</script>

<style scoped>
	.gameContainer{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		position: relative;
	}
	.gameGood{
		position: absolute;
		z-index: 4;
	}
</style>
