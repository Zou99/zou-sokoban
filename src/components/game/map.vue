<template>
	<div class="mapCotainer">
		<div class="flex" v-for="(row,i) in mapdata" :key="i">

			<div v-for="(col, k) in row" :key="k">
				<template v-if="col === MapTile.Wall">
					<img class="sokobanWall" src="/src/static/wall.jpg" alt="" />
				</template>
				<template v-else-if="col === MapTile.Floor">
					<img class="sokobanFloor" src="/src/static/floor.jpg" alt="" />
				</template>
			</div>
		</div>

		<!-- 人物模型组件 -->
		<Player></Player>

		<!-- 箱子模型组件 -->
		<template v-for="item in cargoArr">
			<Cargo :x="item.x" :y="item.y"></Cargo>
		</template>
		
		<!-- 箱子的指定地点 -->
		<template v-for="item in cargotargetArr">
			<CargoTarget :x="item.x" :y="item.y"></CargoTarget>
		</template>
	</div>
</template>


<script setup lang="ts">
	import Player from './player.vue';
	import Cargo from './cargo.vue';
	import CargoTarget from './cargoTarget.vue';
	import { useMapStore, MapTile } from '../../store/map';
	import { useCargoStore } from '../../store/cargo'
	import { useCargoTargetStore } from '../../store/cargotarget'
	const mapdata = useMapStore().map;
	const { cargoArr } = useCargoStore()
	const { cargotargetArr } = useCargoTargetStore()
	
</script>

<style scoped>
	.mapCotainer {
		position: relative;
	}

	.sokobanFloor,
	.sokobanWall {
		width: 54px;
		height: 54px;
	}
</style>