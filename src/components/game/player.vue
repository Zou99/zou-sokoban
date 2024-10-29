<template>
	<div class="PlayerContainer" :style="position">
		<img class="player" :src="playerImg" alt="" />
	</div>
</template>

<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from 'vue';
	import { useplayerStore } from '../../store/player';
	import { usePosition } from '../../composables/usePosition'

	// 定义人物图像 
	let playerImg = ref('/src/static/people/front.jpg');

	// 初始化人物位置 + 计算位移
	const { player } = useplayerStore();
	const { position } = usePosition(player);



	// 移动方法合集
	moveFun();
	function moveFun() {
		const { moveToLeft, moveToDown, moveToRight, moveToUp } = useplayerStore();

		// 键盘事件移动
		const handleKeyup = (e : KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowLeft':
					playerImg.value = '/src/static/people/left.jpg'
					moveToLeft();
					break;
				case 'ArrowDown':
					playerImg.value = '/src/static/people/front.jpg'
					moveToDown();
					break;
				case 'ArrowRight':
					playerImg.value = '/src/static/people/right.jpg'
					moveToRight();
					break;
				case 'ArrowUp':
					playerImg.value = '/src/static/people/back.jpg'
					moveToUp();
					break;
			}
		}

		// 页面已挂载的时期, 绑定键盘点击监听事件
		onMounted(() => {
			window.addEventListener("keyup", handleKeyup)
		})

		// 页面关闭挂载时期， 解除键盘点击事件
		onUnmounted(() => {
			window.removeEventListener("keyup", handleKeyup)
		})
	}
</script>

<style scoped>
	.PlayerContainer {
		position: absolute;
		z-index: 3;
	}

	.player {
		width: 52px;
		height: 52px;
	}
</style>