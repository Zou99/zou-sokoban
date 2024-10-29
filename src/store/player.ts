import { defineStore } from 'pinia';
import { reactive } from 'vue'
import { useMapStore } from './map';
import { useCargoStore } from './cargo';
export const useplayerStore = defineStore('player', () => {
	// 初始人物位置
	const player = reactive({
		x: 1, y: 1
	})
	
	// 移动事件
	// 判断是否触墙
	const { isWall } = useMapStore();
	// 判断是否推到箱子了
	const { isCargo, ToTouchCargo, IsClearance } = useCargoStore();
	// 上
	function moveToUp() {
		if (isWall({ x: player.x, y: player.y - 1 })) return;
		if (isCargo({ x: player.x, y: player.y - 1 })) {
			const cargoResult = ToTouchCargo({ x: player.x, y: player.y - 1 }, 'up')
			if (!cargoResult) {
				player.y -= 1
			}
		} else {
			player.y -= 1
		};
		//每次移动后都执行判断是否通关
		IsClearance()
	}
	// 下
	function moveToDown() {
		if (isWall({ x: player.x, y: player.y + 1 })) return;
		if (isCargo({ x: player.x, y: player.y + 1 })) {
			const cargoResult = ToTouchCargo({ x: player.x, y: player.y + 1 }, 'down')
			if (!cargoResult) {
				player.y += 1
			}
		} else {
			player.y += 1

		};
		//每次移动后都执行判断是否通关
		IsClearance()
	}
	// 左
	function moveToLeft() {
		if (isWall({ x: player.x - 1, y: player.y })) return;
		if (isCargo({ x: player.x - 1, y: player.y })) {
			const cargoResult = ToTouchCargo({ x: player.x - 1, y: player.y }, 'left')
			if (!cargoResult) {
				player.x -= 1;
			}
		} else {
			player.x -= 1;
		};
		//每次移动后都执行判断是否通关
		IsClearance()
	}
	// 右
	function moveToRight() {
		if (isWall({ x: player.x + 1, y: player.y })) return;
		if (isCargo({ x: player.x + 1, y: player.y })) {
			const cargoResult = ToTouchCargo({ x: player.x + 1, y: player.y }, 'right')
			if (!cargoResult) {
				player.x += 1;
			}
		} else {
			player.x += 1;
		};
		//每次移动后都执行判断是否通关
		IsClearance()
	}


	return {
		player, moveToUp, moveToDown, moveToLeft, moveToRight
	}
})