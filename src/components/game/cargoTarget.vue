<template>
	<div class="CargoTargetContainer" :style="position">
		<img class="cargoImg" src="/src/static/cargodot.jpg" alt="" />
	</div>
</template>

<script setup lang="ts">
	import { usePosition } from '../../composables/usePosition'

	// 初始化箱子位置 + computed 计算属性计算位移
	interface CargoProps {
		x : number,
		y : number
	}
	const cargo = defineProps<CargoProps>();

	const { position } = usePosition(cargo)
</script>

<style scoped>
	.CargoTargetContainer {
		position: absolute;
		z-index: 2;
	}

	.cargoImg {
		width: 52px;
		height: 52px;
	}
</style>